# Princeton Faculty, Postdocs & PhDs Cold-Email Directory & Strategy Guide

This guide is tailored specifically for **Vidit Gupta** (B.Tech IT, D. J. Sanghvi College of Engineering, GPA 9.1). It maps your theoretical and empirical research in **Transformer Query-Key Geometry, Representation Dynamics, Residual Stream Covariance, and Scaling Laws** directly to faculty, postdocs, and PhD students at **Princeton University (ORFE / CS / Princeton NLP / PACM)**.

---

## Strategic Overview: Vidit's Research Angle at Princeton

| Vidit's Work & Strengths | Best Princeton Lab Match | Strategic Hook |
| :--- | :--- | :--- |
| **Exact Finite-Width Attention Moments & Random Projectors** ($AB^\top=0$ continuous geometry, Isserlis moments) | **Boris Hanin** (ORFE / Math / CS) | **Exceptional 1-to-1 theoretical match**: Hanin is a world leader in finite-width neural network theory, random matrix initialization, and signal propagation. Your Grassmannian projector derivations and finite-width variance $g_{ij}$ speak directly to his research agenda. |
| **Representation Learning Theory & Linear Manifolds** (Residual covariance, near-rank-1 attenuation) | **Sanjeev Arora** / **Colin Wei** (CS) | Arora and Wei study how representation learning and in-context learning emerge from gradient descent on attention architectures. |
| **LLM Representation Dynamics & Checkpoint Scaling** (Pythia, Qwen2.5, Mixtral residual geometry) | **Danqi Chen** (Princeton NLP) | Analyzing internal representation structures, prompt representations, and parameter-efficient mechanisms. |
| **Spectral Dynamics & Optimization Bounds** | **Mengdi Wang** (ORFE / ECE) | Theoretical analysis of foundation model spectra, low-rank structure, and representation learning. |

---

# 1. Prof. Boris Hanin (Princeton ORFE / Mathematics / CS)
* **Title & Affiliation**: Associate Professor of Operations Research and Financial Engineering (ORFE), Princeton University; Affiliated with PACM and Computer Science.
* **Research Focus**: Mathematics of deep learning, finite-width neural networks, initialization and signal propagation, products of random matrices, and rank collapse in deep networks.
* **Why You Match**: Hanin’s entire research program is dedicated to non-asymptotic random matrix theory and initialization in deep architectures. Your paper *A Continuous Space of Attention Projection Geometries at Initialization* derives exact finite-width moments ($E[\ell_{ij}|X]$ and $\text{Var}(\ell_{ij}|X)$) using Isserlis' theorem and orthogonal Grassmannian projections, and provides 1,728 Holm-corrected Monte Carlo verification tests. This is pure Boris Hanin-style theoretical deep learning.

### Which Work to Read Before Mailing
1. *Finite Depth and Width Corrections to the Neural Tangent Kernel* (Hanin & Nica, 2020).
   - *Key Takeaway*: Derives non-asymptotic finite-width variance corrections in deep neural networks.
2. *Products of Many Large Random Matrices and Training Dynamics of Deep Neural Networks* (Hanin, 2024).
   - *Key Takeaway*: Random matrix products govern gradient stability and representation collapse across layers.
3. *Signal Propagation and Rank Collapse in Transformers* (Noci, Anagnostidis, Biggio, Orvieto, Singh, Lucchi – closely connected to Hanin’s seminar topics).

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Non-Asymptotic Spectral Norm Bounds on the Query-Key Product W_Q^T W_K at Finite Width"*
  - **What to build**: Using your continuous family $W_Q = sA$ and $W_K = s(\alpha A + \beta B + \gamma C)$, compute the empirical spectral distribution (ESD) of the random product $W_Q^\top W_K$ as a function of the aspect ratio $m/d$. Compare the finite-width Marchenko-Pastur deviations against your theoretical variance formula $g_{ij}$.
  - **Deliverable**: A 2-page mathematical writeup with eigenvalue distribution plots, posted on GitHub.

---

