import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Code,
  Heart,
  Send,
  Download,
  Award,
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";
import { ContactForm } from "./components/ContactForm";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Task Master",
    description:
      "A modern React-based Todo application with Firebase authentication, designed for efficient task management while ensuring secure login, real-time synchronization, and password recovery.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "ESLint",
      "Git",
      "TypeScript",
      "Firebase (Firestore, Authentication)",
      "React Router DOM",
    ],
    imageUrl:
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TaskMasterImages/thumbnail.jpg",
    githubUrl: "https://github.com/Bharath-S-J/Task-Master",
    demoUrl: "https://task-master-jade-beta.vercel.app/",
    features: [
      "🔐 Authentication - Email/Password, Google OAuth, Email verification",
      "✅ Task Management - Add, edit, delete, and mark tasks as completed",
      "🔄 Real-time Sync - Firebase Firestore for live task updates",
      "📩 Email Verification - Users must verify their email before gaining access, enhancing security.",
      "🔑 Security - Protected routes, password reset, and forgot password options",
      "🚀 Performance - Fast loading with Vite and optimized rendering",
      "🎨 Minimal UI - Responsive design with a user-friendly interface",
      "🔒 Protected Routes - Ensures only authenticated users can access certain pages.",
      "⚡ Error Handling & Validation - Comprehensive input validation and real-time error messaging.",
    ],
    challenges:
      "Ensuring real-time synchronization, secure authentication, and optimized performance was achieved by leveraging Firebase Firestore for instant updates, implementing authentication with Google and email verification, and using Vite for fast and efficient development.",
    gallery: [
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TaskMasterImages/LandingPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TaskMasterImages/Login.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TaskMasterImages/RegisterPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TaskMasterImages/DashBoard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TaskMasterImages/ResetPassword.png",
    ],
  },
  {
    id: 2,
    title: "Spring Boot Microservices",
    description:
      "A full-fledged microservices architecture using Spring Boot, designed to provide a scalable and efficient backend system with an API Gateway, authentication via Keycloak, real-time monitoring with Grafana, and asynchronous messaging using Kafka.",
    technologies: [
      "Spring Boot",
      "Spring Cloud Gateway",
      "MySQL",
      "MongoDB",
      "Kafka",
      "Keycloak",
      "Grafana",
      "Loki",
      "Docker",
    ],
    imageUrl:
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/thumbnail.jpg",
    githubUrl: "https://github.com/Bharath-S-J/SpringBootMicroservice",
    features: [
      "🚀 Microservices Architecture - Independent services for Product, Order, Inventory, and Notification.",
      "🔐 Authentication & Authorization - Secured using Keycloak for role-based access control.",
      "📡 API Gateway - Centralized routing and security via Spring Cloud Gateway.",
      "🔄 Asynchronous Messaging - Kafka integration for event-driven communication.",
      "📊 Real-time Monitoring - Grafana, Prometheus, and Loki for performance and logs tracking.",
      "⚡ Performance Optimization - Efficient service-to-service communication with resilience.",
    ],
    challenges:
      "Building a distributed system required efficient communication between microservices, ensuring security with Keycloak, and setting up real-time monitoring with Grafana and Prometheus. The integration of Kafka improved system resilience and reduced latency in message processing.",

    gallery: [
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/HomePage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/Register.png ",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/Login.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/HomePage_AfterLogin.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/AddProduct.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/ApacheKafkaDashboard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/KeycloakDashboard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/GrafanaDasgboard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/GrafanaLoki.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/SpringBootMicroservicesImages/GrafanaTempo.png",
    ],
  },

  {
    id: 3,
    title: "Total Bank Manager",
    description:
      "A robust banking management system built using Java (Swing) and MySQL, designed to streamline banking operations with a three-tier user access model. Customers can register, manage accounts, and perform transactions, while employees handle verifications and customer support. Managers oversee bank operations, track financial trends, and manage employees. The system integrates email verification, graphical analytics, and automated account handling for a fully digital banking experience.",
    technologies: [
      "Java (Swing)",
      "MySQL",
      "JDBC",
      "JFreeChart",
      "JavaMail API",
      "iTextPDF",
      "Apache NetBeans",
    ],
    imageUrl:
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/thumbnail.jpg",
    githubUrl: "https://github.com/Bharath-S-J/Total-Bank-Manager",
    features: [
      "🔀 Three-Level User Access - Customers, Employees, and Manager",
      "👤 Customers - Account registration, transaction management, complaints handling",
      "🧑‍💼 Employees - Customer verification, account management, complaint resolution",
      "👨‍💻 Managers - Employee management, financial tracking, announcements",
      "🔢 Automated Account Handling - Auto-generated account numbers upon approval",
      "📊 Graphical Statistics - Visual representation of financial trends and complaint resolution",
      "🔐 Secure Authentication - Email verification and password protection",
      "📄 Transaction History & PDF Export - Users can download transaction records",
    ],
    challenges:
      "Developed reliable communication protocols between embedded devices and server. Implemented real-time data processing and device state management.",
    gallery: [
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/RegistrationPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/DepartmentLogin.png ",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/FirstLoadPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/UserDashBoard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/EmployeeDashboard.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/SuperAdminPage1.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/StatisticsDashboard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/UserDetailsManagingPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/UserManagerPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/EmployeeManagementPage.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/AcccountAproveReject.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/TransactionPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/TransactionHistoryPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/AccountStatementPrintPDF.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/UserComplainResolvePage.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/UserComplainResponceView.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/SearchingCapableOnAllFealds.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/BarGraphView.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/LineGraphView.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/TotalBankManagerImages/PasswordReset.png",
    ],
  },
  {
    id: 4,
    title: "Finance Flow",
    description:
      "A comprehensive desktop application designed for managing loan applications, processing, and tracking. Built with Python and MySQL, it automates financial workflows, ensuring secure document storage, EMI tracking, and role-based access for users and admins.",
    technologies: ["Python (Tkinter)", "MySQL", "PIL ", "Pandas"],
    imageUrl:
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/thumbnail.jpg",
    githubUrl: "https://github.com/Bharath-S-J/Finance-Flow",

    features: [
      "🔐 User Management - Secure login, role-based access, document uploads",
      "🏦 Loan Processing - Multiple loan schemes, document verification, EMI calculations, penalty management",
      "📂 Document Handling - Secure storage, preview functionality, binary data conversion",
      "📊 Financial Management - Payment tracking, interest management, outstanding balance calculation",
      "🔒 Security - Password protection, encrypted document storage",
    ],
    challenges:
      "Handling large-scale financial transactions, securing sensitive user data, and automating EMI tracking were addressed using MySQL for structured data storage, role-based access control for security, and automated calculations to minimize human errors.",
    gallery: [
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/RegisterPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/SignPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/UserDashboard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/UserDetailsFill.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/UserDetailsView.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/UserLoanSelection.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/RepaymentOptions.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/AdminDashboard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/AdminDashboardUpdate.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/NewUsersManage.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/ApprovingLoan.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/AddLoanSchemes.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/UpdateLoanSchemes.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/PaymentHistoryView.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/FinanceFlowImages/RemainingEmiDisplayer.png",
    ],
  },
  {
    id: 5,
    title: "Digital Due Records",
    description:
      "A C-based digital ledger system designed to replace traditional 'Katha' books used in Indian stores. This project streamlines customer due management, bill generation, and record-keeping while ensuring secure authentication and efficient store management.",
    technologies: [
      "C",
      "Linked Lists",
      "File Handling",
      "Dynamic Memory Allocation",
    ],
    imageUrl:
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/thumbnail.jpg",
    githubUrl: "https://github.com/Bharath-S-J/Digital-Due-Records",
    features: [
      "🔐 Dual Access System - Separate portals for customers (view dues) and admins",
      "📂 Customer Record Management - Add, update, and delete records, automatic due calculations, real-time bill generation.",
      "🔍 Advanced Search & Sorting - Search by name or transaction date; sort by name, due amount, or date using linked lists.",
      "🛡️ Security & Authentication - Password-protected admin access, security questions for recovery, limited login attempts",
      "🏪 Store Management - Customizable store details, professional bill generation, user-friendly interface requiring no technical knowledge",
    ],
    challenges:
      "Managing dynamic customer records, ensuring security, and automating bill generation were achieved by using linked lists for efficient sorting, integrating password protection and security questions for safety, and automating real-time due calculations for seamless bill generation.",
    gallery: [
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/HomePage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/MainMenu.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/CustomerMenu.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/WrongPassword.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/PasswordRecovaryOptions.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/PasswordRecovaryUsingOptions.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/PasswordReset.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/PasswordStoreDetailsSetting.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/StoreDetailsReset.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/BillDemo.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/DueRecords.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/RecordUpdateOptions.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/RecordUpdations.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/SearchByDate.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/SearchByName.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/SortingOptions.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/SortByName.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/SortByDate.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/SortByDueAmount.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/DigitalDueRecordsImages/TotalSumAndCount.png",
    ],
  },
  {
    id: 6,
    title: "Virtual Agri-Marketplace",
    description:
      "A web-based platform that connects farmers and buyers, enabling direct agricultural product trading while eliminating intermediaries. The platform ensures fair pricing, inventory management, and order tracking for both farmers and buyers.",
    technologies: ["PHP", "MySQL", "HTML ", "CSS", "JavaScript", "Bootstrap"],
    imageUrl:
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/thumbnail.jpg",
    githubUrl: "https://github.com/Bharath-S-J/Virtual-Agri-Marketplace",

    features: [
      "🔒 Authentication - Secure registration, login, and role-based access (Farmer/Buyer)",
      "🌾 Farmer Features - Product listing, inventory management, sales tracking",
      "🛒 Buyer Features - Product browsing, cart management, order processing",
      "📦 Order & Inventory Management - Automated stock validation, secure order tracking",
      "🛡️ Security - Password hashing, SQL injection prevention, session management",
    ],
    challenges:
      "Ensuring real-time inventory updates and secure user authentication was addressed by implementing automated stock validation, password hashing for credentials, and session-based authentication to enhance security and prevent unauthorized access.",
    gallery: [
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/RegisterPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/LoginPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/FarmerDashboard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/FarmerProfileEdit.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/FarmerSellProducts.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/FarmerViewProducts.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/FarmerPasswordReset.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/BuyerDashboard.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/BuyerProductsPage.png",
      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/BuyerCartView.png",

      "https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/VirtualAgriMarketplaceImages/BuyerOrderViews.png",
    ],
  },
];

