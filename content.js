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
        number: "01",
        title: "Nagpur Heat Vulnerability Index",
        outcome: "Mapping who is most at risk from extreme heat, ward by ward. Semi-finalist project for SMART CITY 2030 (BRICS).",
        preview: "The first ward-level heat vulnerability index for Nagpur's 38 wards, built from open satellite and municipal data. Team Leader of Team RiskVision.",
        built: "Led a two-student team to a semi-final place at the SMART CITY 2030 BRICS competition, building a ward-level heat vulnerability index for Nagpur's 38 wards from 11 years of Landsat data.",
        tech: ["Geospatial", "Data Science", "PCA", "Urban Climate", "Python"],
        result: "Track 2: Safe and Comfortable Urban Environment",
        stats: [
          { value: "38", label: "wards ranked" },
          { value: "11 yrs", label: "of Landsat summer data (2015–2025)" },
          { value: "6", label: "indicators, weighted by PCA" },
          { value: "40%", label: "of residents (986,625) in High/Very-High wards" },
          { value: "-0.18", label: "correlation: hottest is not most vulnerable" }
        ],
        details: {
          problem: "Nagpur has 2.45 million residents in 38 wards. Its Heat Action Plan began in 2025–26, but no ward-level vulnerability map had been published. Temperature alone can send help to the hottest wards instead of the ones where vulnerable people live.",
          solution: "To our knowledge, Nagpur's first ward-level Heat Vulnerability Index (HVI): one score per ward from heat exposure, social sensitivity and adaptive-capacity deficit, built on Nagpur's own data.",
          howItWorks: [
            "Six indicators: summer land surface temperature, built-up intensity, impervious fraction, population density, SC/ST population share and vegetation deficit.",
            "Data from Landsat (2015–2025), ESA WorldCover, WorldPop and Nagpur Municipal Corporation 2025 ward data.",
            "Each indicator is scaled 0 to 1 and combined with weights set by principal component analysis.",
            "Results are compared with three alternative weighting methods for validation."
          ],
          evidence: [
            "Vulnerability clusters in the dense core: Ward 20 (Itwari market district) scores 0.81, the green Ward 14 scores 0.07.",
            "986,625 residents (40%) live in High and Very-High wards; the ten most vulnerable wards hold 669,528 (27%).",
            "Hottest is not most vulnerable (Spearman ρ = −0.18): a temperature-only map would send help to the wrong places.",
            "The priority wards hold across weighting methods; PCA and IPCC-framework weights give identical ranks."
          ],
          implementation: [
            "Adopt the HVI as the targeting layer of the heat action plan.",
            "Pilot in the top five wards: cool roofs, shade, water points, market and transit outreach.",
            "Work within existing capacity: municipal health and disaster teams lead, with the meteorological department, ward groups and NGOs.",
            "Record ward-level heat illness each season, update the index annually, and scale."
          ],
          benefits: [
            "Better-targeted cooling and outreach, a repeatable public map, and a way to track results.",
            "By 2036, assuming 1.0% annual population growth and mid-scenario warming (+0.35 °C), residents in High and Very-High wards rise from 986,625 to 1,100,746 (about 114,000 more), and the same wards stay on top.",
            "This is a scenario, not a measured outcome. Ahmedabad's heat action plan, linked to about 23% lower excess mortality in a pilot evaluation, is a benchmark, not a forecast for Nagpur."
          ],
          limitations: [
            "No ward-level heat-illness data is public, so the index is not yet validated against health outcomes.",
            "Surface temperature is daytime and single-sensor; the municipal hotspot check resolves 3 of 11 localities.",
            "The 2036 projection is a uniform scenario, not a downscaled climate model."
          ]
        },
        github: "https://github.com/dasorpita100/SmartCity2030",
        demo: "#"
      },
      {
        id: "proj-codegenie",
        number: "02",
        title: "CodeGenie",
        outcome: "Turns a plain-English prompt into code, a step-by-step explanation and keywords, in the programming language you choose.",
        preview: "A Flask web app that turns plain-English prompts into code, explanations and keywords, with a three-provider AI fallback and usage dashboards.",
        built: "Built CodeGenie, a Flask and SQLite web app that converts natural-language prompts into code, explanations and keywords across multiple languages, with user and admin analytics dashboards (Chart.js) and a Gemini → Groq → Hugging Face fallback chain.",
        tech: ["Generative AI", "Flask", "LLM APIs", "Analytics"],
        result: "3 AI providers, 3 outputs per prompt, 2 dashboards",
        stats: [
          { value: "3", label: "AI providers in an automatic fallback chain" },
          { value: "3", label: "outputs per prompt: code, explanation, keywords" },
          { value: "2", label: "dashboards: user history and usage, admin analytics" },
          { value: "3+", label: "languages: Python, Java, C++" }
        ],
        details: {
          overview: "CodeGenie combines AI code generation, learning support and analytics in one platform. It generates the code and also explains it, so users understand what they get.",
          howItWorks: [
            "Choose a programming language.",
            "Enter a prompt describing what you need.",
            "The backend sends the request to an AI model.",
            "The model returns code, an explanation and keywords.",
            "The result is displayed with syntax highlighting and saved to your history."
          ],
          features: [
            "Natural-language prompt to complete code",
            "Explanation and keyword extraction for every result",
            "Multi-language support (Python, Java, C++)",
            "User authentication",
            "User dashboard with history and usage stats",
            "Admin dashboard with analytics and charts",
            "Feedback system",
            "Resilient AI cascade: Gemini, then Groq, then Hugging Face. If one provider fails, the request moves to the next."
          ],
          stack: "HTML, CSS, JavaScript · Flask (Python) · SQLite · Google Gemini API, Groq API, Hugging Face API · Chart.js, Highlight.js"
        },
        github: "https://github.com/dasorpita100/CodeGenie",
        demo: "#"
      },
      {
        id: "proj-fraudlens",
        number: "03",
        title: "Fraud Lens",
        outcome: "A platform to detect fraudulent text messages and identify fake financial documents.",
        preview: "Capstone group project focusing on cybersecurity and full-stack development to identify scam SMS and forged bank statements.",
        built: "Collaborated in a team as a Capstone project. Implemented frontend and backend solutions, integrated cybersecurity measures (OWASP Compliance, Penetration Testing), and performed functional testing and AI validation.",
        tech: ["Full Stack", "Cybersecurity", "AI Validation", "QA"],
        result: "Developed a comprehensive system for fraud detection in SMS and bank statements.",
        details: {
          overview: "A Capstone group project focusing on cybersecurity and full-stack development to identify scam SMS and forged bank statements.",
          problem: "The rapid increase in digital financial fraud, including phishing SMS and doctored bank statements, causes massive financial losses and identity theft.",
          solution: "Fraud Lens provides a dual-faceted platform to detect fraudulent text messages using AI validation and identify fake financial documents through structural analysis.",
          howItWorks: [
            "Text messages are analyzed for phishing patterns and urgency cues.",
            "Uploaded bank statements are processed to detect metadata anomalies or structural tampering.",
            "The system flags suspicious content and provides a risk assessment."
          ],
          features: [
            "SMS Fraud Detection",
            "Financial Document Forgery Identification",
            "OWASP Compliance Implementation",
            "Robust Penetration Testing and QA"
          ],
          stack: "Full Stack Development (Frontend/Backend) · Cybersecurity Tools · AI Validation Modules"
        },
        github: "https://github.com/dasorpita100/Fraud-lens",
        demo: "#"
      },
      {
        id: "proj-emotion",
        number: "04",
        title: "Emotion Detection",
        outcome: "A text-based emotion detection web app classifying user input into multiple emotion categories with 78–82% accuracy.",
        preview: "An NLP and machine learning application deployed using Streamlit.",
        built: "Built a text-based emotion detection web app using NLP and machine learning. Achieved 78–82% accuracy in classifying user-input text into multiple emotion categories. Integrated the machine learning model using Pickle and deployed the application via Streamlit.",
        tech: ["Python", "NLP", "Machine Learning", "Streamlit"],
        result: "Successfully classified text emotions with high accuracy and provided an intuitive web interface.",
        details: {
          overview: "A text-based emotion detection web application classifying user input into multiple emotion categories using NLP.",
          problem: "Understanding the emotional context of user-generated text is essential for sentiment analysis in customer service, social media, and mental health applications.",
          solution: "A machine learning application that processes natural language and classifies it into distinct emotional states in real-time.",
          howItWorks: [
            "User inputs a sentence or paragraph into the Streamlit web interface.",
            "The text undergoes NLP preprocessing (tokenization, stop-word removal).",
            "A trained classification model analyzes the text and predicts the dominant emotion.",
            "Results are displayed instantly with confidence scores."
          ],
          evidence: [
            "Achieved 78–82% accuracy across multiple emotion categories.",
            "Successfully deployed for immediate user interaction via Streamlit."
          ],
          stack: "Python · NLP Libraries · Machine Learning (scikit-learn) · Streamlit · Pickle"
        },
        github: "https://github.com/dasorpita100/Emotion_Detection",
        demo: "#"
      },
      {
        id: "proj-diabetes",
        number: "05",
        title: "Diabetes Prediction ML",
        outcome: "Machine learning pipeline identifying risk with 80% test accuracy.",
        preview: "End-to-end ML pipeline using the PIMA dataset, deployed as a real-time risk assessment web interface via Pickle.",
        built: "Designed a machine learning pipeline using the PIMA dataset to predict diabetes from eight medical parameters. Performed data cleansing, preprocessing, feature normalization, and model training. Delivered a Flask-based web application.",
        tech: ["Python", "pandas", "scikit-learn", "Flask"],
        result: "Achieved 75–80% test accuracy.",
        details: {
          overview: "An end-to-end Machine Learning pipeline that predicts the likelihood of diabetes based on eight critical medical parameters.",
          problem: "Early detection of diabetes can significantly improve patient outcomes, but traditional diagnostic methods often require extensive manual medical evaluations.",
          solution: "A predictive model trained on the PIMA Indians Diabetes Database. It provides an immediate, accessible risk assessment through a simple web interface.",
          howItWorks: [
            "Users input medical parameters (e.g., glucose level, blood pressure, BMI).",
            "The Flask backend feeds these values into a pre-trained scikit-learn model.",
            "The model processes the normalized data and returns a probability score for diabetes risk."
          ],
          evidence: [
            "Achieved 75–80% test accuracy on the validation dataset.",
            "Successfully deployed as a real-time web application using Flask and Pickle."
          ],
          stack: "Python · pandas · scikit-learn · Flask · HTML/CSS"
        },
        github: "https://github.com/dasorpita100/Diabetes_prediction",
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
    { title: "Diploma of the Semi-Finalist: SMART CITY 2030 (BRICS) - Peter the Great St. Petersburg Polytechnic University", file: "/certificates/smart_city_2030_semi_finalist.pdf" },
    { title: "Master Generative AI & Tools - Infosys", file: "/certificates/infosys_master_genai.pdf" },
    { title: "ChatGPT-4 Prompt Engineering - Infosys", file: "/certificates/infosys_chatgpt4.pdf" },
    { title: "Privacy & Security - NPTEL", file: "/certificates/nptel_privacy.pdf" },
    { title: "Data Structures Algorithms - CipherSchools", file: "/certificates/cipher_schools_dsa.pdf" },
    { title: "Generative AI for Beginners - Udemy", file: "/certificates/udemy_generative_ai.pdf" },
    { title: "Intro to AI: A Beginner's Guide to Artificial Intelligence - Udemy", file: "/certificates/udemy_intro_to_ai.pdf" }
  ],
  achievements: [
    { 
      title: "<strong>Semi-finalist</strong>, 3rd SMART CITY 2030 International Competition (BRICS)", 
      date: "Oct 2026",
      desc: "Awarded Diploma of the Semi-Finalist by <strong>Peter the Great St. Petersburg Polytechnic University</strong> (Russia), with Lovely Professional University, Tsinghua University and the Federal University of Rio de Janeiro. Team Leader of Team RiskVision mapping heat vulnerability across all 38 wards of Nagpur, India (Track 2: Safe and Comfortable Urban Environment). International final: Moscow, Tech Science Forum 2026.", 
      file: "/certificates/smart_city_2030_semi_finalist.pdf",
      type: "competition" 
    },
    { title: "<strong>1st Position</strong>, Debate Competition", desc: "Secured 1st position at the Spectra Inter-School Fest (Feb 2026), a highly competitive inter-school event featuring hundreds of participants from top schools across the region. Demonstrated exceptional analytical thinking and public speaking skills across multiple rigorous rounds.", shortDesc: "Secured 1st position at the Spectra Inter-School Fest (Feb 2026).", type: "communication" },
    { title: "<strong>Runner-Up</strong>, Debate Competition", desc: "Awarded Runner-Up at Edu Revolution (Apr 2025), a premier inter-school competition that drew a huge amount of participants and large audiences. Showcased strong persuasive communication and argumentative reasoning while debating complex contemporary global issues.", shortDesc: "Awarded Runner-Up at Edu Revolution (Apr 2025).", type: "communication" }
  ],
  leadership: [
    { title: "Project Lead", desc: "Led Team RiskVision to the SMART CITY 2030 BRICS semi-finals, spearheading the development of Nagpur's ward-level heat vulnerability index." },
    { title: "Class Representative", desc: "Acted as the primary liaison between students and faculty, organizing academic initiatives and streamlining departmental communications." }
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