### Postdocs & Collaborators Under Prof. Boris Hanin

#### 1. Dr. Aaron Zweig (Postdoc / Collaborator)
* **Research Focus**: Mathematical physics of neural networks, random matrix theory, feature learning.
* **Which Work to Read**: Papers on infinite-width corrections and representation manifolds.
* **Which Work to Make**: Check whether your $g_{ij}$ finite-width correction predicts feature learning speed in deep linear transformers.

#### 2. Dr. Jacob Zavatone-Veth (Collaborator / Fellow)
* **Research Focus**: Statistical mechanics of neural architectures, kernel dynamics.
* **Which Work to Read**: Exact dynamics of learning in structured neural networks.
* **Which Work to Make**: Derive the expected attention entropy under Gaussian inputs using your exact conditional score moments.

---

### Cold Email Template for Prof. Boris Hanin

```text
Subject: Research Internship: Finite-Width Moment Formulas for Attention Projections & Grassmannian Projectors

Dear Professor Hanin,

[Who am I]
My name is Vidit Gupta, an undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on the mathematics of deep learning, non-asymptotic random matrix theory in transformers, and initialization geometry.

[I read your work]
I have been studying your foundational work on finite-depth and finite-width corrections to neural network kernels, as well as your analyses of products of large random matrices during training. Your commitment to deriving exact mathematical formulas for deep network phenomena rather than relying on qualitative heuristics has strongly shaped my approach to research.

[I did this]
In my recent theoretical paper, "A Continuous Space of Attention Projection Geometries at Initialization", I investigated the joint geometry of query-key projections W_Q, W_K. I introduced a continuous, energy-matched parameterization W_Q = sA, W_K = s(αA + βB + γC) where B = G(I - UU^T) is projected onto the orthogonal complement of A's row space (AB^T = 0 exactly). Under this family, I derived closed-form finite-width formulas for conditional attention score mean and variance:
E[ℓ_ij | X] = α s^2 \sqrt{m} c_ij
Var(ℓ_ij | X) = s^4 [ α^2(v_i v_j + c_ij^2) + β^2 g_ij + γ^2 v_i v_j ]
where g_ij = \frac{d[(d+1)v_i v_j - 2c_ij^2]}{(d-1)(d+2)} is derived from the second moment of a uniformly random rank-m orthogonal projector on R^d. I validated these formulas across 864 configurations with 1,728 Holm-Bonferroni-corrected hypothesis tests (mean RMSE 0.0058; variance RMSE 0.0106).

[I want internship / collaborator role]
Ahead of contacting you, I drafted a 2-page note analyzing the non-asymptotic empirical spectral distribution (ESD) of the product W_Q^T W_K under varying aspect ratios m/d [link to note / GitHub].

I would be thrilled to work under your guidance as a research intern / student collaborator on finite-width transformer theory, attention spectral properties, or signal propagation. I have rigorous training in probability and linear algebra, and write fast PyTorch code. Could we schedule a 10-minute call next week?

Sincerely,

Vidit Gupta
viditanupgupta@gmail.com | +91 89835 20121
Portfolio: [link] | GitHub: [link] | Google Scholar: [link]
```

---

# 2. Prof. Sanjeev Arora (Princeton Computer Science)
* **Title & Affiliation**: Charles C. Fitzmorris Professor of Computer Science, Princeton University
* **Research Focus**: Theoretical machine learning, theory of representation learning, linear representations, in-context learning, and understanding large language models.
* **Why You Match**: Arora has pioneered theoretical understandings of deep learning representations and linear probe geometry. Your ACML 2026 paper on *Query Expansion and Key Specialization* and your *Residual-Stream Covariance Geometry* paper both explore the geometry of representations that Arora’s group seeks to formalize mathematically.

