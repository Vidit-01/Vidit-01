from pathlib import Path
from PIL import Image, ImageSequence

root = Path(r"D:\Vidit31\Code\Vidit-01\public\brainrot")

sahur = Image.open(root / "tung-tung-sahur.png").convert("RGBA")
width, height = sahur.size
pixels = sahur.load()


def near_white(color, tol=28):
    red, green, blue, alpha = color
    return alpha > 0 and red >= 255 - tol and green >= 255 - tol and blue >= 255 - tol


seen = set()
stack = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
for x in range(0, width, max(1, width // 40)):
    stack.extend([(x, 0), (x, height - 1)])
for y in range(0, height, max(1, height // 40)):
    stack.extend([(0, y), (width - 1, y)])

while stack:
    x, y = stack.pop()
    if x < 0 or y < 0 or x >= width or y >= height or (x, y) in seen:
        continue
    seen.add((x, y))
    if not near_white(pixels[x, y]):
        continue
    pixels[x, y] = (0, 0, 0, 0)
    stack.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

sahur.save(root / "tung-tung-sahur.png")
print("sahur", width, height)

gif = Image.open(root / "anime-dance.gif")
frames = []
durations = []
for frame in ImageSequence.Iterator(gif):
    rgba = frame.convert("RGBA")
    data = []
    for red, green, blue, alpha in rgba.getdata():
        if red < 18 and green < 18 and blue < 18:
            data.append((red, green, blue, 0))
        else:
            data.append((red, green, blue, alpha))
    rgba.putdata(data)
    frames.append(rgba)
    durations.append(frame.info.get("duration", 80))

frames[0].save(
    root / "anime-dance.gif",
    save_all=True,
    append_images=frames[1:],
    duration=durations,
    loop=0,
    disposal=2,
)
print("gif frames", len(frames), frames[0].size)
