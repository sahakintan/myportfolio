// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/myportfolio/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/myportfolio/cv/";
          },
        },{id: "nav-skills",
          title: "skills",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/myportfolio/skills/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/myportfolio/projects/";
          },
        },{id: "dropdown-iisc-course-summary",
              title: "IISc course summary",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/myportfolio/iisc-course-summary/";
              },
            },{id: "nav-presentations",
          title: "presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/myportfolio/presentations/index.html";
          },
        },{id: "nav-music",
          title: "music",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/myportfolio/music/";
          },
        },{id: "post-presentation-at-indian-control-conference-2025-of-my-paper",
        
          title: "Presentation at Indian Control Conference 2025 of my paper",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/ICC/";
          
        },
      },{id: "post-presentation-of-course-project-for-topics-in-stochastic-approximation-algorithms-e1-396",
        
          title: "Presentation of course project for Topics in Stochastic Approximation Algorithms (E1 396)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/TSA-Course-Project/";
          
        },
      },{id: "post-presentation-of-course-project-for-concentration-inequalities-e2-207",
        
          title: "Presentation of course project for Concentration Inequalities (E2 207)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/CI-Course-Project/";
          
        },
      },{id: "post-presentation-of-course-project-for-theory-of-multi-armed-bandits-e1-240",
        
          title: "Presentation of course project for Theory of Multi-armed Bandits (E1 240)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/MAB-Course-Project/";
          
        },
      },{id: "post-presentation-on-structure-from-motion",
        
          title: "Presentation on Structure From Motion",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/RL-Structure-from-Motion/";
          
        },
      },{id: "post-presentation-on-diffusion-and-flow-based-models",
        
          title: "Presentation on Diffusion and Flow based models",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/Diffusion-and-Flow-based-models/";
          
        },
      },{id: "post-presentation-on-3d-scene-representation",
        
          title: "Presentation on 3D Scene Representation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/3D-Scene-Representation/";
          
        },
      },{id: "post-presentation-of-course-project-for-umc203-ai-and-ml",
        
          title: "Presentation of course project for UMC203 - AI and ML",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/Unsupervised-Domain-Adaptation/";
          
        },
      },{id: "post-presentation-of-course-project-for-e1-277-reinforcement-learning",
        
          title: "Presentation of course project for E1 277 - Reinforcement Learning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2025/RL-Course-Project/";
          
        },
      },{id: "post-presentation-at-acm-compute-2024-of-my-paper",
        
          title: "Presentation at ACM COMPUTE 2024 of my paper",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2024/ACM-Compute/";
          
        },
      },{id: "post-presentation-on-spectral-clustering",
        
          title: "Presentation on Spectral Clustering",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/myportfolio/blog/2024/RL-Spectral-Clustering/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/myportfolio/books/the_godfather/";
            },},{id: "news-hinglisheval-evaluating-the-effectiveness-of-code-generation-models-on-hinglish-prompts-advisor-prof-viraj-kumar-lab-division-of-electrical-electronics-and-computer-sciences-description-this-project-aimed-to-evaluate-code-generation-llms-on-hinglish-prompts-obtained-from-a-translated-humaneval-dataset-the-end-goal-is-to-evaluate-the-effectiveness-of-such-code-gen-llms-in-cs101-courses-in-the-indian-context-role-helped-in-translating-the-humaneval-dataset-to-hinglish-and-evaluating-multiple-code-gen-llms-such-as-gpt-4-gemma-phi-3-polycoder-starcoder-etc-the-evaluation-criteria-used-was-pass-k-and-item-response-theory-irt-technical-stack-huggingface-transformers-openai-api-matplotlib-source-code-link-to-repository-status-published-at-acm-compute-2024",
          title: 'HinglishEval: Evaluating the Effectiveness of Code-generation Models on Hinglish Prompts Advisor Prof Viraj...',
          description: "",
          section: "News",},{id: "news-towards-uncertainty-aware-alignment-advisor-prof-aditya-gopalan-lab-department-of-electrical-communication-and-engineering-iisc-description-developed-an-alignment-framework-with-uncertainty-quantification-for-preference-based-rl-this-framework-was-extended-to-llm-alignment-by-modifying-ppo-proximal-policy-optimization-to-account-for-uncertainty-in-the-reward-estimates-of-the-reward-models-being-used-in-the-rlhf-pipeline-role-experimentally-verified-the-llm-alignment-framework-by-modifying-the-rlhf-pipeline-to-include-our-novel-uncertainty-estimation-framework-the-framework-was-tested-on-llms-of-multiple-sizes-gpt-2-qwen2-5-mistral-7b-and-mulitple-reward-models-such-as-custom-ensemble-reward-models-and-prompted-reward-models-such-as-gemini2-0-deepseek-v3-technical-stack-huggingface-transformers-huggingface-transformers-reinforcement-learning-trl-weights-and-biases-status-submitted-for-review-at-neurips-2025",
          title: 'Towards Uncertainty-aware Alignment Advisor Prof. Aditya Gopalan Lab Department of Electrical Communication and...',
          description: "",
          section: "News",},{id: "news-feed-forward-deblurring-in-3dgs-advisor-prof-r-venkatesh-babu-lab-vision-amp-amp-ai-lab-val-iisc-description-this-project-aims-to-create-a-generalisable-scene-agnostic-deblurring-framework-to-be-integrated-into-3dgs-foundation-models-for-scene-agnostic-scene-deblurring-role-developing-a-deblurring-framework-which-can-be-readily-plugged-into-sota-3dgs-foundation-models-such-as-noposplat-dust3r-etc-to-enable-deblurring-of-scenes-in-a-feed-forward-fashion-current-methods-tackling-scene-deblurring-within-the-3dgs-framework-are-scene-specifc-methods-we-aim-to-develop-a-scene-agnostic-framework-technical-stack-pytorch-hydra-config-management-blender-pytorch-lightning-weights-and-biases",
          title: 'Feed Forward Deblurring in 3DGS Advisor Prof R. Venkatesh Babu Lab Vision &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-reliable-critics-monotonic-improvement-and-convergence-guarantees-for-reinforcement-learning-advisor-prof-gugan-thoppe-and-prof-aditya-gopalan-lab-department-of-computer-science-and-automation-iisc-and-department-of-electrical-communication-and-engineering-iisc-description-this-project-aims-to-further-enhance-the-reliable-policy-iteration-rpi-framework-to-augment-multiple-sota-algorithms-such-as-ppo-td3-ddpg-etc-and-test-it-on-diverse-environments-such-as-atari-mujoco-minigrid-the-goal-is-to-establish-new-sota-results-on-these-environments-using-these-rpi-augmented-algorithms-role-designed-a-novel-loss-function-incorporating-the-rpi-framework-to-be-used-as-a-plug-and-play-substitute-in-sota-deep-rl-algorithms-such-as-ppo-td3-ddpg-etc-also-performed-extensive-experiments-on-the-extreme-sparse-reward-minigrid-environment-and-performed-ablation-studies-to-establish-new-baselines-on-minigrid-technical-stack-pytorch-stable-baselines3-wandb-for-logging-and-hyperparameter-sweeps-matplotlib-seaborn",
          title: 'Reliable Critics: Monotonic Improvement and Convergence Guarantees for Reinforcement Learning Advisor Prof Gugan...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/myportfolio/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%69%6E%74%61%6E%73%61%68%61@%69%69%73%63.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sahakintan", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/kintansaha", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kintan-saha-6620122a6", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uEERwPsAAAAJ", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/919007471396", "_blank");
        },
      },];
