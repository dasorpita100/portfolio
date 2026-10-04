export const content = {
  hero: {
    name: "Orpita Das",
    title: "Data Science Major & AI Developer",
    stats: [
      { label: "CGPA", value: "8.51" },
      { label: "Problems Solved", value: "100+" }
    ]
  },
  about: {
    heading: "About & Skills",
    bio: "I am a final-year B.Tech CSE student specializing in Data Science. I bridge the gap between complex datasets and scalable web applications, focusing on AI-driven solutions and robust backend integrations. My objective is to push the boundaries of data infrastructure while pursuing a Master's degree in Germany.",
    focus: "Currently focused on building real-time ML pipelines and resilient AI architectures."
  },
  experience: {
    heading: "Experience & Training",
    items: [
      {
        role: "AI-Based Web Application Intern",
        company: "Infosys Springboard",
        duration: "Mar 2026 – Apr 2026",
        description: [
          "Engineered an AI-powered code generation system converting natural language inputs into executable code, explanations, and keywords using Hugging Face APIs.",
          "Integrated Flask backend with user authentication, SQLite database management, and session handling.",
          "Resolved API authentication errors and database schema issues, improving system reliability to 95% successful response generation."
        ]
      },
      {
        role: "DSA Intern – C++ Developer",
        company: "Cipher School",
        duration: "Jun 2025 - Jul 2025",
        description: [
          "Solved 100+ algorithmic problems using C++ and STL across arrays, recursion, dynamic programming, and graph-based challenges.",
          "Enhanced code performance and analytical thinking through weekly code reviews and structure mentor feedback."
        ]
      }
    ]
  },
  projects: {
    heading: "Selected Works",
    items: [
      {
        id: "proj-smartcity",
        number: "00",
        title: "SMART CITY 2030 (BRICS)",
        outcome: "Ward-level heat vulnerability mapping for Nagpur using open satellite data.",
        preview: "Built a ward-level Heat Vulnerability Index for all 38 wards of Nagpur Municipal Corporation, India, combining 11 years (2015–2025) of Landsat summer data.",
        built: "Combined six indicators with PCA weights in Python and tested ranking stability against equal-weight, entropy and IPCC-framework alternatives.",
        tech: ["Python", "GeoPandas", "Rasterio", "scikit-learn", "PCA", "Landsat"],
        result: "Projected exposed population to 2036 under warming scenarios. Currently building an interactive prototype as a Finalist.",
        github: "#",
        demo: "#"
      },
      {
        id: "proj-codegenie",
        number: "01",
        title: "CodeGenie Platform",
        outcome: "AI code generation achieving 95% reliable output with fallback mechanisms.",
        preview: "A full-stack AI platform converting natural language to code via Hugging Face APIs, authenticated by Flask and SQLite.",
        built: "Formulated an AI-powered system converting natural language prompts into structured code, explanations, and keywords through model-driven generation with fallback handling. Orchestrated backend operations with Flask, integrating authentication, SQLite storage, and user activity tracking.",
        tech: ["Python", "Flask", "Hugging Face API", "SQLite"],
        result: "Strengthened reliability by resolving API inconsistencies, achieving 95% consistent output generation.",
        github: "#",
        demo: "#"
      },
      {
        id: "proj-diabetes",
        number: "02",
        title: "Diabetes Prediction ML",
        outcome: "Machine learning pipeline identifying risk with 80% test accuracy.",
        preview: "End-to-end ML pipeline using the PIMA dataset, deployed as a real-time risk assessment web interface via Pickle.",
        built: "Designed a machine learning pipeline using the PIMA dataset to predict diabetes from eight medical parameters. Performed data cleansing, preprocessing, feature normalization, and model training. Delivered a Flask-based web application.",
        tech: ["Python", "pandas", "scikit-learn", "Flask"],
        result: "Achieved 75–80% test accuracy.",
        github: "#",
        demo: "#"
      },
      {
        id: "proj-nyc",
        number: "03",
        title: "NYC NO₂ Data Analysis",
        outcome: "Analyzed 18,000+ records to map high-risk pollution zones via Power BI.",
        preview: "Exploratory data analysis uncovering seasonal and geographic nitrogen dioxide pollution trends in NYC.",
        built: "Investigated over 18,000 air-quality records, applying exploratory data analysis and visualization techniques. Analyzed nitrogen dioxide measurements to extract meaningful patterns. Crafted an interactive Power BI dashboard.",
        tech: ["Python", "pandas", "seaborn", "Power BI"],
        result: "Identified key pollution hotspots and presented insights effectively.",
        github: "#",
        demo: "#"
      }
    ]
  },
  skills: {
    categories: {
      languages: "C++, Python, MySQL, HTML, CSS, JS",
      tools: "Power BI, Git, Docker, Jupyter Notebook",
      frameworks: "Flask, NumPy, Pandas, Scikit-learn, Hadoop"
    }
  },
  certifications: [
    "Master Generative AI & Tools - Infosys",
    "ChatGPT-4 Prompt Engineering - Infosys",
    "Privacy & Security - NPTEL"
  ],
  achievements: [
    { title: "<strong>Finalist</strong>, SMART CITY 2030 International Competition (BRICS)", desc: "Organised by <strong>Peter the Great St. Petersburg Polytechnic University</strong> with LPU, Tsinghua University and the Federal University of Rio de Janeiro. Led a two-student team mapping heat vulnerability across all 38 wards of Nagpur, India. Final in Moscow, 5–6 October 2026.", type: "competition" },
    { title: "Debate 3rd Position", desc: "Spectra Inter-School Fest (Feb 2026)", type: "communication" },
    { title: "Debate Runner-Up", desc: "Edu Revolution (Apr 2025)", type: "communication" }
  ],
  leadership: [
    { title: "Project Lead", desc: "Led development of an AI code generation platform CodeGenie" },
    { title: "Class Representative", desc: "Coordinated students and faculty" }
  ],
  education: {
    heading: "Education",
    items: [
      {
        degree: "Bachelor of Technology - Computer Science and Engineering",
        institution: "Lovely Professional University",
        location: "Phagwara, Punjab",
        duration: "Since Aug 2023",
        gpa: "CGPA: 8.51"
      },
      {
        degree: "Senior Secondary (ISC)",
        institution: "The Heritage School",
        location: "Kolkata, West Bengal",
        duration: "Jun 2022 - Mar 2023",
        gpa: "Percentage: 83.6%"
      },
      {
        degree: "Secondary Board (ICSE)",
        institution: "St. Michael's School",
        location: "Siliguri, West Bengal",
        duration: "Jun 2020 - Mar 2021",
        gpa: "Percentage: 96.8%"
      }
    ]
  },
  contact: {
    heading: "Contact Me",
    email: "dasorpita100@gmail.com",
    phone: "+91-8777390784",
    github: "https://github.com/dasorpita100",
    linkedin: "https://linkedin.com/in/dasorpita100"
  }
};