### Which Work to Read Before Mailing
1. *A Theory for Emergence of In-Context Learning in Transformers* (Arora Lab, 2023–2024).
2. *Understanding the Representation Geometry of Pre-trained Models* (Saunshi, Malladi, Arora).
3. *Linear Representations of Features in Neural Networks*.

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Relating Key Specialization to In-Context Linear Probe Convergence"*
  - **What to build**: Test whether the speed of in-context learning (using Arora’s synthetic linear regression task) correlates with the degree of key-side spectral contraction ($PR_K$) in a 2-layer transformer.
  - **Deliverable**: A 2-page technical note with empirical traces matching in-context learning loss to key participation ratios.

---

### Postdocs & PhD Students Under Prof. Sanjeev Arora

#### 1. Dr. Nikunj Saunshi (Former PhD / Postdoc / Collaborator)
* **Research Focus**: Representation learning theory, contrastive learning, foundation model theory.
* **Which Work to Read**: *A Theoretical Analysis of Contrastive Unsupervised Representation Learning*.
* **Which Work to Make**: Formulate a contrastive loss objective for query-key alignment and compare its convergence against your ACML baseline.

#### 2. Sadhika Malladi (PhD Student – co-advised with Danqi Chen)
* **Research Focus**: Fine-tuning dynamics, optimization efficiency in LLMs, representation geometry.
* **Which Work to Read**: *Fine-Tuning Language Models with Just Forward Passes* (MeZO).
* **Which Work to Make**: Evaluate if zeroth-order optimization (MeZO) induces the same query expansion / key contraction asymmetry as AdamW.

#### 3. Zhiyuan Li (Former PhD / Collaborator, now Faculty)
* **Research Focus**: Theoretical optimization, implicit regularization of gradient flow.
* **Which Work to Read**: Implicit bias of Adam and gradient flow in deep architectures.
* **Which Work to Make**: Compare the participation ratio dynamics of queries and keys under SGD vs. AdamW.

---

### Cold Email Template for Prof. Sanjeev Arora / Group

```text
Subject: Prospective Research Intern: Mathematical Foundations of Attention Representation Dynamics

Dear Professor Arora [or Nikunj / Sadhika],

[Who am I]
My name is Vidit Gupta, an undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on theoretical and empirical representation geometry, attention dynamics, and mathematical foundations of transformers.

[I read your work]
I have followed your group's foundational contributions to the theory of representation learning and the emergence of in-context learning in transformers. Your work uncovering the mathematical principles governing representation formation is an inspiration for my research.

[I did this]
In my paper under review ("Query Expansion and Key Specialization in Transformer Attention Geometry", ACML 2026), I discovered a fundamental asymmetry in attention representation dynamics: across 36 training runs and 54 trajectories, query representations expand in effective dimension (PR_Q slope +0.14) while key representations contract (PR_K slope -0.04). Using controlled interventions, I proved that this key-side contraction causally compresses the QK^T interaction spectrum and sharpens attention entropy. In another preprint, I analyzed residual stream covariance across Qwen2.5 and Mixtral, demonstrating that raw residual near-rank-1 concentration is strongly attenuated by RMSNorm before downstream sublayers.

[I want internship / collaborator role]
To connect these empirical findings to your in-context learning theory, I built a toy in-context regression task demonstrating that the emergence of in-context algorithm execution directly coincides with the onset of key-side spectral contraction [link to writeup/repo].

I would love to contribute to your group as a research intern / collaborator. I possess solid mathematical maturity in linear algebra, random matrix theory, and representation geometry, alongside strong PyTorch implementation skills. Would you be open to a 10-minute introductory meeting?

Sincerely,

Vidit Gupta
viditanupgupta@gmail.com | Portfolio: [link] | GitHub: [link]
```

---

# 3. Prof. Colin Wei (Princeton Computer Science)
* **Title & Affiliation**: Assistant Professor of Computer Science, Princeton University
* **Research Focus**: Theoretical understanding of deep learning, statistical learning theory, self-attention representations, pretraining vs. fine-tuning dynamics.
* **Why You Match**: Wei (former Stanford PhD with Tengyu Ma) studies how representations form during pretraining and why attention layers specialize. Your ACML paper on the evolution of $PR_Q$ and $PR_K$ across training trajectories directly answers questions in his research agenda.

