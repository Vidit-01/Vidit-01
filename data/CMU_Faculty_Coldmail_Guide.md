# CMU Faculty, Postdocs & PhDs Cold-Email Directory & Strategy Guide

This guide is tailored specifically for **Vidit Gupta** (B.Tech IT, D. J. Sanghvi College of Engineering, GPA 9.1). It maps your theoretical and empirical research in **Transformer Query-Key Geometry, Representation Dynamics, Residual Stream Covariance, and Scaling Laws** directly to faculty, postdocs, and PhD students at **Carnegie Mellon University (CMU MLD / CSD / LTI)**.

---

## Strategic Overview: Vidit's Research Angle at CMU

| Vidit's Work & Strengths | Best CMU Lab Match | Strategic Hook |
| :--- | :--- | :--- |
| **Continuous Query-Key Initialization Geometry** ($AB^\top=0$ continuous manifold, score moments) | **J. Zico Kolter** (Head, Machine Learning Department) | **Direct citation & conceptual match**: In your paper, you cite Trockman & Kolter (*Mimetic Initialization of Self-Attention Layers*, ICML 2023). Your continuous energy-matched family provides a smooth generalization of their discrete mimetic target point. |
| **Mechanistic Sequence Modeling & Scaling** (IsoFLOPs framework, custom decoder engine) | **Albert Gu** (MLD) | Pioneer of State Space Models (Mamba, S4). Compare key-specialization in transformers against recurrent state contraction in Mamba. |
| **Mathematical Expressivity & Dynamics of Attention** (Grassmannian moments, $PR_Q/PR_K$ dynamics) | **Andrej Risteski** (MLD) | Deep learning theory, expressivity of attention heads, and in-context learning mechanics. |
| **LLM Internals & Mechanistic Probing** (Residual covariance, near-rank-1 attenuation) | **Graham Neubig** (LTI) | Empirical analysis of representations, prompt dynamics, and architectural inspection. |

---

# 1. Prof. J. Zico Kolter (CMU CSD & MLD – Head of Machine Learning Department)
* **Title & Affiliation**: Professor and Head of the Machine Learning Department, CMU; Chief Scientist at Gray Swan AI.
* **Research Focus**: Deep learning initialization, implicit layers, adversarial robustness of LLMs, architecture design, and safety.
* **Why You Match**: In your paper *A Continuous Space of Attention Projection Geometries at Initialization*, you cite Asher Trockman and J. Zico Kolter (ICML 2023, *Mimetic Initialization of Self-Attention Layers*). Their paper initializes $W_Q^\top W_K$ to copy the empirical structures observed in trained models. You generalized this by turning the $W_Q^\top W_K$ product into a continuous, energy-matched parameter space with finite-width moment guarantees!

### Which Work to Read Before Mailing
1. *Mimetic Initialization of Self-Attention Layers* (Trockman & Kolter, ICML 2023).
   - *Key Takeaway*: Pre-structuring $W_Q^\top W_K$ to mimic trained self-attention patterns accelerates training and stabilizes deep models.
2. *Universal and Transferable Adversarial Attacks on Aligned Language Models* (Zou, Wang, Kolter, Matt Fredrikson, 2023).
3. *Orthogonalizing Convolutional Layers with the Cayley Transform* (Trockman & Kolter).

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Mimetic Initialization as an Interior Point in the Continuous Query-Key Atlas"*
  - **What to build**: Take Trockman & Kolter’s mimetic initializer and project its target matrix $W_Q^\top W_K$ into your $(\alpha, \beta, \gamma, s)$ coordinate system. Determine where mimetic initialization falls in your empirical initialization map (Figure 2/Figure 6 of your paper). Show whether mimetic initialization sits in the "intermediate" band or on the boundary of the "concentrated" regime.
  - **Deliverable**: A 2-page report / GitHub repo showing the exact coordinate embedding and training comparison on TinyStories.

---

### Postdocs & Former PhDs Under Prof. J. Zico Kolter

#### 1. Dr. Asher Trockman (Recent CMU PhD / Research Scientist at Google)
* **Research Focus**: Architecture design, model initialization, antidistillation, long-context modeling.
* **Which Work to Read**: *Mimetic Initialization of Self-Attention Layers* (ICML 2023); *Antidistillation Sampling*.
* **Which Work to Make**: Benchmark whether your continuous family $(\alpha, \beta, \gamma)$ provides a differentiable path to optimize mimetic initialization during meta-learning.

#### 2. Dr. Andy Zou (Recent Collaborator / PhD)
* **Research Focus**: AI safety, adversarial jailbreaks, representation steering.
* **Which Work to Read**: Universal adversarial triggers for LLMs.
* **Which Work to Make**: Test whether adversarial triggers exploit the key-contraction subspace in attention heads.

