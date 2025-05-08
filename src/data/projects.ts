import type { Project } from "~/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A modern portfolio built with Next.js and Tailwind CSS",
    sourceCode: "https://github.com/yourusername/portfolio",
    liveDemo: "https://your-portfolio.com",
    image: "/projects/portfolio-light.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    caseStudy: {
      overview: "A personal portfolio website showcasing my work and experience",
      challenges: [
        "Creating a responsive design that works across all devices",
        "Implementing dark mode with smooth transitions",
      ],
      solutions: [
        "Used Tailwind CSS for responsive design",
        "Implemented theme switching using Next.js and React context",
      ],
      outcomes: [
        "Fast, responsive website with great user experience",
        "Improved online presence and project showcase",
      ],
    },
  },
  {
    id: "chat-app",
    title: "Real-time Chat Application",
    description: "A real-time messaging platform with WebSocket integration",
    sourceCode: "https://github.com/yourusername/chat-app",
    liveDemo: "https://chat-app-demo.com",
    image: "/projects/portfolio-light.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    caseStudy: {
      overview: "A full-stack chat application with real-time messaging capabilities",
      challenges: [
        "Implementing real-time communication",
        "Managing multiple chat rooms and users",
        "Ensuring message delivery and storage",
      ],
      solutions: [
        "Used Socket.io for real-time communication",
        "Implemented MongoDB for message persistence",
        "Created efficient room management system",
      ],
      outcomes: [
        "Seamless real-time messaging experience",
        "Scalable architecture supporting multiple users",
      ],
    },
  },
  {
    id: "e-commerce",
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform",
    sourceCode: "https://github.com/yourusername/e-commerce",
    liveDemo: "https://shop-demo.com",
    image: "/projects/portfolio-light.png",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    caseStudy: {
      overview: "An e-commerce platform with secure payment processing",
      challenges: [
        "Implementing secure payment processing",
        "Managing product inventory",
        "Creating an intuitive shopping experience",
      ],
      solutions: [
        "Integrated Stripe for secure payments",
        "Built robust inventory management system",
        "Implemented responsive product catalog",
      ],
      outcomes: [
        "Secure and reliable payment processing",
        "Improved user shopping experience",
      ],
    },
  },
  {
    id: "task-manager",
    title: "Task Management System",
    description: "A collaborative task management application",
    sourceCode: "https://github.com/yourusername/task-manager",
    liveDemo: "https://task-manager-demo.com",
    image: "/projects/portfolio-light.png",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Redis"],
    caseStudy: {
      overview: "A task management system for team collaboration",
      challenges: [
        "Building real-time updates for task status",
        "Implementing team collaboration features",
        "Creating an efficient task assignment system",
      ],
      solutions: [
        "Used Redis for caching and real-time updates",
        "Implemented team permissions system",
        "Created drag-and-drop task management",
      ],
      outcomes: [
        "Improved team productivity",
        "Streamlined task management process",
      ],
    },
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracking App",
    description: "A mobile-first fitness tracking application",
    sourceCode: "https://github.com/yourusername/fitness-tracker",
    liveDemo: "https://fitness-tracker-demo.com",
    image: "/projects/portfolio-light.png",
    technologies: ["React Native", "Firebase", "TypeScript"],
    caseStudy: {
      overview: "A comprehensive fitness tracking application for mobile devices",
      challenges: [
        "Implementing accurate workout tracking",
        "Creating intuitive data visualization",
        "Ensuring cross-platform compatibility",
      ],
      solutions: [
        "Used React Native for cross-platform development",
        "Implemented custom charts for progress tracking",
        "Created offline-first architecture",
      ],
      outcomes: [
        "Enhanced user fitness tracking experience",
        "Successful cross-platform deployment",
      ],
    },
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "A real-time weather monitoring dashboard",
    sourceCode: "https://github.com/yourusername/weather-dashboard",
    liveDemo: "https://weather-dashboard-demo.com",
    image: "/projects/portfolio-light.png",
    technologies: ["React", "D3.js", "OpenWeather API"],
    caseStudy: {
      overview: "A weather dashboard with interactive visualizations",
      challenges: [
        "Processing and displaying real-time weather data",
        "Creating interactive weather visualizations",
        "Optimizing API usage and data caching",
      ],
      solutions: [
        "Implemented D3.js for data visualization",
        "Created efficient data caching system",
        "Built responsive weather maps",
      ],
      outcomes: [
        "Interactive weather monitoring experience",
        "Optimized data loading and display",
      ],
    },
  },
];