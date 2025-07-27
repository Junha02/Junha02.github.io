$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/opensource.png',
            link: 'https://slam.gachon.ac.kr/',
            title: 'Open Source Supporters',
            technologies: ['open-source'],
            description: "As an Open Source Supporter at Gachon University's Software-Centered University, I support the promotion and management of open source projects within the school.",
            categories: ['activity']
        },
        {
            image: 'assets/images/kros.png',
            link: 'https://www.notion.so/KROS-1f5f891b707680d8943ef24daa361f52?pvs=4',
            title: 'KROS',
            technologies: ['forum','networking'],
            description: "Participating in my first conference, I was able to understand the latest research trends in robotics and meet many industry professionals, gaining valuable experience.",
            categories: ['activity']
        },
        {
            image: 'assets/images/robotis1.png',
            link: '',
            title: 'ROBOTIS OpenLAB',
            technologies: ['ROBOTIS','forum','networking'],
            description: "I participated in the ROBOTIS OpenLAB event, conducted networking, and toured their headquarters.",
            categories: ['activity']
        },
        {
            image: 'assets/images/hy.gif',
            link: '',
            title: 'Coex Smart-Tech Exhibition',
            technologies: ['forum','networking'],
            description: "Visiting the Coex Smart-Tech exhibition, I was able to understand the current technology level and limitations of Fully Autonomous Palletizing that I was researching.",
            categories: ['activity']
        },
        {
            image: 'assets/images/drone.gif',
            link: '',
            title: 'Namwon Drone Festival',
            technologies: ['forum','networking'],
            description: "I visited the Namwon Drone Festival and enjoyed South Korea's drone activities.",
            categories: ['activity']
        },
        {
            image: 'assets/images/arkr.png',
            link: '',
            title: 'AIKR ',
            technologies: ['AIKR','forum','networking'],
            description: "It was a great opportunity to listen to lectures by robotics experts and gain insights. [Made private as it contains the speakers' research assets.]",
            categories: ['activity']
        },
        {
            image: 'assets/images/kiroplatform.jpeg',
            link: '',
            title: '2024-Defense Robotics Competition [Robotics Company Award]',
            technologies: ['Award','ROS','Robotics','moveit','YOLO'],
            description: "Participated in the multifunction autonomous driving vehicle competition organized by the Army.",
            categories: ['challenge','featured']
        },
        {
            image: 'assets/images/drbot.png',
            link: 'https://www.notion.so/1f6f891b707680bc8453c16857aef4d2?pvs=4',
            title: 'Dronebot Competition Challenge [1st Place - Minister of Defense Award]',
            technologies: ['Award','Robotics','Deep Learning'],
            description: "We won first place in the drone-based runway foreign object detection competition organized by the Republic of Korea Air Force.",
            categories: ['Award','challenge','featured']
        },
        {
            image: 'assets/images/Univer.png',
            link: '',
            title: 'Startup Spring(春) [1st Place - Excellence Award]',
            technologies: ['Award','Flutter'],
            description: "We developed 'Univerlet,' a campus communication app, and won first place in the student startup competition hosted by Gachon University.",
            categories: ['challenge']
        },
        {
            image: 'assets/images/gac.png',
            link: '',
            title: 'Proud Gachon Person Award',
            technologies: ['Award'],
            description: "I was selected as a student who brought honor to the school and received the Proud Gachon Person Award.",
            categories: ['challenge']
        },
        {
            image: 'assets/images/bbvla.png',
            link: 'https://www.notion.so/Demo_BB-vla-1f5f891b7076809b9f99c5a156042136?pvs=4',
            title: 'BB-VLA, Korean Institute of Electronics Engineers, IEIE, (2025).',
            technologies: ['VLA','ROS','LLM'],
            description: "BB-VLA: A Brain-Body Framework Mimicking Human Thought for Intelligent Manipulator Palletizing",
            categories: ['paper','featured']
        },
        {
            image: 'assets/images/openVLA.gif',
            link: 'https://www.notion.so/Demo_OpenVLA-1f6f891b707680449c6bf1d37dd49b58?pvs=4',
            title: 'OpenVLA Experiment',
            technologies: ['VLA'],
            description: "Directly applied the OpenVLA model and conducted experiments.",
            categories: ['robotics','featured']
        },
        {
            image: 'assets/images/smartfactory.gif',
            link: 'https://www.notion.so/LSSF-Low-Scale-Smart-Factory-1f6f891b707680bfbe56edfe37206dee?pvs=4',
            title: 'Low scale Smart Factory',
            technologies: ['robotics','ROS'],
            description: "Aiming to build a small-scale smart factory, I developed a system where, upon a customer’s web order, a robot arm detects the product via an ARUCO marker and performs pick-and-place operations.",
            categories: ['robotics','featured']
        },
        {
            image: 'assets/images/Teleoperation.gif',
            link: 'https://github.com/Remotix8/Remotix8',
            title: 'Turtlebot Teleoperation System',
            technologies: ['robotics','react','ROS'],
            description: "I developed 'Remotix,' a teleoperation system that enables remote control for future autonomous vehicles using a TurtleBot.",
            categories: ['robotics','featured']
        },
        {
            image: 'assets/images/imitation.gif',
            link: '',
            title: 'Imitation Learning',
            technologies: ['robotics','Lerobot'],
            description: "Lerobot Example",
            categories: ['robotics','featured']
        },
        {
            image: 'assets/images/widow.gif',
            link: 'https://www.notion.so/DEMO_Custom_WidowX-1f5f891b707680b58910c182580e0d45',
            title: 'Customized widowX 250s',
            technologies: ['robotics'],
            description: "Assembled the WidowX robotic arm and customized the bartender example.",
            categories: ['robotics','featured']
        },
        {
            image: 'assets/images/omx.gif',
            link: 'https://www.notion.so/DEMO_7Dof_OMX-control-1f5f891b707680f4b196e16a47efd57f',
            title: 'Customized OMX-6DOF',
            technologies: ['robotics'],
            description: "Assembled the OMX and playing with the MoveIt controller.",
            categories: ['robotics','featured']
        },
        {
            image: 'assets/images/로봇공학.gif',
            link: 'https://github.com/ckwnsgk/1-2Robotics_TeamProject-AutomaticCar-SmartCity-Beta',
            title: 'Autonomous cars and Smart City',
            technologies: ['Arduino','Robotics'],
            description: "Imagining a future city, I built a smart-city prototype featuring autonomous vehicles and automated charging stations.",
            categories: ['robotics','featured']
        },
        {
            image: 'assets/images/rae.gif',
            link: 'https://www.notion.so/DEMO_RAE-1f5f891b7076801eb4e7c0cbd45c7599?pvs=4',
            title: 'RAE robot',
            technologies: ['robotics'],
            description: "I operated the RAE robot and used its built-in OAK-D camera to perform human detection.",
            categories: ['robotics']
        },
        {
            image: 'assets/images/imu.gif',
            link: 'https://www.notion.so/Movella-Dot-IMU-Sensor-Ros-Driver-b98ea440020b414891fd71aeaca2237b',
            title: 'National Rehabilitation Center Project',
            technologies: ['ROS'],
            description: "Developed a ROS driver for the Movella-Dot IMU sensor. and created a ROS2 System to collect the data.",
            categories: ['robotics']
        },
        {
            image: 'assets/images/auto.gif',
            link: '',
            title: 'TurtleBot Autorace',
            technologies: ['ROS','robotics'],
            description: "I participated in Gachon university AutoRace event and implemented an autonomous driving system using a TurtleBot.",
            categories: ['robotics']
        },
        {
            image: 'assets/images/closer.png',
            link: 'https://github.com/ckwnsgk/Robotics_CLOSER',
            title: 'Closer',
            technologies: ['Arduino','Robotics'],
            description: "I conceptualized a UGV-based door-closing robot called “Closer” and architected its code with practical implementation in mind.",
            categories: ['robotics']
        }
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    
    // Add a fallback message if no projects are found
    if (projects.length === 0) {
        projects = ['<div class="no-projects-message" style="text-align: center; padding: 30px; width: 100%;"><p class="paragraph-text">No projects found in this category.</p></div>'];
    }
    
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}