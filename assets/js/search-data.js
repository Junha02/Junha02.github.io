// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "You can also download a PDF version of my CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "My research publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-joined-irasc-lab-intelligent-robotics-and-autonomous-system-control-at-gachon-university-as-a-research-assistant",
          title: 'Joined iRASC Lab (Intelligent Robotics and Autonomous System Control) at Gachon University as...',
          description: "",
          section: "News",},{id: "news-received-the-robotics-company-award-at-the-2024-defense-robotics-competition-for-autonomous-driving-vehicles",
          title: 'Received the Robotics Company Award at the 2024 Defense Robotics Competition for autonomous...',
          description: "",
          section: "News",},{id: "news-won-1st-place-minister-of-defense-award-at-the-dronebot-competition-for-drone-based-runway-foreign-object-detection-trophy",
          title: 'Won 1st Place (Minister of Defense Award) at the Dronebot Competition for drone-based...',
          description: "",
          section: "News",},{id: "news-started-as-an-ai-platform-team-intern-at-robotis-excited-to-work-on-robotics-ai-platform-development",
          title: 'Started as an AI-Platform Team Intern at ROBOTIS! Excited to work on robotics...',
          description: "",
          section: "News",},{id: "news-the-omx-product-has-been-officially-released-proud-to-have-been-a-main-contributor-to-this-robotics-platform-robot",
          title: 'The OMX product has been officially released! Proud to have been a main...',
          description: "",
          section: "News",},{id: "news-joined-robot-intelligence-lab-rilab-at-korea-university-as-an-undergraduate-research-intern-supervised-by-prof-sungjoon-choi-sparkles",
          title: 'Joined Robot Intelligence Lab (RILAB) at Korea University as an Undergraduate Research Intern,...',
          description: "",
          section: "News",},{id: "news-our-paper-learning-unions-of-convex-sets-via-invertible-latent-decomposition-for-path-planning-has-been-accepted-to-corl-2026-tada",
          title: 'Our paper Learning Unions of Convex Sets via Invertible Latent Decomposition for Path...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%61%6A%75%6E%68%61%31%32%31%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Junha02", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/junha-cha", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
