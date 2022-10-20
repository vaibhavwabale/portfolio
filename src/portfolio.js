/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vaibhav Wabale",
  title: "Hi I'm Vaibhav",
  subTitle: emoji(
    "A passionate Android Developer 🚀 having an experience of building Mobile applications with Java / Kotlin / Dart / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AyVykFiy2kLWN9HfS0tDPMycIdkv5wOe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vaibhavwabale",
  linkedin: "https://www.linkedin.com/in/vaibhavwabale",
  gmail: "vaibhavsonu0506@gmail.com",
  medium: "https://medium.com/@vaibhav-wabale",
  stackoverflow: "https://stackoverflow.com/users/11033172/vaibhav-wabale",
  instagram: "https://www.instagram.com/_vaibhav.wable/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ANDROID DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Mobile Applications ( PMA ) in normal"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indira College (ICCS)",
      logo: require("./assets/images/indira.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - April 2024",
      desc: "Participated in the microsoft cloud day.",
      descBullets: [
        "Attending seminar In various fields such cloud, flutter and android"
      ]
    },
    {
      schoolName: "Modern College",
      logo: require("./assets/images/modern.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - April 2022",
      desc: "Learn new skills using self pacing.",
      descBullets: ["Such as Android and Flutter development"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Competitive Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    {
      role: "Android Developer Intern",
      company: "LETS GROW MORE & SPARK FOUNDATION",
      companylogo: require("./assets/images/intern.jpg"),
      date: "SEP 2022 – OCT 2022",
      desc: "",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Android Apps Projects",
  subtitle: "SOME APPS THAT ARE PUBLISHED IN PLAY STORE",
  projects: [
    {
      image: require("./assets/images/1.png"),
      projectName: "Learn Coding: CodeLab",
      projectDesc: "CodeLab is a free android app that makes it easy to learn programming languages.",
      footerLink: [
        {
          name: "Download App",
          url: "https://play.google.com/store/apps/details?id=in.icomputercoding.computercoding"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Introduction to Android Mobile Application Development",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/YP5L4WZ8ZA4C"
        }
      ]
    },
    {
      title: "Programming Fundamentals in Kotlin",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/XCT5RJC3CC5L"
        }
      ]
    },
    {
      title: "Preparing for Google Cloud Certification: Cloud DevOps Engineer",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.coursera.org/account/accomplishments/professional-cert/K8J8KA6PURHM"
        },
      ]
    },
    {
      title: "C & C++ Programming",
      image: require("./assets/images/ite.svg"),
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1PK9F-P397LLj_9Li2wGxDKgSJZbbkkX1/view?usp=sharing"
        },
      ]
    },
    {
      title: "Python 3.4.3 Training",
      image: require("./assets/images/spoken.jpg"),
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1wemUgU4JG-OenCeiAcYmOOAe8UH9WTcF/view?usp=sharing"
        },
      ]
    },
    {
      title: "Participated in Online Webinar on 'Machine Learning'",
      image: require("./assets/images/garware.png"),
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1Ol2Gyn7bJh3UN5uFW0fYQkDCNvBY-n0H/view?usp=sharing"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://vaibhu.medium.com/what-is-cloud-computing-everything-you-need-to-know-97aee37109f7",
      title: "What is Cloud Computing? Everything You Need to Know",
      description:
        "I received a mail from my car dealer with a report about the health status of my car."
    },
    {
      url: "https://vaibhu.medium.com/java-quick-reference-for-beginner-cheat-sheet-65-crash-course-9bab72662ed3",
      title: "Java Quick Reference For Beginner | Cheat Sheet 65 | Crash Course",
      description:
        "This java quick reference cheat sheet will go about as a brief training for Java language and help you with different basics of Java programming."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "8698066529",
  email_address: "vaibhavsonu0506@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "vaibhav_wabale0", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable
};