---

### Cold Email Template for Prof. J. Zico Kolter / Asher Trockman

```text
Subject: Research Internship: Generalizing Mimetic Initialization to a Continuous Query-Key Geometry

Dear Professor Kolter [or Asher],

[Who am I]
My name is Vidit Gupta, an undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My research focuses on transformer initialization dynamics, random matrix theory, and the geometry of attention projections.

[I read your work]
I have been deeply inspired by your work on "Mimetic Initialization of Self-Attention Layers" [Trockman & Kolter, ICML 2023]. Your insight that pre-structuring the query-key interaction object W_Q^T W_K provides an inductive bias that standard Gaussian initializers lack was a major inspiration for my recent theoretical work.

[I did this]
In my paper, "A Continuous Space of Attention Projection Geometries at Initialization", I generalized this idea by constructing a continuous, energy-matched family for query-key initializations: W_K = s(αA + βB + γC), where B = G(I - UU^T) is projected onto the orthogonal complement of A's row space (AB^T = 0 exactly). I derived closed-form finite-width formulas for conditional attention score mean and variance under Isserlis' theorem and Grassmannian projector moments, proving that row-space orthogonal residuals contribute a distinct finite-width variance channel g_ij. Across 1,717 cells and 1,344 training jobs, I mapped the transitions between diffuse, intermediate, concentrated, and self-locked regimes.

[I want internship / collaborator role]
Ahead of emailing, I mapped your mimetic initialization matrix directly into this continuous parameter space, identifying where it sits relative to the intermediate and self-locked regimes and comparing early optimization dynamics [link to writeup/repo].

I would love to contribute to your group as a research intern or student collaborator (remote, 25–30 hrs/week). I have strong mathematical foundations, extensive experience implementing custom PyTorch transformer systems, and a track record of driving research independently. 

Would you have 10 minutes for a brief call next week?

Best regards,

Vidit Gupta
viditanupgupta@gmail.com | +91 89835 20121
Portfolio: [link] | GitHub: [link] | Google Scholar: [link]
```

---

# 2. Prof. Albert Gu (CMU Machine Learning Department)
* **Title & Affiliation**: Assistant Professor of Machine Learning, CMU
* **Research Focus**: State Space Models (Mamba, S4), subquadratic sequence architectures, long-context modeling, and alternative attention mechanisms.
* **Why You Match**: Gu invented Mamba and structured state space models to address the computational bottlenecks of attention. Your ACML 2026 paper proves that attention naturally contracts the key projection space ($PR_K$ shrinking) to enforce selective retrieval—a mechanism closely analogous to the input-dependent state selection in Mamba!

### Which Work to Read Before Mailing
1. *Mamba: Linear-Time Sequence Modeling with Selective State Spaces* (Gu & Dao, 2023).
   - *Key Takeaway*: Selective state spaces allow sequence models to compress context selectively; connects to key-side participation ratio shrinkage.
2. *Efficiently Modeling Long Sequences with Structured State Spaces (S4)* (Gu et al., ICLR 2022).
3. *Transformers are SSMs: Generalized Models and Efficient In-Context Learning*.

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Comparing Key Specialization in Transformers vs. State Contraction in Mamba"*
  - **What to build**: Train a small Transformer and a small Mamba model of matched parameter size on character-level WikiText-103. Measure the participation ratio of Mamba's hidden state $h_t$ across training and compare it against the transformer's $PR_K$ trajectory.
  - **Deliverable**: A comparative report showing whether Mamba undergoes an analogous early-training spectral contraction.

---

### PhD Students Under Prof. Albert Gu

#### 1. Sukjun Hwang (PhD Student)
* **Research Focus**: Structured architectures, long-sequence modeling, and recurrent dynamics.
* **Which Work to Read**: Recent work on hybrid Mamba-Transformer models.
* **Which Work to Make**: Profile the residual covariance spectrum in hybrid Mamba-Attention architectures.

---

### Cold Email Template for Prof. Albert Gu / Group

