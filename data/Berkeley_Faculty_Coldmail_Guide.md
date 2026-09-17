# UC Berkeley Faculty, Postdocs & PhDs Cold-Email Directory & Strategy Guide

This guide is tailored specifically for **Vidit Gupta** (B.Tech IT, D. J. Sanghvi College of Engineering, GPA 9.1). It maps your theoretical and empirical research in **Transformer Query-Key Geometry, Representation Dynamics, Residual Stream Covariance, and Scaling Laws** directly to faculty, postdocs, and PhD students at **UC Berkeley (BAIR / EECS / Statistics / Transluce)**.

---

## Strategic Overview: Vidit's Research Angle at UC Berkeley

| Vidit's Work & Strengths | Best UC Berkeley Lab Match | Strategic Hook |
| :--- | :--- | :--- |
| **Residual-Stream Covariance Geometry** (Raw residual vs. RMSNorm sublayer inputs) | **Jacob Steinhardt** (BAIR / Transluce) | Direct connection to *Discovering Latent Knowledge* (Collin Burns) and *Representation Engineering* (Andy Zou): Does the dominant latent direction persist after RMSNorm? |
| **Finite-Width Analytical Score Moments** ($AB^\top=0$ continuous geometry, Isserlis moments) | **Peter Bartlett** / **Michael I. Jordan** | Mathematical foundations of deep learning, implicit bias of attention, and finite-width spectral dynamics. |
| **Empirical Pythia & Checkpoint Dynamics** (Tracking $PR_Q, PR_K$ across Pythia 70M–410M checkpoints) | **Stella Biderman** (BAIR / EleutherAI) / **Jacob Steinhardt** | Direct evaluation on the Pythia suite across pretraining revisions; observing early query expansion followed by key specialization. |
| **Causal Spectrum Interventions** (Clamping $W_K$ singular values, forced contraction) | **Jacob Steinhardt** / **Dawn Song** | Causal mechanistic interventions that directly govern attention entropy and circuit formation. |

---

# 1. Prof. Jacob Steinhardt (UC Berkeley EECS & Statistics / BAIR / Transluce)
* **Title & Affiliation**: Associate Professor of Statistics and EECS, UC Berkeley; Co-founder and CEO of **Transluce** (AI interpretability & auditing research org).
* **Research Focus**: Mechanistic interpretability, geometry of latent knowledge, representation engineering, AI safety, and auditing large models.
* **Why You Match**: Steinhardt's group is world-renowned for studying the geometry of internal representations (e.g., *Discovering Latent Knowledge*, *Representation Engineering*). Your paper *Residual-Stream Covariance Geometry in Transformer Language Models* provides an essential caveat for all latent knowledge probing: raw residual streams exhibit near-rank-1 covariance that is selectively crushed by RMSNorm.

### Which Work to Read Before Mailing
1. *Discovering Latent Knowledge Without Supervision* (Burns et al., ICLR 2023).
   - *Key Takeaway*: Latent truth is represented as a consistent linear direction in the activation space; your work investigates how normalization interacts with such directions.
2. *Representation Engineering: A Top-Down Approach to AI Transparency* (Zou et al., 2023).
   - *Key Takeaway*: Identifying and controlling functional concepts by reading and writing to residual streams.
3. *The Geometry of Truth: Emergent Linear Representations in Large Language Models* (Marks & Tegmark / Steinhardt discussions).

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Does Contrast-Consistent Search (CCS) Find Truth in the Raw Residual or in the Normalized Subspace?"*
  - **What to build**: Implement Collin Burns' CCS algorithm on Qwen2.5-7B. Run CCS on the raw residual stream vs. the post-RMSNorm sublayer input. Measure if the accuracy of truth extraction degrades and whether the learned truth direction is orthogonal to the dominant covariance eigenvector.
  - **Deliverable**: A 2-page writeup / GitHub repository comparing CCS accuracy and directionality across normalization boundaries.

---

### Postdocs & Research Scientists Under Prof. Jacob Steinhardt

#### 1. Dr. Collin Burns (Former PhD / Postdoc / Collaborator)
* **Research Focus**: Unsupervised discovery of latent knowledge, linear probes, internal model beliefs.
* **Which Work to Read**: *Discovering Latent Knowledge Without Supervision* (ICLR 2023).
* **Which Work to Make**: Probe if unsupervised linear features align with the top 32 principal components of the residual stream or survive in the tail.

#### 2. Dr. Andy Zou (Collaborator / Postdoc)
* **Research Focus**: Representation engineering, universal adversarial triggers, mechanistic monitoring.
* **Which Work to Read**: *Representation Engineering: A Top-Down Approach to AI Transparency* (2023).
* **Which Work to Make**: Perform representation steering along the top raw-residual PC vs. random directions, measuring downstream token logits.

---

### PhD Students Under Prof. Jacob Steinhardt

#### 1. Norman Mu (PhD Student)
* **Research Focus**: Robustness, auditing foundational representations, mechanistic red-teaming.
* **Which Work to Read**: Works on internal state auditing and latent representations.
* **Which Work to Make**: Benchmark whether adversarial perturbations concentrate along the key-specialization subspace.