### Which Work to Read Before Mailing
1. *Why Do Transformers Learn In-Context? A Study on the Interplay Between Pretraining and Fine-Tuning*.
2. *Statistically Meaningful Approximation Guarantees for Attention Models*.

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: Trace how query-key participation ratios change during downstream fine-tuning vs. pretraining across the Pythia checkpoints.
* **Deliverable**: A short technical note comparing pretraining vs. LoRA fine-tuning trajectories of $PR_Q$ and $PR_K$.

---

### Cold Email Template for Prof. Colin Wei

```text
Subject: Research Internship: Asymmetric Query-Key Representation Evolution During Pretraining

Dear Professor Wei,

[Who am I]
My name is Vidit Gupta, an undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on the theoretical and empirical dynamics of transformer representation learning.

[I read your work]
I have followed your research on understanding how self-attention architectures learn representations during pretraining and how inductive biases shape feature learning.

[I did this]
In my paper under review ("Query Expansion and Key Specialization in Transformer Attention Geometry", ACML 2026), I mapped the training trajectories of query and key projections across 36 models and 54 trajectories. I proved that queries and keys undergo divergent spectral paths: PR_Q expands while PR_K contracts, driving the relative compression of the QK^T interaction spectrum. Controlled interventions (clamping vs. forced contraction of the W_K spectrum) confirmed that key specialization causally governs attention entropy. In an extension across public checkpoints (Pythia 70M–410M, GPT-2, SmolLM2), I found that this asymmetry characterizes an early-training phase before stabilizing.

[I want internship / collaborator role]
Ahead of emailing, I compared how this query-key participation ratio trajectory behaves under full fine-tuning versus LoRA adaptation [link to brief writeup / code].

I would love to contribute to your group as a research intern on representation dynamics and attention theory (remote, 25+ hrs/week). Could we schedule a brief 10-minute call to discuss potential projects?

Best regards,

Vidit Gupta
viditanupgupta@gmail.com | Portfolio: [link] | GitHub: [link]
```

---

# 4. Prof. Danqi Chen (Princeton Computer Science – Princeton NLP)
* **Title & Affiliation**: Associate Professor of Computer Science, Princeton University
* **Research Focus**: Natural language processing, dense retrieval, parameter-efficient language modeling, LLM compression, and mechanistic analysis.
* **Why You Match**: Danqi Chen’s lab explores how transformers retrieve and manipulate information. Your findings on key-side specialization directly inform dense retrieval geometry (where query and key projections are trained asymmetrically for bi-encoder retrieval).

### Which Work to Read Before Mailing
1. *Dense Passage Retrieval for Open-Domain Question Answering* (Karpukhin et al. / Chen Lab).
2. *Sheared LLaMA: Accelerating Language Model Pre-training via Structured Pruning* (Xia et al., 2023).
3. *Dense Probing and Representation Analysis in Transformers*.

### Project to Make Before Mailing
* **Project Idea**: Measure the participation ratio of query vs. key encoders in DPR (Dense Passage Retrieval) during contrastive fine-tuning.

---

# 5. Prof. Mengdi Wang (Princeton ORFE & ECE)
* **Title & Affiliation**: Professor of ORFE and Electrical & Computer Engineering, Princeton University
* **Research Focus**: Mathematical foundation of LLMs, reinforcement learning, spectral representation learning, low-rank structure in foundation models.
* **Why You Match**: Wang's lab analyzes low-rank structures and spectral properties of foundation models. Your *Residual-Stream Covariance Geometry* paper and *Query Expansion and Key Specialization* paper both use spectral decompositions (participation ratio, effective rank, SVD) to diagnose internal model capacity.

### Which Work to Read Before Mailing
1. Works on low-rank structures and spectral representation learning in foundation models.
2. *On the Mathematical Foundations of Modern Large Language Models*.

### Project to Make Before Mailing
* **Project Idea**: Evaluate whether the low effective rank of the QK interaction spectrum matches theoretical low-rank approximation bounds in foundation models.
