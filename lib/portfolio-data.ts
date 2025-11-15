export const portfolioData = {
  profile: {
    name: "Khaled Ibrahem Al-Desuky",
    title: "Software Engineer",
    bio: "Software Engineer and Technical Project Coordinator. I build scalable backend solutions using .NET and cloud, while also effectively coordinating technical projects to successful delivery at IPMagiX.",
    email: "khaled.aldesuky@gmail.com",
    phone: "+20 (1095832905)",
    location: "Cairo, Egypt",
    photo: "/profile-photo.jpg",
    github: "https://github.com/khaled-aldesuky",
    linkedin: "https://linkedin.com/in/khaledaldesuky",
    resume: "Khaled_Ibrahem_CV.pdf",
  },

  experience: [
    {
      title: "Technical Project Coordinator",
      company: "IPMagiX",
      period: "Jul 2025 - present",
      description:
        "Lead daily stand-up meetings to track team progress, resolve impediments, and implement DevOps practices for workflow management. Serve as the primary liaison for requirements gathering between clients, stakeholders, and technical teams.",
    },
    {
      title: "Full Stack Developer Internship",
      company: "AZM Squad",
      period: "Jul 2025 - Oct 2025",
      description:
        "Successfully completed comprehensive training roadmap. Gained full-stack experience using .NET for the backend and React for the frontend within a proprietary cloud environment.",
    },
    {
      title: "Full Stack Developer Internship",
      company: "Egabi Solutions",
      period: "Jul 2025 - Aug 2025",
      description:
        "Contributed to the Ministry of Health and Housing (MOH) project, focusing on enhancing and securing the Login functionality and developing the edit and update phase for the licensing module.",
    },
    {
      title: "Cloud Computing And AI Intern",
      company: "EJADA",
      period: "Jul 2024 - Aug 2024",
      description:
        "Gained hands-on experience with Google Cloud Platform (GCP), from resource estimation to deploying a web application. Focused on web security principles (OWASP Top 10) and conducted comparative analysis of leading cloud platforms.",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Pill Spot (Graduation Project)",
      tech: ["React", ".NET 8 Web API", "MySQL", "SignalR"],
      description:
        "Full-stack smart pharmacy locator platform. Features real-time medicine search, pharmacy management, role-based access control, and location-based search using spatial queries.",
      highlights: [
        "Real-time notifications via SignalR",
        "Spatial database queries",
        "Role-based access control",
        "Secure authentication",
      ],
      repoUrl: "https://github.com/khaled-aldesuky/PillSpot",
      demoUrl: "",
    },
    {
      id: 2,
      title: "Distributed Database System",
      tech: ["Go", "MySQL", "REST API"],
      description:
        "MySQL cluster management system with Master-Slave replication, automatic failover, and comprehensive monitoring via RESTful APIs.",
      highlights: ["Master-Slave replication", "Automatic failover", "Real-time monitoring", "Node health checks"],
      repoUrl: "https://github.com/khaled-aldesuky/Distributed-Database-with-GOLang",
      demoUrl: "",
    },
    {
      id: 3,
      title: "Fast Food Delivery (OTLOBLY)",
      tech: ["ASP.NET Core MVC 7", "LINQ", "Stripe API"],
      description:
        "Full-featured delivery platform with distinct roles for Superadmin, Admin, and Customers. Integrated payment processing via Stripe API.",
      highlights: ["Role-based access", "Payment integration", "MVVM architecture", "Identity management"],
      repoUrl: "https://github.com/khaled-aldesuky/Otlobly",
      demoUrl: "",
    },
    {
      id: 4,
      title: "Online Exam System",
      tech: ["ASP.NET Core MVC 8", "SQL Server"],
      description:
        "Web-based exam platform supporting Admin and Student roles with secure authentication and comprehensive exam management features.",
      highlights: ["Admin dashboard", "Exam scheduling", "Student submissions", "Secure authentication"],
      repoUrl: "https://github.com/khaled-aldesuky/Online-Exam",
      demoUrl: "",
    },
    /* {
      id: 5,
      title: "N-Queens Solver using Genetic Algorithm",
      tech: ["Python"],
      description:
        "Implemented the N-Queens problem solution using a Genetic Algorithm in Python, incorporating crossover, mutation, and a fitness function to optimize the solution.",
      highlights: ["Genetic Algorithm", "Optimization", "Problem Solving"],
      repoUrl: "",
      demoUrl: "",
    },*/
  ],

  skills: [
    {
      category: "Languages",
      items: ["C", "C++", "C#", "Java", "Python", "Go", "SQL"],
    },
    {
      category: "Frameworks & Tech",
      items: ["ASP.NET Core", "Entity Framework", "LINQ", "React", "Angular", "SignalR"],
    },
    {
      category: "Databases & Cloud",
      items: ["MySQL", "SQL Server", "Azure", "GCP", "AWS", "Distributed Databases"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Visual Studio", "VS Code", "Jira", "Microsoft 365"],
    },
    {
      category: "Core Competencies",
      items: [
        "Full-Stack Development",
        "DevOps",
        "Data Structures & Algorithms",
        "OOP",
        "Database Design",
        "API Development",
      ],
    },
    {
      category: "Soft Skills",
      items: ["Leadership", "Team Work", "Problem Solving", "Communication", "Adaptability"],
    },
  ],

  leadership: [
    {
      role: "President, Students Union",
      org: "FCI - Assiut University",
      period: "2024–2025",
    },
    {
      role: "Main Organizer",
      org: "Assiut Employment & Freelancing Forum (Third Edition)",
      period: "2024–2025",
    },
    {
      role: "Main Organizer",
      org: "SolveX Hackathon & Job Fair - Assiut",
      period: "2023–2024",
    },
    {
      role: "C++ Programming Fundamentals Instructor",
      org: "Bionic Assiut",
      period: "2023–2024",
    },
    {
      role: "Head of Public Relations Department",
      org: "Bionic Assiut",
      period: "2023–2024",
    },
  ],
}
