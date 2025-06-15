---
layout: page
title: projects
permalink: /projects/
description: 
nav: true
nav_order: 3
display_categories: 
horizontal: false
---

<div class="projectcontainer">
  <div class="tab-content active">
    <h3>Reliable Critics: Monotonic Improvement and Convergence Guarantees for Reinforcement Learning</h3>
    <p>
      <em>May 2025 – Present | Advisor:  <a href="https://sites.google.com/site/gugancth/">Prof Gugan Thoppe</a> and <a href="https://ece.iisc.ac.in/~aditya/">Prof. Aditya Gopalan</a></em>
    </p>
    <p> This work introduces Reliable Critics, a novel framework for reinforcement learning (RL) that ensures monotonic policy improvement and theoretical convergence guarantees. Standard actor-critic methods often suffer from unstable updates due to unreliable critic estimates, leading to degraded performance or divergence. To address this, the authors design a policy update scheme that trusts the critic only within a validated region, ensuring that updates based on critic estimates are safe and beneficial. <br><br> The core idea is to use lower confidence bounds on value estimates, derived through uncertainty-aware critics, and constrain policy updates to actions and states where the critic is known to be accurate. The paper proves that such updates lead to monotonically improving policies, akin to Conservative Policy Iteration (CPI), while remaining compatible with deep function approximation. <br><br> Experiments across continuous control benchmarks demonstrate that Reliable Critics significantly improves the stability and performance of policy optimization, outperforming standard baselines like PPO and SAC under high noise and approximation error.</p>
    <div class="tags">
      <span>Safe Reinforcement Learning</span>
      <span>Monotonic Policy Improvement</span>
      <span>Critic Reliability</span>
      <span>Policy Optimization</span>
       <span>Convergence Guarantees</span>     
    </div>
  </div>
  <div class="tab-content">
    <h3>Diffusion with Forward Models using 3D Gaussian Splatting</h3>
    <p>
      <em>May 2025 – Present | <a href="https://val.cds.iisc.ac.in/">Vision & AI Lab (VAL)</a></em>
    </p>
    <p> This project presents a novel framework that integrates score-based diffusion models with 3D Gaussian Splatting (3DGS) to achieve geometry-aware image generation and scene reconstruction. By conditioning the diffusion process on forward-rendered views from a differentiable 3DGS renderer, the model learns to generate physically consistent and spatially coherent images—even from sparse inputs or motion-blurred observations. <br><br> Key applications include novel view synthesis, motion/defocus deblurring, and 3D-consistent generative modeling. Unlike traditional image diffusion, our approach benefits from explicit scene geometry, allowing for improved occlusion handling and multi-view consistency. Experimental results show that this hybrid method outperforms baseline NeRFs and deblurring networks in both visual quality and structural accuracy, marking a step toward interpretable, real-time, and physically grounded generative vision systems.</p>
    <div class="tags">
      <span>DiffusionModels</span>
      <span>3DGaussianSplatting</span>
      <span>NovelViewSynthesis</span>      
      <span>GeometryAwareGeneration</span>
      <span>PhysicallyBasedRendering</span>
    </div>
  </div>
  <div class="tab-content">
    <h3>Towards Reliable, Uncertainty-aware Alignment</h3>
    <p>
      <em>Jan 2025 – April 2025 | Advisor: <a href="https://ece.iisc.ac.in/~aditya/"> Prof. Aditya Gopalan</a></em>
    </p>
    <p> Towards Reliable, Uncertainty-aware Alignment addresses a key limitation in current LLM alignment methods—namely, their overconfidence and brittleness in the face of uncertain or ambiguous human preferences. Techniques like RLHF or DPO treat reward or preference signals as fixed and deterministic, but in reality, human feedback is often noisy, incomplete, and context-dependent. This mismatch leads to overfitting, hallucinations, and misaligned behaviors in high-stakes settings.<br><br> This project proposes a Bayesian preference modeling framework that explicitly accounts for epistemic uncertainty in the reward model. Instead of treating preferences as fixed ground truth, the model learns a distribution over rewards, allowing it to express confidence (or lack thereof) in its alignment decisions. Building on this, the team developed uncertainty-aware training objectives, such as U-DPO and U-PPO, which down-weight or defer updates on samples with high uncertainty—thereby reducing the risk of overfitting to ambiguous or noisy data. <br><br> Additionally, the project introduces benchmarks and diagnostics to test how aligned models behave under adversarial or underspecified instructions, and whether they can recognize and flag ambiguity rather than hallucinate confidently. Experiments on real-world instruction datasets (e.g., Anthropic HH, OpenAI Summarize, Self-Instruct) demonstrate that uncertainty-aware aligned models generate more robust, calibrated, and deferrable responses, improving safety without sacrificing helpfulness. <br><br> This research not only highlights the importance of calibrated confidence in alignment but also lays the groundwork for reliable human-in-the-loop alignment systems, where the model knows when to defer to human oversight. Results from this project are currently under submission to NeurIPS 2025 (Alignment Workshop), with open-source releases planned for the uncertainty calibration modules and benchmark suite. </p>
    <br>
    <div class="tags">
      <span>Uncertainty Quantification</span>
      <span>Bayesian Reward Modeling</span>
      <span>Epistemic Uncertainty</span>
      <span>Preference Learning</span>
      <span>Instruction Following</span>
    </div>
  </div>
  <div class="tab-content">
    <h3>Neurosymbolic AI</h3>
    <p>
      <em>July, 24 - Oct, 24 | Advisor: <a href="https://www.linkedin.com/company/arc-net-at-iisc/">ARC-Net</a>
      </em>
    </p>
    <p> Generative models cannot understand abstract mathematical concepts and produce reliable proofs due to - </p>
    <ul>
      <li>Lack of explain ability: LLMs and Generative Image models operate as black boxes: their decision-making processes are largely opaque. Attempts at mechanistic interpretability have had some success, however, in most situations, it seems that the reasoning used by these models is impossible to trace back to human reasoning. </li>
      <li>Stochasticity and soft decisions: Stochastic sampling introduces risk of hallucination and unreliable conclusions. (Since models are not anchored to an external source of “truth”). Generative models do not engage in true reasoning, they generate plausible sequences based on statistical associations within training data. </li>
      <li>Lack of True Creativity: Generative models try to emulate existing training data or deviate from it stochastically. They cannot make structured progress towards a novel output. </li>
    </ul>
    <br>Neurosymbolic AI is meant to address these shortcomings. It does so by bringing symbolic reasoning into the mix, which enables transparent and traceable decision-making. <br>
    <br> Symbolic components ground the model in external, verifiable knowledge. It also offers goal-oriented and meaningful creativity by leveraging rules and abstract reasoning. <br>
    <br> We worked on integrating a symbolic framework with existing LLMs for solving high-school physics problems. We used NLP techniques to extract semantic information from natural language, which is then embedded into a symbolic framework using autoformalization. <br>
    <br> This project was mentored by Professor Siddhartha Gadgil, from the mathematics department of IISc Bangalore. Professor Gadgil’s focus is automated theorem proving, and he has already managed to use computer-generated proofs for a research publication. He is one of the world’s leading experts on Lean, a symbolic framework for theorem proving. <br>
    <br>
    <div class="tags">
      <span>Neurosymbolic AI</span>
      <span>LLMs and Symbolic Reasoning</span>
      <span>Autoformalization</span>
      <span>Stochastic vs Symbolic Models</span>
      <span>Lean Theorem Prover</span>
    </div>
  </div>
  <div class="tab-content">
    <h3>HinglishEval: Evaluating the Effectiveness of Code-generation Models on Hinglish Prompts</h3>
    <p>
      <em>Jan 2024 – June 2024 | Advisor: <a href="https://eecs.iisc.ac.in/people/prof-viraj-kumar/">Prof Viraj Kumar</a>
      </em>
    </p>
    <p> Code-generation Models are Large Language Models (LLMs) that are fine-tuned to generate code from natural-language prompts. Prior work shows that such models can democratize programming by allowing novice programmers to generate accurate code for simple coding tasks by providing clear English-language prompts. In this project, we explored whether this democratization can extend to novice programmers who lack proficiency in English but are able to craft clear prompts in another language. Specifically, we considered prompts in Hinglish, a mixture of Hindi and English that many students in India are comfortable with. We made two contributions. First, we proposed a semi-automated technique to translate English prompts into Hinglish, and we used this technique to create HinglishEval: a Hinglish translation of the widely used code-generation benchmark HumanEval. Second, we compared the performance of several popular open- and closed-source code-generation models on Hinglish and English prompts. Our findings suggest that although code-generation models are generally more effective at generating accurate code for English prompts, their efficacy with Hinglish prompts is also promising. </p> <br> This work resulted in publication of the paper - <a href = "https://link.springer.com/chapter/10.1007/978-3-031-84391-4_2"> Evaluating the Effectiveness of Code-Generation Models on Hinglish Prompts </a> <br> <br>
    <div class="tags">
      <span>Code Generation</span>
      <span>Large Language Models (LLMs)</span>
      <span>Natural Language to Code</span>
      <span>Model Evaluation</span>
    </div>
  </div>
  <br>
  <div class="tabs">
    <button class="tab-button active" data-tab="0">1</button>
    <button class="tab-button" data-tab="1">2</button>
    <button class="tab-button" data-tab="2">3</button>
    <button class="tab-button" data-tab="1">4</button>
    <button class="tab-button" data-tab="2">5</button>
  </div>
</div>
<script>
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  tabButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      tabContents[idx].classList.add("active");
    });
  });
</script>
