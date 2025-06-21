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
        },{id: "nav-repositories",
          title: "repositories",
          description: "My github repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/myportfolio/repositories/";
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
            },},{id: "news-worked-on-a-project-on-evaluating-the-effectiveness-of-code-generation-models-on-hinglish-prompts-under-the-guidance-of-prof-viraj-kumar-this-work-resulted-in-publication-of-hinglisheval-evaluating-the-effectiveness-of-code-generation-models-on-hinglish-prompts",
          title: 'Worked on a project on evaluating the effectiveness of code-generation models on Hinglish...',
          description: "",
          section: "News",},{id: "news-worked-on-a-project-on-neurosymbolic-ai-at-arc-net",
          title: 'Worked on a project on Neurosymbolic AI at ARC-Net',
          description: "",
          section: "News",},{id: "news-worked-on-a-project-titled-towards-reliable-uncertainty-aware-alignment-with-prof-aditya-gopalan-at-loca-lab-iisc-this-work-has-been-submitted-to-neurips-2025",
          title: 'Worked on a project titled ‘Towards Reliable, Uncertainty-aware Alignment’ with Prof. Aditya Gopalan...',
          description: "",
          section: "News",},{id: "news-started-working-on-a-computer-vision-project-titled-diffusion-with-forward-models-using-3d-gaussian-splatting-at-vision-amp-amp-ai-lab-val",
          title: 'Started working on a computer vision project titled: ‘Diffusion with Forward Models using...',
          description: "",
          section: "News",},{id: "news-started-working-on-a-project-titled-reliable-critics-monotonic-improvement-and-convergence-guarantees-for-reinforcement-learning-with-prof-gugan-thoppe-and-prof-aditya-gopalan",
          title: 'Started working on a project titled: ‘Reliable Critics: Monotonic Improvement and Convergence Guarantees...',
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
      },];