```text
Subject: Research Internship: Key-Space Contraction in Transformers vs. Selective State Dynamics in Mamba

Dear Professor Gu [or Sukjun],

[Who am I]
My name is Vidit Gupta, an undergraduate in Information Technology at D. J. Sanghvi College of Engineering, India (GPA: 9.1/10). My work centers on sequence model geometry, spectral dynamics of representations, and efficient architectures.

[I read your work]
I have followed your groundbreaking contributions in developing Structured State Spaces and Mamba. The selective mechanism in Mamba—compressing sequence history into an input-dependent bounded state—presents a fascinating contrast to the memory mechanism of multi-head attention.

[I did this]
In my recent paper under review ("Query Expansion and Key Specialization in Transformer Attention Geometry", ACML 2026), I discovered that multi-head attention organically enforces a selective memory bottleneck: across 36 training runs and 54 trajectories, query participation ratio (PR_Q) expands while key participation ratio (PR_K) systematically contracts. Controlled interventions showed that key contraction causally drives attention sharpening. Furthermore, I have developed an IsoFLOPs scaling law framework (Torch-IsoFLOPs) and trained custom decoder stacks from scratch.

[I want internship / collaborator role]
To explore the intersection of your work and mine, I ran a comparative study evaluating whether Mamba's recurrent state matrix undergoes a mathematically equivalent spectral contraction during early training epochs [link to writeup/repo].

I would love to contribute to your lab as a research intern on subquadratic architectures, selective memory geometry, or hybrid SSM-attention models. I am prepared to dedicate 25+ hours/week remotely. Could we schedule a 10-minute introductory meeting?

Best regards,

Vidit Gupta
viditanupgupta@gmail.com | Portfolio: [link] | GitHub: [link]
```

---

# 3. Prof. Andrej Risteski (CMU Machine Learning Department)
* **Title & Affiliation**: Associate Professor of Machine Learning, CMU
* **Research Focus**: Mathematical foundations of deep learning, expressivity and theoretical limits of attention, in-context learning dynamics.
* **Why You Match**: Risteski's group focuses on proving rigorous theoretical guarantees for what transformers can compute and how representations evolve under gradient descent. Your exact derivations on conditional attention score moments and empirical tracking of participation ratios provide concrete foundations for theoretical collaboration.

### Which Work to Read Before Mailing
1. *On the Expressive Power of Geometric and Graph Attention Mechanisms*.
2. *How Transformers Learn In-Context: A Theoretical Analysis*.
3. Works by students such as Bingbin Liu on in-context learning mechanics.

### Project to Make Before Mailing (1-Week Build)
* **Project Idea**: *"Gradient Flow Asymmetry on W_Q vs W_K in a Two-Token System"*
  - **What to build**: Analytically compute the gradient norms $\|\nabla_{W_Q} L\|_F$ vs. $\|\nabla_{W_K} L\|_F$ using Proposition 2 from your preprint ($\frac{\partial L}{\partial W_Q} = \frac{1}{\sqrt{m}} W_K X D^\top X^\top$ vs. $\frac{\partial L}{\partial W_K} = \frac{1}{\sqrt{m}} W_Q X D X^\top$). Prove why the key gradient is more sensitive to softmax concentration than the query gradient.
  - **Deliverable**: A 2-page theoretical proof note.

---

### PhD Students Under Prof. Andrej Risteski

#### 1. Bingbin Liu (Recent PhD / Collaborator)
* **Research Focus**: Theoretical in-context learning, transformer expressivity, reasoning limits.
* **Which Work to Read**: Papers on transformers learning algorithms in-context.
* **Which Work to Make**: Check if induction head formation requires $PR_K$ to contract below a threshold.

#### 2. Samuel Lippl (PhD Student)
* **Research Focus**: Mathematical representation learning, feature emergence in transformers.
* **Which Work to Read**: Theoretical analysis of representation formation.
* **Which Work to Make**: Derive upper bounds on the covariance rank under RMSNorm.

---

# 4. Prof. Graham Neubig (CMU Language Technologies Institute)
* **Title & Affiliation**: Professor of Computer Science, LTI, CMU
* **Research Focus**: NLP, mechanistic interpretability, model analysis, code generation.
* **Why You Match**: Neubig leads large-scale empirical analyses of language model internals and prompting mechanisms. Your residual-stream covariance paper addresses fundamental measurement validity in model interpretability.

### Which Work to Read Before Mailing
1. *Mechanistic Probing of Language Models* (LTI lab preprints).
2. *Interpreting and Debugging Large Language Models*.

### Project to Make Before Mailing
* **Project Idea**: Evaluate whether cross-lingual representations in multilingual LLMs share the same near-rank-1 residual common mode as English models.

---

# 5. Prof. David Woodruff (CMU Computer Science Department)
* **Title & Affiliation**: Professor of Computer Science, CMU
* **Research Focus**: Randomized numerical linear algebra, low-rank matrix approximation, sketching algorithms, theoretical foundations of attention.
* **Why You Match**: Woodruff is the world leading authority on low-rank matrix approximation and sketching. Your analysis of $QK^\top$ effective rank and Grassmannian projections in attention matrices directly intersects with sketching theory for attention approximations.

### Which Work to Read Before Mailing
1. *Sketching as a Tool for Numerical Linear Algebra*.
2. *Low-Rank Approximation of Attention Matrices in Transformers*.

### Project to Make Before Mailing
* **Project Idea**: Implement a sketched $W_Q^\top W_K$ estimator using count-sketch and compare variance bounds against your exact Grassmannian formula.
