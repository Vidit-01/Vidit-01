import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const indexFile = join(dist, 'index.html')

const routes = ['projects', 'brainrot']

await Promise.all(
  routes.map(async (route) => {
    const routeDir = join(dist, route)
    await mkdir(routeDir, { recursive: true })
    await copyFile(indexFile, join(routeDir, 'index.html'))
  }),
)
