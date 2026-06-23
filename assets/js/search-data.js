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
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of my robotics projects, competitions, and activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-hi-robot-open-ended-instruction-following-with-hierarchical-vision-language-action-models",
        
          title: "Hi Robot: Open-Ended Instruction Following with Hierarchical Vision-Language-Action Models",
        
        description: "Paper review and seminar on Hi Robot — hierarchical VLA models for open-ended instruction following.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hi-robot-hvla/";
          
        },
      },{id: "post-openvla-an-open-source-vision-language-action-model",
        
          title: "OpenVLA: An Open-Source Vision-Language-Action Model",
        
        description: "Paper review and seminar on OpenVLA — an open-source VLA model for robotic manipulation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/openvla-paper-review/";
          
        },
      },{id: "post-end-to-end-semi-supervised-3d-instance-segmentation",
        
          title: "End-to-End Semi-Supervised 3D Instance Segmentation",
        
        description: "Paper review and seminar on PCTeacher for 3D instance segmentation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pcteacher-3d-segmentation/";
          
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
          section: "News",},{id: "projects-aikr",
          title: 'AIKR',
          description: "Attended lectures by robotics experts and gained insights into the field.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aikr/";
            },},{id: "projects-autonomous-cars-and-smart-city",
          title: 'Autonomous Cars and Smart City',
          description: "A smart-city prototype featuring autonomous vehicles and automated charging stations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autonomous_car/";
            },},{id: "projects-turtlebot-autorace",
          title: 'TurtleBot AutoRace',
          description: "Implemented an autonomous driving system using TurtleBot for the Gachon University AutoRace event.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autorace/";
            },},{id: "projects-bb-vla",
          title: 'BB-VLA',
          description: "BB-VLA: A Brain-Body Framework Mimicking Human Thought for Intelligent Manipulator Palletizing. Published at IEIE 2025.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bbvla/";
            },},{id: "projects-closer",
          title: 'Closer',
          description: "A UGV-based door-closing robot concept with practical implementation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/closer/";
            },},{id: "projects-coex-smart-tech-exhibition",
          title: 'Coex Smart-Tech Exhibition',
          description: "Explored current technology level and limitations of Fully Autonomous Palletizing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coex_exhibition/";
            },},{id: "projects-defense-robotics-competition",
          title: 'Defense Robotics Competition',
          description: "Participated in the multifunction autonomous driving vehicle competition — Robotics Company Award.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/defense_robotics/";
            },},{id: "projects-namwon-drone-festival",
          title: 'Namwon Drone Festival',
          description: "Visited the Namwon Drone Festival to experience South Korea&#39;s drone activities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/drone_festival/";
            },},{id: "projects-dronebot-competition",
          title: 'Dronebot Competition',
          description: "1st Place — Minister of Defense Award for drone-based runway foreign object detection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dronebot/";
            },},{id: "projects-imitation-learning",
          title: 'Imitation Learning',
          description: "Lerobot-based imitation learning experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imitation_learning/";
            },},{id: "projects-national-rehabilitation-center-project",
          title: 'National Rehabilitation Center Project',
          description: "Developed a ROS driver for Movella-Dot IMU sensor and ROS2 data collection system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imu_driver/";
            },},{id: "projects-kros",
          title: 'KROS',
          description: "First conference participation — understanding latest research trends in robotics and networking.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kros/";
            },},{id: "projects-customized-omx-6dof",
          title: 'Customized OMX-6DOF',
          description: "Assembled the OMX and experimented with MoveIt controller.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/omx/";
            },},{id: "projects-open-source-supporters",
          title: 'Open Source Supporters',
          description: "Supporting the promotion and management of open source projects at Gachon University.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opensource/";
            },},{id: "projects-openvla-experiment",
          title: 'OpenVLA Experiment',
          description: "Directly applied the OpenVLA model and conducted experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/openvla/";
            },},{id: "projects-proud-gachon-person-award",
          title: 'Proud Gachon Person Award',
          description: "Selected as a student who brought honor to the school.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proud_gachon/";
            },},{id: "projects-rae-robot",
          title: 'RAE Robot',
          description: "Operated the RAE robot with built-in OAK-D camera for human detection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rae_robot/";
            },},{id: "projects-robotis-openlab",
          title: 'ROBOTIS OpenLAB',
          description: "Participated in ROBOTIS OpenLAB event, networking, and headquarters tour.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robotis_openlab/";
            },},{id: "projects-low-scale-smart-factory",
          title: 'Low Scale Smart Factory',
          description: "A small-scale smart factory system with web-ordered robot arm pick-and-place via ARUCO markers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smartfactory/";
            },},{id: "projects-startup-spring-春",
          title: 'Startup Spring(春)',
          description: "1st Place — Excellence Award for &#39;Univerlet&#39; campus communication app.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/startup_spring/";
            },},{id: "projects-turtlebot-teleoperation-system",
          title: 'Turtlebot Teleoperation System',
          description: "Remotix — a teleoperation system enabling remote control for future autonomous vehicles using TurtleBot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teleoperation/";
            },},{id: "projects-customized-widowx-250s",
          title: 'Customized WidowX 250s',
          description: "Assembled and customized the WidowX robotic arm with a bartender example.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/widowx/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6B%77%6E%73%67%6B%31@%67%61%63%68%6F%6E.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-email2',
        title: 'Email2',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
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
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/z000_na", "_blank");
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
