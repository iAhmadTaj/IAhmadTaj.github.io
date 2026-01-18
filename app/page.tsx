"use client"
import styles from "./root.module.css"
import Image from "next/image"
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Phone,
  MapPin,
  FileText,
} from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import { useTheme } from "next-themes"
import ProjectCard from "@/components/projectCard/projectCard"
import ProjectModal from "@/components/projectModal/projectModal"
import type { ProjectType } from "@/lib/types"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import cn from "classnames"

export default function RotPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projectsDetailedData: Record<string, any> = {
    "Event Management System": {
      images: [
        "/Event Mangement system/Hero page - ems.png",
        "/Event Mangement system/Tickets - ems.png",
        "/Event Mangement system/Dashboard.png",
        "/Event Mangement system/EMS.png",
      ],
      fullDescription: `The Event Management System (EMS) is a scalable, full-stack web application developed to automate event registration, ticketing, and management for a university environment. The system eliminates manual workflows by providing a fully digital solution for event discovery, registration, payment processing, and access control.

The platform implements role-based functionalities, allowing administrators to create and manage events, control pricing, and maintain a media gallery for past events. Students can browse active events, register online, complete payments, and receive system-generated, unique e-tickets via email. Each ticket is associated with a unique identifier to ensure single-entry validation.

The application follows a decoupled architecture, with the frontend built using Next.js and Tailwind CSS, consuming RESTful APIs developed in .NET. Data persistence is handled through MySQL, ensuring relational integrity and efficient query performance. Email notifications and ticket delivery are automated using MailKit, triggered upon successful payment verification.`,
    },
    "Eye-Tracking Mouse Cursor": {
      images: [
        "/Eye-Tracking Mouse Cursor/Eye Tracking Mouse Cursor 3.png",
        "/Eye-Tracking Mouse Cursor/Eye Controlled Mouse Cursor.mp4",
      ],
      fullDescription: `The Eye-Controlled Mouse Cursor System is an innovative humancomputer interaction project that enables users to control the mouse cursor using only their eye movements. This system leverages real-time computer vision techniques to translate eye movement and blinking into seamless cursor movement and mouse clicks.

Using a webcam, the application detects facial landmarks and tracks eye positions with high precision. Cursor movement is controlled by eye direction, while intentional blinking is used to trigger mouse click actions. This project demonstrates how assistive technology can improve accessibility for individuals with physical limitations and explores the future of touchless interaction.

Key Features

Real-time mouse cursor movement controlled by eye direction

Blink-based mouse click detection

Webcam-based face and eye tracking

User-friendly graphical interface (GUI)

Smooth and responsive cursor control`,
    },
    "RedStore": {
      images: [
        "/Redstore/LoginPage.png",
        "/Redstore/Admin.png",
        "/Redstore/Products.png",
        "/Redstore/Cart.png",
        "/Redstore/Main.png",
      ],
      fullDescription: `RedStore  E-Commerce Website

RedStore is a dynamic e-commerce web application focused on selling sportswear and tech products. The project uses a pre-designed frontend template, which was integrated with a custom backend developed in PHP to add full e-commerce functionality.

I implemented complete CRUD operations to manage products, users, and customer reviews. Product data is fetched dynamically from the database, and the shopping cart system allows users to add, remove, and manage items efficiently. The system also includes user authentication with a separate admin panel for managing products, users, and reviews.

The application was developed and tested locally using XAMPP, with data stored in a MySQL database.

Frontend Credit

Frontend template credit:
The frontend design used in this project was adapted from
https://rsanimesh.github.io/

Backend functionality, database integration, and system logic were fully implemented by me.`,
    },
    "Toytown": {
      images: [
        "/Toytown/login.png",
        "/Toytown/products.png",
        "/Toytown/complete.png",
      ],
      fullDescription: `ToyTown – E-Commerce Website

ToyTown is a responsive front-end focused e-commerce website designed for selling toys through an engaging and user-friendly interface. The project combines modern frontend design with essential backend functionality to simulate a real-world online shopping experience.

The frontend was developed using HTML, CSS, and JavaScript, ensuring responsiveness across different screen sizes. The platform includes dynamic product listings, a dedicated product video section, and a customer review section to enhance user engagement and product visibility.

On the backend, PHP was used to implement CRUD operations for managing products and users. Data is stored and handled using a MySQL database, with the project developed and tested locally using XAMPP. This project demonstrates the integration of frontend design with backend logic in a structured e-commerce system.`,
    },
  }

  const openProjectModal = (projectName: string) => {
    setSelectedProject(projectName)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const getProjectData = (projectName: string | null) => {
    if (!projectName) return { images: [], fullDescription: "" }
    return projectsDetailedData[projectName] || { images: [], fullDescription: "" }
  }

  const projectsList: ProjectType[] = [
    {
      name: "Event Management System",
      imageUrl: "/Event Mangement system/Hero page - ems.png",
      description: "A scalable, full-stack web application for automating event registration, ticketing, and management with payment processing and access control.",
      liveLink: "#",
      work: "Final Year Project",
      status: "Active",
      techStack: ["Next.js", ".NET", "MSSQL", "Azure DevOps"],
    },
    {
      name: "Eye-Tracking Mouse Cursor",
      imageUrl: "/Eye-Tracking Mouse Cursor/Eye Tracking Mouse Cursor 3.png",
      description:
        "Won 1st place in university PBL competition. Python application using OpenCV and MediaPipe for real-time eye movement tracking to control mouse cursor and perform clicks via blink detection.",
      liveLink: "#",
      work: "PBL Project",
      status: "Active",
      techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    },
    {
      name: "RedStore",
      imageUrl: "/Redstore/Database.png",
      description: "A dynamic e-commerce website for sportswear and tech products featuring CRUD-based product management, user authentication, and a fully functional shopping cart. Includes an admin dashboard for managing products, users, and reviews.",
      liveLink: "#",
      work: "Solo Project",
      status: "Active",
      techStack: ["PHP", "MySQL", "XAMPP", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "Toytown",
      imageUrl: "/Toytown/hero.png",
      description: "A responsive e-commerce website for selling toys, featuring dynamic product listings, user reviews, and video sections. Includes PHP-based CRUD operations for managing users and products.",
      liveLink: "#",
      work: "Solo Project",
      status: "Active",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    },
  ]

  const [projectDisplayList, setProjectDisplayList] = useState(projectsList.slice(0, 3))
  const [showMoreProject, setShowMoreProject] = useState("less")

  const techStack1 = [
    { name: "React.js", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/react_fxopt7.png" },
    { name: "Next.js", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764539/nextjs_gyqxdo.png" },
    { name: "JavaScript", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/python_gtxoax.webp" },
    { name: "HTML5", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765234/shadcn_xvjz01.png" },
    { name: "CSS3", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/mongodb_msjbae.svg" },
    { name: "Angular", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/FastAPI_prcozs.png" },
  ]
  
  const techStack2 = [
    { name: ".NET", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/react_fxopt7.png" },
    { name: "Python", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/python_gtxoax.webp" },
    { name: "C#", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/mongodb_msjbae.svg" },
    { name: "MySQL", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/mongodb_msjbae.svg" },
    { name: "MSSQL", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/mongodb_msjbae.svg" },
    { name: "Git", iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764943/gitlogo_ozinof.png" },
  ]

  const { theme: currentTheme, setTheme: setCurrentTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 140)
  })

  const [displayTab, setDisplayTab] = useState("info")

  const experiences = [
    {
      title: "Event Management System",
      company: "Superior University - Final Year Project",
      duration: "JAN 2025 - JUN 2025",
      description: "Developed a web platform to streamline university event management with online registration and payment integration. Implemented secure ticket generation and a media gallery.",
    },
    {
      title: "Eye-Tracking Mouse Cursor",
      company: "PBL Competition Winner",
      duration: "JULY 2024 - AUG 2024",
      description: "Won 1st place for developing a Python application using OpenCV and MediaPipe for real-time eye movement tracking to control mouse cursor with blink detection.",
    },
    {
      title: "Redstore E-commerce",
      company: "Academic Project",
      duration: "MAY 2024 - JUNE 2024",
      description: "Enhanced e-commerce frontend with full CRUD functionality using PHP, MySQL database integration, and secure user authentication.",
    },
  ]

  const certifications = [
    {
      title: "Advanced Diploma in Database Systems",
      issuer: "Alison",
      imageUrl: "/images/upenn1.jpg",
    },
    {
      title: "Scrum Fundamentals Certified",
      issuer: "SCRUMstudy - Fourth Edition",
      imageUrl: "/images/upenn.jpg",
    },
  ]

  return (
    <div className={styles.main}>
      <div
        className={cn(
          "z-[-1]",
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "[opacity:0.25]",
          "transition-colors duration-400",
        )}
      />
      <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--bgColor)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[var(--bgColor)] transition-colors duration-400"></div>

      <div className={styles.detailsHolder}>
        <div className={styles.heroSection}>
          <motion.div
            style={{
              transition: "all 0.1s ease",
              zIndex: 10,
              maxWidth: 650,
              width: "100%",
              borderRadius: "0px 0px 10px 10px",
            }}
            animate={isScrolled ? "scrolled" : "normal"}
            variants={{
              normal: { position: "static" },
              scrolled: { top: 0, position: "fixed", height: 60, backdropFilter: "blur(10px)" },
            }}
          >
            <motion.div className="relative h-[100%] w-[100%] flex items-center justify-end px-[15px]">
              <motion.img
                src="/ahmad-taj-profile.jpg"
                alt="Profile photo of Ahmad Taj"
                initial={{ height: 200, width: 200, borderRadius: 9999, margin: "0px auto", position: "static" }}
                animate={isScrolled ? "scrolled" : "normal"}
                variants={{
                  normal: { height: 200, width: 200, borderRadius: 9999 },
                  scrolled: { height: 40, width: 40, borderRadius: 9999, position: "absolute", top: 10, left: 10 },
                }}
                whileHover={{ boxShadow: "0 0 30px 2px rgba(255, 255, 255, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ objectFit: "cover", transition: "box-shadow 0.1s" }}
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center gap-[2px]">
            <h1 className="font-mono font-semibold leading-10 text-3xl">Ahmad Taj</h1>
            <p className={styles.SWEpara}>Software Engineer & Web Developer</p>
          </div>

          <div className={styles.socialsDiv}>
            <Link href="https://github.com/Ahmadtaj" target="_blank">
              <div className={styles.socialsItem}>
                <Github size={15} color="white" />
                <p>Github</p>
              </div>
            </Link>

            <Link href="https://pk.linkedin.com/in/Ahmad-Taj" target="_blank">
              <div className={styles.socialsItem}>
                <Linkedin size={15} color="white" />
                <p>LinkedIn</p>
              </div>
            </Link>

            <Link href="mailto:ahmadtaj905@outlook.com" target="_blank">
              <div className={styles.socialsItem}>
                <Mail size={15} color="white" />
                <p>Mail</p>
              </div>
            </Link>

            <Link href="tel:+923279445078" target="_blank">
              <div className={styles.socialsItem}>
                <Phone size={15} color="white" />
                <p>Phone</p>
              </div>
            </Link>

            <Link href="/resume" target="_blank" download>
              <div className={styles.socialsItem}>
                <FileText size={15} color="white" />
                <p>Resume</p>
              </div>
            </Link>

            <button
              type="button"
              className={styles.socialsItem}
              onClick={() => setCurrentTheme(currentTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
            >
              {currentTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              <p>Theme</p>
            </button>
          </div>
        </div>

        <div className={styles.bio}>
          <p className="font-mono tracking-tighter underline leading-7 font-light text-2xl flex items-center gap-2">
            <MapPin size={20} />
            Lahore, Pakistan
          </p>
        </div>

        <div className={styles.tabsHolder}>
          <div
            className={`${styles.tabItem} ${displayTab == "info" && styles.tabItemActive}`}
            onClick={() => setDisplayTab("info")}
          >
            Info
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "experience" && styles.tabItemActive}`}
            onClick={() => setDisplayTab("experience")}
          >
            Experience
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "certifications" && styles.tabItemActive}`}
            onClick={() => setDisplayTab("certifications")}
          >
            Certifications
            <div className={styles.hoverThing} />
          </div>
        </div>

        {displayTab == "info" && (
          <>
            {/* About Me Section */}
            <div className={styles.aboutSection}>
              <h2>About Me</h2>
              <p>
                I am an aspiring software engineer passionate about learning and growing in the world of programming and web development. With expertise spanning frontend technologies like React and Next.js, backend development with .NET and PHP, and database management, I bring a full-stack perspective to every project.
              </p>
              <p>
                I'm a quick learner, able to adapt to new technologies and concepts with ease. My dedication to coding, curiosity for innovation, and ability to work well in collaborative environments drive me to contribute positively to any team. Currently pursuing my Associate Degree in Computer Science at Superior University, expected graduation May 2025.
              </p>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <p>Languages</p>
                  <p>English, Urdu</p>
                </div>
                <div className={styles.statItem}>
                  <p>Experience</p>
                  <p>1+ Years</p>
                </div>
                <div className={styles.statItem}>
                  <p>Education</p>
                  <p>ADP CS</p>
                </div>
                <div className={styles.statItem}>
                  <p>Certifications</p>
                  <p>2</p>
                </div>
              </div>
            </div>

            <div className={styles.projectsSection}>
              <h1 className="font-mono font-semibold underline leading-10 text-3xl">Projects</h1>

              <div className={styles.projectsHolder}>
                {projectDisplayList.map((project, index) => (
                  <div key={index} className="flex flex-col gap-[10px]">
                    <div onClick={() => openProjectModal(project.name)} style={{ cursor: "pointer" }}>
                      <ProjectCard projectDetails={project} />
                    </div>
                    {index < projectDisplayList.length - 1 && (
                      <div className="bg-[var(--fgColor)] w-[90%] opacity-[0.4] font-semibold h-0.5 mx-6 my-0"></div>
                    )}
                  </div>
                ))}
                <div
                  onClick={() => {
                    if (showMoreProject == "less") {
                      setProjectDisplayList(projectsList)
                      setShowMoreProject("more")
                    } else {
                      setProjectDisplayList(projectsList.slice(0, 3))
                      setShowMoreProject("less")
                    }
                  }}
                  className={styles.showMore}
                >
                  {showMoreProject == "less" && (
                    <>
                      Show More <ChevronRight size={20} />
                    </>
                  )}
                  {showMoreProject == "more" && (
                    <>
                      <ChevronLeft size={20} />
                      Show less
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.techStack}>
              <h1 className="font-mono font-semibold text-4xl">My Tech-Stack</h1>

              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:35s]">
                  {techStack1.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={20} width={20} unoptimized />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:35s]">
                  {techStack2.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={20} width={20} unoptimized />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bgColor)]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bgColor)]"></div>
              </div>
            </div>
          </>
        )}

        {displayTab == "experience" && (
          <div className="mt-[30px] w-full mx-auto max-w-[1100px] px-4 sm:px-6">
            <h2 className="text-[22px] font-semibold mb-6 font-mono">Experience & Projects</h2>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="rounded-lg border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-mono font-bold text-lg">{exp.title}</h3>
                      <p className="text-sm opacity-70">{exp.company}</p>
                    </div>
                    <span className="text-xs opacity-60 font-mono">{exp.duration}</span>
                  </div>
                  <p className="opacity-85 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-[22px] font-semibold mt-12 mb-6 font-mono">Education</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 p-6 bg-white/5">
                <h3 className="font-mono font-bold text-lg">Associate Degree in Computer Science (ADP CS)</h3>
                <p className="text-sm opacity-70">Superior University, Lahore</p>
                <p className="text-xs opacity-60 font-mono mt-1">SEP 2023 - MAY 2025</p>
              </div>
              <div className="rounded-lg border border-white/10 p-6 bg-white/5">
                <h3 className="font-mono font-bold text-lg">Intermediate in Computer Science (ICS)</h3>
                <p className="text-sm opacity-70">Fazaia Intermediate College, Lahore</p>
                <p className="text-xs opacity-60 font-mono mt-1">SEP 2021 - AUG 2023</p>
              </div>
            </div>
          </div>
        )}

        {displayTab == "certifications" && (
          <div className="mt-[30px] w-full mx-auto max-w-[1100px]">
            <h2 className="text-[22px] font-semibold mb-6 font-mono">Certifications & Achievements</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((c, i) => (
                <div key={i} className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-8 text-center">
                    <h3 className="font-mono font-bold text-base">{c.title}</h3>
                    <p className="opacity-70 text-sm mt-2">{c.issuer}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-8 text-center">
                  <h3 className="font-mono font-bold text-base">1st Place PBL Competition</h3>
                  <p className="opacity-70 text-sm mt-2">Eye-Tracking Mouse Cursor Project</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.pageFooter}>
          <Link href="/AhmadTajResume.pdf" download>
            <p className={`flex items-center gap-[5px] underline font-mono font-bold text-2xl leading-[0.55rem] ${styles.resumeBtn}`}>
              Resume <ArrowUpRight className="w-auto h-[26px]" size={16} />
            </p>
          </Link>
          <p className="text-center opacity-[0.7] max-w-[580px] font-mono font-semibold text-base tracking-tight">
            Built by Ahmad Taj | Last Updated: January 17, 2026.
          </p>
        </div>

        {isModalOpen && selectedProject && (
          <ProjectModal
            isOpen={isModalOpen}
            onClose={closeProjectModal}
            projectName={selectedProject}
            images={getProjectData(selectedProject)?.images || []}
            description={getProjectData(selectedProject)?.fullDescription || ""}
            techStack={projectsList.find(p => p.name === selectedProject)?.techStack || []}
          />
        )}
      </div>
    </div>
  )
}












