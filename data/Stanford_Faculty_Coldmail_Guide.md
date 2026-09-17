# Stanford Faculty, Postdocs & PhDs Cold-Email Directory & Strategy Guide

This guide is tailored specifically for **Vidit Gupta** (B.Tech IT, D. J. Sanghvi College of Engineering, GPA 9.1). It maps your research in **Transformer Query-Key Geometry, Representation Dynamics, Residual Stream Covariance, and Scaling Laws** directly to faculty, postdocs, and PhD students at **Stanford University (CS / Hazy Research / CRFM / Applied Physics)**.

---

## Strategic Overview: Vidit's Research Angle at Stanford

| Vidit's Work & Strengths | Best Stanford Lab Match | Strategic Hook |
| :--- | :--- | :--- |
| **Associative Recall & Query-Key Geometry** (Evaluated on Zoology recall probe, finite-width derivations) | **Christopher Ré** (Hazy Research) | Direct citation match: you evaluated your initialization family on Simran Arora & Sabri Eyuboglu's *Zoology* recall probe; diagnosed gradient-clipping saturation on associative recall. |
| **Analytical Query-Key Dynamics & Scaling** (Continuous $W_Q, W_K$ family, Isserlis moments) | **Surya Ganguli** (Applied Physics / CS) | Direct theoretical match: Ganguli and Blake Bordelon study exact dynamics of deep networks and infinite/finite limits of multi-head transformers. |
| **Residual Stream Anisotropy & Normalization Boundary** (Near-rank-1 raw residual vs. RMSNorm) | **Percy Liang** (CRFM) / **Tatsunori Hashimoto** | Directly extends contextual representation anisotropy work (Ethayarajh) to modern open-weight LLMs (Qwen2.5, Mixtral-8x7B). |
| **Torch-IsoFLOPs & Chinchilla Scaling Framework** | **Christopher Ré** / **Percy Liang** | Empirical rigor in fitting compute-optimal scaling laws with fixed-budget experiments. |

---

# 1. Prof. Christopher Ré (Stanford CS – Hazy Research)
* **Title & Affiliation**: Associate Professor of Computer Science, Stanford University
* **Lab**: Hazy Research
* **Research Focus**: Efficient sequence models, subquadratic architectures (Mamba, Monarch, Hyena), hardware-aware algorithms (FlashAttention), and evaluation of associative recall.
* **Why You Match**: In your paper *A Continuous Space of Attention Projection Geometries at Initialization*, you explicitly cite and run experiments on the **Zoology** benchmark developed by Simran Arora, Sabri Eyuboglu, Michael Poli, and Christopher Ré (ICLR 2024). You uncovered that associative recall probes can become clip-saturated, obscuring query-key geometric differences.

### Which Work to Read Before Mailing
1. *Zoology: Measuring and Improving Recall in Efficient Language Models* (Arora, Eyuboglu, Timalsina, Johnson, Poli, Zou, Rudra, Ré, ICLR 2024).
   - *Key Takeaway*: Evaluates associative recall as the bedrock diagnostic for in-context retrieval across attention and state space models.
2. *FlashAttention-2 / FlashAttention-3: Faster Attention with Better Parallelism and Work Partitioning* (Dao et al., 2023–2024).
   - *Key Takeaway*: Exact memory IO and tiling of query-key matrix multiplication.
3. *Monarch: Expressive Structured Matrices for Efficient Deep Learning* (Dao et al., 2022).

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Un-saturating the Zoology Associative Recall Probe under Continuous QK Initializations"*
  - **What to build**: In your paper, associative recall was clip-saturated ($4.171 \to 4.172$ loss plateau). Build an un-saturated synthetic multi-query associative recall (MQAR) experiment with lower learning rate and increased KV-vocabulary difficulty. Show how your continuous initialization family $(\alpha, \beta, \gamma)$ dictates the speed of induction head formation on MQAR.
  - **Deliverable**: A clean 1-page writeup with training loss curves and attention entropy dynamics on MQAR, hosted on GitHub.

---

### Postdocs & Research Scientists Under Prof. Christopher Ré

#### 1. Dr. Michael Poli (Postdoc / Researcher)
* **Research Focus**: Mechanistic architectures, Hyena hierarchy, signal processing and dynamical systems in sequence models.
* **Which Work to Read**: *Hyena DNA* / *Monarch Mixer*.
* **Which Work to Make**: Compare the participation ratio evolution ($PR_Q - PR_K$) of attention heads against the convolutional filter spectral decay in Hyena.

#### 2. Dr. Tri Dao (Former PhD / Postdoc, now Assistant Prof at CMU / Hazy affiliate)
* **Research Focus**: Hardware-efficient deep learning, FlashAttention, Mamba.
* **Which Work to Read**: *Transformers are SSMs: Generalized Models and Efficient In-Context Learning*.
* **Which Work to Make**: Profile the kernel memory overhead of streaming covariance estimation for long contexts.