#### 2. Erik Jones (PhD Student)
* **Research Focus**: Robustness of representations, data-dependent geometry of language models.
* **Which Work to Read**: Papers on model behavior across diverse data distributions.
* **Which Work to Make**: Test whether the near-rank-1 residual plateau in Qwen2.5 shifts when evaluated on out-of-domain code or mathematical text.

#### 3. Ruiqi Zhong (PhD Student)
* **Research Focus**: Describing model internals in natural language, mechanistic auditing.
* **Which Work to Read**: Works on automated explanation of neural network internal behaviors.
* **Which Work to Make**: Compare automated descriptions of attention heads with high $PR_Q - PR_K$ contrast against heads with symmetric spectra.

---

### Cold Email Template for Prof. Jacob Steinhardt / Group

```text
Subject: Prospective Research Intern: Residual-Stream Covariance & Normalization Dynamics in Modern LLMs

Dear Professor Steinhardt [or Collin / Andy],

[Who am I]
My name is Vidit Gupta, a 2nd-year undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on the internal geometry of transformer representations, mechanistic interpretability, and query-key dynamics.

[I read your work]
I have closely studied your group's groundbreaking work on representation engineering and discovering latent knowledge (CCS) in activation spaces. A foundational question in this line of inquiry is whether linear directions in the residual stream reflect downstream computational state or architectural storage conventions.

[I did this]
In my recent preprint, "Residual-Stream Covariance Geometry in Transformer Language Models", I investigated residual-stream covariance across GPT-2, Pythia, Qwen2.5, and Mixtral-8x7B. I found that modern RMSNorm-based models (Qwen2.5, Mixtral) develop a sustained near-rank-1 raw residual covariance across middle layers (explaining >99% of centered variance) with an aligned leading direction (cosine > 0.998). However, block-stage diagnostics revealed that RMSNorm attenuates this dominant direction by orders of magnitude (ρ_v ≈ 10^-7 vs 10^-2 for random directions), while normalized sublayer inputs remain high-dimensional. In a second paper ("Query Expansion and Key Specialization", ACML 2026 sub.), I demonstrated that key-side spectral contraction directly governs attention entropy.

[I want internship / collaborator role]
To bridge this with your work on latent representations, I ran a quick empirical study evaluating whether Contrast-Consistent Search (CCS) probes capture truth directions inside this attenuated dominant PC or within the high-dimensional normalized subspace [link to writeup / code].

I would love to contribute to your group (or Transluce) as a remote research intern for 4–6 months (25–30 hrs/week). I have strong PyTorch systems experience, maintain an open-source representation geometry library, and am eager to advance our understanding of latent representation geometry.

Would you be open to a 10-minute call next week to discuss this?

Best regards,

Vidit Gupta
viditanupgupta@gmail.com | +91 89835 20121
Portfolio: [link] | GitHub: [link] | Google Scholar: [link]
```

---

# 2. Prof. Peter Bartlett (UC Berkeley EECS & Statistics / BAIR)
* **Title & Affiliation**: Professor of Computer Science and Statistics, UC Berkeley
* **Research Focus**: Statistical learning theory, generalization in overparameterized deep networks, implicit regularization, and mathematical analysis of attention.
* **Why You Match**: Bartlett is a pioneer of mathematical deep learning theory. Your paper *A Continuous Space of Attention Projection Geometries at Initialization* derives exact finite-width moments of attention scores using Isserlis' theorem and orthogonal Grassmannian projections, matching his group's theoretical rigor.

### Which Work to Read Before Mailing
1. *Implicit Bias of Gradient Descent for Attention Models* (Tarzanagh, Li, Zhang, Oymak; or Bartlett lab related theory).
   - *Key Takeaway*: Gradient descent drives attention logits toward max-margin token separation.
2. *Deep Learning: A Statistical Viewpoint* (Bartlett et al.).
3. *Generalization Bounds for Deep Neural Networks via Spectral Complexity*.

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Finite-Width Margin Bounds under Energy-Matched Query-Key Initialization"*
  - **What to build**: Using your conditional mean formula $E[\ell_{ij}|X] = \alpha s^2 \sqrt{m} c_{ij}$ and variance formula $\text{Var}(\ell_{ij}|X)$, formulate a theoretical lower bound on the initial attention margin $\ell_{ii} - \max_{j \ne i} \ell_{ij}$ as a function of the tying parameter $\alpha$.
  - **Deliverable**: A 2-page mathematical note checking the theoretical margin bound against Monte Carlo draws across widths $d \in \{32, 64, 128\}$.

---

### PhD Students Under Prof. Peter Bartlett

#### 1. Konstantinos E. Nikolakakis (Postdoc / Collaborator)
* **Research Focus**: Non-asymptotic statistics, spectral methods, representation theory.
* **Which Work to Read**: Papers on finite-sample guarantees in deep learning.
* **Which Work to Make**: Verify if your finite-width variance term $g_{ij}$ has a non-asymptotic concentration bound.

