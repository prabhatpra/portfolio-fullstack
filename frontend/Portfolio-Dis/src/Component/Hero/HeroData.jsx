import Github from "../../assets/socialImg/github.png";
import Intsta from "../../assets/socialImg/insta.png";
import Linkedin from "../../assets/socialImg/linkedin.png";
import Facebook from "../../assets/socialImg/facebook.png";

// Typewriter roles
export const roles = [
  { title: "Java Developer" },
  { title: "React JS Developer" },
  { title: "Backend Developer" },
  { title: "Frontend Developer" },
  { title: "Full Stack Developer" },
  { title: "UI/UX Designer" },
];


// Scrolling description
export const scrollingDetails = `
Java Developer Intern
HulkHire Tech
02/2025 - Present, Hyderabad, India
Designed and developed Stripe Integration using Java Spring Boot and Microservices.
Conducted Stripe Integration document analysis, finalizing end-to-end integration approaches with the team.
Built a Stripe-provider service that integrates with Stripe APIs to create, retrieve, and expire sessions.
Developed a Payment Status Tracking system to ensure 100% reliability of payments.
Integrated Stripe APIs using Stripe Auth Security Mechanism and implemented HmacSHA256 for secure notification processing.
Developed multiple error codes to handle system failures and implemented effective error handling with Spring Exception Handling.
Applied Factory Pattern, Builder Pattern, and OOP principles for designing modular applications.
Worked with MySQL using Spring JDBC for database operations.
Gained hands-on experience with AWS services like EC2, RDS, and AWS Secret Manager.
Contact : Mr. Tausief Shaikh - tausiefs@hulkhiretech.com

Travel and Tourism Management System
(08/2023 - 02/2024)
Developed a comprehensive Travel and Tourism Management Desktop application using Java, Swing, AWT, and JDBC with MySQL.
This application offers a secure user login system to ensure data protection and provides an intuitive dashboard for efficiently managing bookings and customer information.
The system streamlines data retrieval and updates, enhancing overall user experience.
`
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line);

// Typewriter settings
export const typewriterSettings = {
  TYPING_SPEED: 120,
  DELETING_SPEED: 60,
  PAUSE_TIME: 1800,
};

// Basic profile lines (without images/links)
export const basicProfileDescriptions = {
  instagram: {
    title: "Instagram Profile",
    lines: [
      "📸 Sharing creative moments.",
      "🌟 Engaging with followers.",
      "🎨 Passionate about photography and design.",
    ],
  },
  facebook: {
    title: "Facebook Profile",
    lines: [
      "👥 Connecting with friends and community.",
      "💬 Sharing updates and ideas.",
      "🌐 Engaging in groups and discussions.",
    ],
  },
  linkedin: {
    title: "LinkedIn Profile",
    lines: [
      "🔗 Let's connect professionally.",
      "💬 Available for collaboration.",
      "🌐 Building connections & learning.",
    ],
  },
  github: {
    title: "GitHub Profile",
    lines: [
      "🛠️ Open-source contributions.",
      "📂 Clean, well-documented projects.",
      "🎯 Focused on real-world solutions.",
    ],
  },
};

// Profile descriptions with images and links
export const profileWithImages = {
  instagram: {
    title: "Instagram Profile",
    lines: [
      "Follow me on Instagram!",
      "📸 Explore my latest posts.",
    ],
    img: Intsta,
    link: "https://www.instagram.com/prabhatprajapati_01/",
  },
  facebook: {
    title: "Facebook Profile",
    lines: ["Connect with me on Facebook!"],
    img: Facebook,
    link: "https://www.facebook.com/prabhatprajapati.prajapati.18",
  },
  linkedin: {
    title: "LinkedIn Profile",
    lines: ["Connect professionally on LinkedIn!"],
    img: Linkedin,
    link: "https://www.linkedin.com/in/prabhat-prajapati-01p6/",
  },
  github: {
    title: "GitHub Profile",
    lines: ["Check out my projects on GitHub!"],
    img: Github,
    link: "https://github.com/prabhatpra",
  },
};