---

### PhD Students Under Prof. Christopher Ré

#### 1. Simran Arora (PhD Student – Lead author of Zoology)
* **Research Focus**: Long-context reasoning, associative recall, efficient LLMs.
* **Which Work to Read**: *Zoology: Measuring and Improving Recall in Efficient Language Models* (ICLR 2024).
* **Which Work to Make**: Benchmark your $W_K$ spectrum clamping intervention during associative recall training.

#### 2. Sabri Eyuboglu (PhD Student – Co-author of Zoology)
* **Research Focus**: Foundation model architectures, mechanistic evaluation, multi-modal systems.
* **Which Work to Read**: *Cartography of In-Context Learning*.
* **Which Work to Make**: Build a diagnostic dashboard linking Zoology synthetic recall accuracy to layer-wise participation ratio ($PR_Q, PR_K$).

#### 3. Dan Fu (PhD Student)
* **Research Focus**: FlashFFTConv, simple architectures with subquadratic scaling.
* **Which Work to Read**: *Hungry Hungry Hippos: Towards Language Modeling with State Spaces*.
* **Which Work to Make**: Test if state-space models exhibit a similar key-specialization phenomenon as transformers.

---

### Cold Email Template for Prof. Christopher Ré / Hazy Research

```text
Subject: Prospective Research Intern: Associative Recall & Query-Key Geometric Dynamics (DJSCE Undergrad)

Dear Professor Ré [or Simran / Sabri],

[Who am I]
My name is Vidit Gupta, an undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on the theoretical and empirical geometry of transformer query-key projections, mechanistic diagnostics, and efficient LLM systems.

[I read your work]
I have been deeply engaged with Hazy Research's work on sequence model primitives, particularly the Zoology benchmark [Arora, Eyuboglu, et al., ICLR 2024]. Your methodology for evaluating associative recall as a core architectural capability directly informed my recent experimental design.

[I did this]
In my recent preprint, "A Continuous Space of Attention Projection Geometries at Initialization", I developed a continuous, energy-matched initialization family for query-key projections W_K = s(αA + βB + γC) with row-space orthogonality AB^T = 0, proving exact finite-width score moments. In training probes across 1,344 jobs, I found that standard associative recall became clip-saturated across all initial geometries, whereas TinyStories exposed stark scale vs. geometry separations. In a companion paper ("Query Expansion and Key Specialization", ACML 2026 sub.), I showed that key-side spectral participation ratio (PR_K) systematically contracts across training, acting as a causal control surface for QK^T interaction rank and attention entropy.

[I want internship / collaborator role]
To extend your Zoology insights, I built a retuned multi-query associative recall (MQAR) testbed that prevents gradient-clip saturation and benchmarks how initial QK geometry dictates the exact step at which recall capability emerges [link to GitHub / writeup].

I would love to contribute to Hazy Research as a research intern or student collaborator (remote, 25–30 hrs/week). I have extensive experience training custom transformers from scratch, building custom KV cache inference runtimes, and developing mathematical metrics for representation geometry.

Would you be open to a 10-minute chat to discuss this?

Best regards,

Vidit Gupta
viditanupgupta@gmail.com | +91 89835 20121
Portfolio: [link] | GitHub: [link] | Google Scholar: [link]
```

---

# 2. Prof. Surya Ganguli (Stanford Applied Physics / Neurobiology / CS)
* **Title & Affiliation**: Associate Professor of Applied Physics and, by courtesy, of Neurobiology, Electrical Engineering, and Computer Science.
* **Research Focus**: Theory of deep learning, mathematical physics of neural computation, exact learning dynamics in deep linear networks, random matrix theory, and representation geometry.
* **Why You Match**: In your paper, you cite Saxe, McClelland, and Ganguli (2014) (*Exact solutions to the nonlinear dynamics of learning in deep linear neural networks*) and Blake Bordelon & Cengiz Pehlevan (2024) (*Infinite limits of multi-head transformer dynamics*). Your derivation of finite-width Grassmannian moments and participation ratio tracking directly matches Ganguli’s research paradigm.

### Which Work to Read Before Mailing
1. *Exact Solutions to the Nonlinear Dynamics of Learning in Deep Linear Neural Networks* (Saxe, McClelland, Ganguli, 2014).
   - *Key Takeaway*: Non-convex gradient dynamics have exact analytical trajectories characterized by singular value evolution.