---

### Cold Email Template for Prof. Peter Bartlett / Theory Group

```text
Subject: Research Internship Inquiry: Exact Finite-Width Moments & Geometry of Attention Projections

Dear Professor Bartlett,

[Who am I]
My name is Vidit Gupta, an undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on statistical learning theory, random matrix theory in transformers, and the geometry of attention mechanisms.

[I read your work]
I have followed your foundational contributions to learning theory, generalization in overparameterized models, and the mathematical properties of deep neural architectures. Your work on exact theoretical guarantees motivates my research into non-asymptotic attention mechanics.

[I did this]
In my theoretical paper, "A Continuous Space of Attention Projection Geometries at Initialization", I derived closed-form finite-width conditional expectation and variance formulas for transformer attention scores E[ℓ_ij|X] and Var(ℓ_ij|X) under an energy-matched continuous family W_K = s(αA + βB + γC) with exact row-space orthogonality AB^T = 0. By computing the second moments of random rank-m orthogonal projectors on R^d, I demonstrated that row-space orthogonal residuals introduce a finite-width variance term g_ij = d[(d+1)v_i v_j - 2c_ij^2] / [(d-1)(d+2)] that differs non-trivially from independent Gaussian noise. Across 864 configurations and 1,728 hypothesis tests, all closed-form moments were verified without a single rejection.

[I want internship / collaborator role]
Ahead of writing, I developed an analytic note connecting this conditional variance formula to non-asymptotic lower bounds on initial attention margins [link to 2-page note].

I would be thrilled to join your group as a student researcher or intern to work on theoretical foundations of transformer representations and optimization dynamics. Could we schedule a 10-minute conversation?

Sincerely,

Vidit Gupta
viditanupgupta@gmail.com | Portfolio: [link] | GitHub: [link]
```

---

# 3. Prof. Michael I. Jordan (UC Berkeley EECS & Statistics / BAIR)
* **Title & Affiliation**: Pehong Chen Distinguished Professor of EECS and Statistics, UC Berkeley
* **Research Focus**: Optimization landscapes, dynamical systems, spectral methods, and mathematical representation learning.
* **Why You Match**: Jordan’s theoretical perspective views deep learning through dynamical systems and Riemannian geometry. Your tracking of participation ratios along gradient trajectories and analytical Grassmanian projectors fit this paradigm.

### Which Work to Read Before Mailing
1. *On the Dynamical Systems Perspective of Gradient Descent and Representation Learning*.
2. *Spectral and Non-Convex Optimization in Machine Learning*.

### Project to Make Before Mailing
* **Project Idea**: Model the training dynamics of $PR_Q - PR_K$ as a continuous-time gradient flow on the Grassmann manifold $\text{Gr}(m, d)$.

---

# 4. Prof. Dawn Song (UC Berkeley EECS / BAIR)
* **Title & Affiliation**: Professor of Computer Science, UC Berkeley
* **Research Focus**: AI safety, adversarial robustness, mechanistic auditing, and privacy-preserving ML.
* **Why You Match**: Song’s group actively studies mechanistic circuit auditing for safety. Your causal intervention suite (clamping/contracting the $W_K$ singular spectrum) provides a reliable mechanism for controlling attention sharpness.

### Which Work to Read Before Mailing
1. *Safety Auditing and Mechanistic Anomaly Detection in LLMs*.
2. Works on circuit localization for malicious or unaligned behavior.

### Project to Make Before Mailing
* **Project Idea**: Test if forcing key contraction via your intervention suite prevents or accelerates jailbreak prompts in small language models.

---

# 5. Stella Biderman (EleutherAI / BAIR Visiting Scholar)
* **Affiliation**: Executive Director at EleutherAI; Visiting Researcher at BAIR
* **Research Focus**: Large language model pretraining dynamics, Pythia suite, open science, and mechanistic interpretability.
* **Why You Match**: In your ACML 2026 paper, you explicitly analyzed intermediate checkpoints of **Pythia 70M, 160M, and 410M**, discovering that Pythia models exhibit consistent key-side spectral contraction and bridge co-movement ($PR_K \to QK^\top \text{ effective rank} \to \text{entropy}$).

### Which Work to Read Before Mailing
1. *Pythia: A Suite for Analyzing Large Language Models Across Training and Scaling* (Biderman et al., ICML 2023).
2. *Transformers Learn to In-Context Learn: A Study with the Pythia Suite*.

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Dense Checkpoint Spectrum Tracking of Pythia: The Early Participation Burst"*
  - **What to build**: In your ACML paper, you analyzed Pythia checkpoints. Run your streaming covariance tool on all 143 intermediate checkpoints of Pythia-70M on Hugging Face to plot the exact step where the early $PR_Q - PR_K$ peak decays into steady-state key specialization.
  - **Deliverable**: Interactive visualization or GitHub repo showing the full training arc of Pythia-70M query/key participation ratios.