function App() {
  const [currentSection, setCurrentSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const scrollToSection = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar
        currentSection={currentSection}
        onNavigate={scrollToSection}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      <section
        id="about"
        className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Hi, I'm Bharath S J
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                {/* Aspiring Software Engineer | Backend, System Design & Cloud
                Enthusiast */}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              Passionate about building scalable, high-performance applications and solving complex technical challenges. With experience in backend engineering, system design, full-stack development, and cloud computing, I thrive on exploring innovative solutions and staying ahead of evolving technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get in Touch
                  <Send size={18} className="sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
                  View Projects
                  <ChevronDown size={18} className="sm:w-5 sm:h-5" />
                </button>
                <div className="flex space-x-6 items-center justify-center pt-3">
              <a
                href="https://github.com/Bharath-S-J"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/bharathsj/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contactwithbharath@gmail.com"
                className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
                
              </div>
              <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Explore my projects for detailed insights and live demos.
              </h5>
            </div>

            {/* Profile Image with Hover Animation */}
            <div className="order-1 md:order-2 px-4 sm:px-0 flex justify-center">
              <motion.img
                src="https://cdn.jsdelivr.net/gh/Bharath-S-J/CDNImages@main/Other/ProfileImage.png"
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.4)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap
              size={32}
              className="text-blue-600 dark:text-blue-400"
            />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl animated-border-card-alt">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Academic Background
              </h3>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Bachelor of Engineering in Computer Science
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    New Horizon College of Engineering, Bengaluru | 2020 - 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Relevant Coursework: Data Structures, Algorithms, Database
                    Management, Operating Systems, Computer Networks
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Pre-University (PCMB)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Sri Maruthi PU College, Hoskote | 2018 - 2020
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    High School
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Global High School, Pillagumpe | 2006 – 2018
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl animated-border-card-alt">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Internship Experience
              </h3>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Software Developer Intern - Wezenite Technologies
                  </h4>

                  <div className="p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Duration
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      March 2024 - May 2024
                    </p>
                  </div>

                  <div className="p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Tech Stack
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      React.js, Tailwind CSS, Django, Python, MongoDB
                    </p>
                  </div>

                  <div className="p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Key Contributions
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                      <li>
                        Developed responsive UI components using React.js and
                        Tailwind CSS
                      </li>
                      <li>
                        Assisted in requirement analysis, testing, and debugging
                      </li>
                      <li>
                        Collaborated with cross-functional teams to improve
                        system efficiency
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/*
            
                    
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl animated-border-card-alt">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    AWS Certified Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">Issued: 2023</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Microsoft Certified: Azure Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">Issued: 2023</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Google Cloud Certified
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">Issued: 2022</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className="mt-8 flex justify-center">
            <a
              href="https://raw.githubusercontent.com/Bharath-S-J/CDNImages/main/Other/Bharath_Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-300">
              <Download size={20} />
              Download Resume
            </a>
          </div> */}
        </div>
      </section>

      <section id="skills" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Code size={32} className="text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Technologies & Tools I’ve Worked With
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "C",
                  "C++",
                  "C#",
                  "Java",
                  "Python",
                  "PHP",
                  "JavaScript",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "React",
                  "Angular",
                  "jQuery",
                  "Bootstrap",
                  "Tailwind",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "Embedded.js", "Spring Boot", "ASP.NET",".NET"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Databases & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "MySQL",
                  "PostgreSQL",
                  "SQL Server",
                  "MongoDB",
                  "Docker",
                  "Git",
                  "GitHub",
                  "CI/CD",
                  "Jenkins",
                  "AWS",
                  "Terraform"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Computer Science Fundamentals
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "DSA",
                  "OOP",
                  "System Design",
                  "DBMS",
                  "OS",
                  "CN",
                  "RESTful APIs",
                  "Linux",
                  "SDLC",
                  "Performance Optimization",
                  "Software Deployment",
                  "Microservices",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Professional Experience
              </h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">• 1 Internship (Software Development)</p>
                <p>• 6+ projects</p>
                <p>• Hosted projects with live demonstrations</p>
                <p>
                  • Strong foundation in backend, databases, and cloud
                  deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase size={32} className="text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="interests" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Heart size={32} className="text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Personal Interests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Problem Solving & Algorithmic Thinking
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuously improving problem-solving skills, focusing on
                algorithms, data structures, and optimizing code efficiency.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Project Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built multiple production-ready projects, integrating various
                technologies and best practices to enhance scalability and
                performance.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animated-border-card-alt">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate about exploring new technologies, improving existing
                skills, and staying up to date with industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have an idea, a project, or just want to connect? Feel free to
              reach out. always open to discussions and collaborations!
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-gray-400">
              © 2025 Bharath S J. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