2. *The Shape of Learning: Geometry and Dynamics in Deep Representations* (Ganguli Lab).
3. *A Mathematical Theory of Semantic Development in Deep Neural Networks* (Saxe et al., PNAS).

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Analytic Singular Value Dynamics of the QK^T Interaction Matrix in Linear Transformers"*
  - **What to build**: Derive and simulate the continuous-time gradient flow on $W_Q^\top W_K$ in a 1-layer linear self-attention model using Ganguli's singular-value decomposition framework. Show how initial alignment $\alpha$ dictates whether singular values expand symmetrically or undergo key-selective collapse.
  - **Deliverable**: A 2-page mathematical note with numerical simulation matching your theoretical predictions.

---

### Postdocs & PhD Students Under Prof. Surya Ganguli

#### 1. Dr. Blake Bordelon (Former Collaborator / Postdoc)
* **Research Focus**: Infinite-width limits, multi-head transformer dynamics, dynamical mean field theory (DMFT).
* **Which Work to Read**: *Infinite Limits of Multi-Head Transformer Dynamics* (Bordelon, Chaudhry, Pehlevan, 2024).
* **Which Work to Make**: Compare your finite-width variance equation (Proposition 1, $g_{ij}$) against Bordelon's infinite-width kernel limit to highlight finite-width deviation terms.

#### 2. Ben Sorscher (Recent PhD / Collaborator)
* **Research Focus**: Neural scaling laws, geometry of representations, data pruning.
* **Which Work to Read**: *Beyond Neural Scaling Laws: Beating Power Law Scaling via Data Pruning* (NeurIPS 2022).
* **Which Work to Make**: Use your `Torch-IsoFLOPs` framework to evaluate how parameter-data tradeoffs behave when representations undergo rank collapse.

#### 3. Kyle Aitken (Postdoc / Researcher)
* **Research Focus**: Geometry of neural manifolds, representation alignment across architectures.
* **Which Work to Read**: Manifold geometry in deep representations.
* **Which Work to Make**: Measure the intrinsic manifold dimensionality of residual streams using your participation ratio package.

---

### Cold Email Template for Prof. Surya Ganguli / Group

```text
Subject: Research Internship: Exact Finite-Width Dynamics & Geometry of Attention Projections

Dear Professor Ganguli [or Blake / Ben],

[Who am I]
My name is Vidit Gupta, an undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on the mathematical foundations of deep learning, random matrix theory in transformers, and the geometry of representations.

[I read your work]
Your seminal work on the exact nonlinear dynamics of learning and the geometry of representation learning has profoundly shaped my perspective on theoretical deep learning. I am particularly inspired by your group's focus on deriving analytical solutions for training dynamics and representation manifolds rather than treating models as black boxes.

[I did this]
In my paper, "A Continuous Space of Attention Projection Geometries at Initialization", I derived closed-form finite-width formulas for the first and second conditional moments of attention scores E[ℓ_ij|X] and Var(ℓ_ij|X) under an energy-matched continuous family W_K = s(αA + βB + γC) with row-space orthogonality AB^T = 0. Using Isserlis' theorem and integrating random rank-m projectors on R^d, I proved that orthogonal residuals induce an exact finite-width variance correction:
Var(ℓ_ij|X) = s^4 [ α^2(v_i v_j + c_ij^2) + β^2 g_ij + γ^2 v_i v_j ]
where g_ij reflects the finite-width Grassmannian geometry and converges to v_i v_j only as d -> inf. In empirical training runs, I tracked the participation ratio of queries and keys, observing that gradient descent drives asymmetric spectral contraction on the key projection.

[I want internship / collaborator role]
Ahead of reaching out, I formulated a short analytical note extending your singular-value gradient flow framework to the bilinear product W_Q^T W_K in linear self-attention [link to 2-page PDF / GitHub].

I would be honored to contribute to your group as a research intern / collaborator. I possess strong mathematical foundations in linear algebra and probability, paired with deep PyTorch systems implementation skills. Could we set up a brief 10-minute discussion?

Sincerely,

Vidit Gupta
viditanupgupta@gmail.com | Portfolio: [link] | GitHub: [link]
```

---

# 3. Prof. Percy Liang (Stanford CS – CRFM)
* **Title & Affiliation**: Associate Professor of Computer Science; Director of the Center for Research on Foundation Models (CRFM).
* **Research Focus**: Foundation models, holistic evaluation (HELM), representation auditing, and transformer behavior.
* **Why You Match**: Liang’s lab evaluates foundation model properties at scale. Your work *Residual-Stream Covariance Geometry in Transformer Language Models* evaluates Qwen2.5, Mixtral-8x7B, Pythia, and GPT-2 across 75k–300k token budgets, showing that middle-layer residual streams concentrate into a near-rank-1 direction that is selectively attenuated by RMSNorm.

### Which Work to Read Before Mailing
1. *Holistic Evaluation of Language Models (HELM)* (Liang et al., 2022–2023).
2. *Measuring and Understanding Inductive Biases in Foundation Models*.
3. Works by former students like Nelson Liu (*Lost in the Middle: How Language Models Use Long Contexts*).

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Context-Position Dependence of the Dominant Residual Component in Modern LLMs"*
  - **What to build**: Test whether the near-rank-1 raw residual direction you identified in Qwen2.5 is driven by early "attention sink" tokens or is invariant across sequence position chunks.
  - **Deliverable**: A short technical report with layer-by-position heatmaps across Qwen2.5-7B.

---

### PhD Students Under Prof. Percy Liang

#### 1. Nelson Liu (PhD Student)
* **Research Focus**: Long-context modeling, information utilization in transformers (*Lost in the Middle*).
* **Which Work to Read**: *Lost in the Middle: How Language Models Use Long Contexts* (TACL 2023).
* **Which Work to Make**: Correlate key participation ratio contraction with attention retrieval performance at varying token depths.

#### 2. Eric Wallace (Postdoc / Collaborator)
* **Research Focus**: Mechanistic interpretability, model editing, probing representations.
* **Which Work to Read**: Works on internal feature steering and safety probing.
* **Which Work to Make**: Perform a direction-ablation experiment removing the top raw-residual PC and test if perplexity degrades.

---

### Cold Email Template for Prof. Percy Liang / CRFM

```text
Subject: Prospective Research Intern: Residual-Stream Covariance & Normalization Dynamics in Foundation Models

Dear Professor Liang [or Nelson / Eric],

[Who am I]
My name is Vidit Gupta, a 2nd-year CS/IT undergraduate at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on the internal representation geometry of foundation models, residual-stream dynamics, and mechanistic analysis.

[I read your work]
I have followed CRFM's research on benchmarking foundation models and understanding their emergent representational structures. A key challenge is diagnosing what internal features are genuinely computation-facing versus artifacts of architecture or tokenization.

[I did this]
In my latest preprint ("Residual-Stream Covariance Geometry in Transformer Language Models"), I conducted a frozen-activation analysis of residual-stream covariance across GPT-2, Pythia, Qwen2.5, and Mixtral-8x7B on WikiText-103. I discovered that Qwen2.5 and Mixtral exhibit sustained near-rank-1 raw residual covariance across middle layers (L5–L25 in 14B), with a highly aligned leading direction (cosine > 0.999). However, block-stage diagnostics revealed that RMSNorm attenuates this dominant direction by 10^-7, showing that raw residual anisotropy does not equate to low-dimensional computation.

[I want internship / collaborator role]
To build on your work on context utilization, I evaluated how this dominant residual direction varies across sequence positions (prompt vs. generation tokens) in open LLMs [link to brief report / code].

I would love to contribute to CRFM as a research intern on foundation model internals, representation auditing, or context dynamics. I am comfortable handling multi-billion parameter models on distributed GPU clusters and have written streaming covariance libraries from scratch. Would you have 10 minutes for a brief call?

Best regards,

Vidit Gupta
viditanupgupta@gmail.com | Portfolio: [link] | GitHub: [link]
```

---

# 4. Prof. Tatsunori Hashimoto (Stanford CS)
* **Title & Affiliation**: Assistant Professor of Computer Science, Stanford University
* **Research Focus**: Statistical machine learning, language model evaluation, representation drift, and contextual representations.
* **Why You Match**: Hashimoto advised Kawin Ethayarajh on *How Contextual are Contextualized Word Representations? Comparing the Geometry of BERT, ELMo, and GPT-2 Embeddings* (which you cite directly in your residual-stream paper!). Your work directly follows up on this literature by extending anisotropy analysis to modern pre-normalized LLMs.

### Which Work to Read Before Mailing
1. *How Contextual are Contextualized Word Representations?* (Ethayarajh, EMNLP 2019).
2. *Understanding the Weaknesses of Pre-trained Language Models*.

### Project to Make Before Mailing
* **Project Idea**: Compute Ethayarajh's anisotropy metric on both raw residual states and post-RMSNorm states across Qwen2.5, proving that modern models are anisotropic in storage but nearly isotropic in sublayer computation.

---

# 5. Prof. Sanmi Koyejo (Stanford CS)
* **Title & Affiliation**: Associate Professor of Computer Science, Stanford University
* **Research Focus**: Trustworthy machine learning, representation robustness, uncertainty quantification in foundation models.
* **Why You Match**: Koyejo works on auditing internal model representations to verify reliability and mechanistic boundaries. Your paper's finding that raw residual covariance collapse does not reflect computational collapse is a crucial cautionary diagnostic for trustworthy representation auditing.

### Which Work to Read Before Mailing
1. Works on mechanistic auditing of representations and uncertainty in LLMs.
2. *Characterizing Representational Drift and Calibration in Deep Networks*.

### Project to Make Before Mailing
* **Project Idea**: Test if the calibration error of token prediction logits increases when the top-PC of the raw residual stream is perturbed by Gaussian noise.
