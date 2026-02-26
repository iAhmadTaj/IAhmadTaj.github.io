"use client"
import styles from "./root.module.css"
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
import { useState, useEffect } from "react"
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
      fullDescription: `The Eye-Controlled Mouse Cursor System is an innovative human-computer interaction project that enables users to control the mouse cursor using only their eye movements. This system leverages real-time computer vision techniques to translate eye movement and blinking into seamless cursor movement and mouse clicks.

Using a webcam, the application detects facial landmarks and tracks eye positions with high precision. Cursor movement is controlled by eye direction, while intentional blinking is used to trigger mouse click actions. This project demonstrates how assistive technology can improve accessibility for individuals with physical limitations and explores the future of touchless interaction.

Key Features: Real-time mouse cursor movement controlled by eye direction, blink-based mouse click detection, webcam-based face and eye tracking, user-friendly GUI, and smooth responsive cursor control.`,
    },
    "RedStore": {
      images: [
        "/RedStore/LoginPage.png",
        "/RedStore/Admin.png",
        "/RedStore/Products.png",
        "/RedStore/Cart.png",
        "/RedStore/Main.png",
      ],
      fullDescription: `RedStore is a dynamic e-commerce web application focused on selling sportswear and tech products. The project uses a pre-designed frontend template, which was integrated with a custom backend developed in PHP to add full e-commerce functionality.

I implemented complete CRUD operations to manage products, users, and customer reviews. Product data is fetched dynamically from the database, and the shopping cart system allows users to add, remove, and manage items efficiently. The system also includes user authentication with a separate admin panel for managing products, users, and reviews.

The application was developed and tested locally using XAMPP, with data stored in a MySQL database.`,
    },
    "Toytown": {
      images: [
        "/ToyTown/login.png",
        "/ToyTown/Products.png",
        "/ToyTown/complete.png",
      ],
      fullDescription: `ToyTown is a responsive front-end focused e-commerce website designed for selling toys through an engaging and user-friendly interface. The project combines modern frontend design with essential backend functionality to simulate a real-world online shopping experience.

The frontend was developed using HTML, CSS, and JavaScript, ensuring responsiveness across different screen sizes. The platform includes dynamic product listings, a dedicated product video section, and a customer review section to enhance user engagement and product visibility.

On the backend, PHP was used to implement CRUD operations for managing products and users. Data is stored and handled using a MySQL database, with the project developed and tested locally using XAMPP.`,
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
      work: "Final Year Project",
      status: "Active",
      techStack: ["Next.js", ".NET", "MSSQL", "Azure DevOps"],
    },
    {
      name: "Eye-Tracking Mouse Cursor",
      imageUrl: "/Eye-Tracking Mouse Cursor/Eye Tracking Mouse Cursor 3.png",
      description:
        "Won 1st place in university PBL competition. Python application using OpenCV and MediaPipe for real-time eye movement tracking to control mouse cursor and perform clicks via blink detection.",
      work: "PBL Project",
      status: "Active",
      techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    },
    {
      name: "RedStore",
      imageUrl: "/RedStore/Database.png",
      description: "A dynamic e-commerce website for sportswear and tech products featuring CRUD-based product management, user authentication, and a fully functional shopping cart. Includes an admin dashboard for managing products, users, and reviews.",
      work: "Solo Project",
      status: "Active",
      techStack: ["PHP", "MySQL", "XAMPP", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "Toytown",
      imageUrl: "/ToyTown/hero.png",
      description: "A responsive e-commerce website for selling toys, featuring dynamic product listings, user reviews, and video sections. Includes PHP-based CRUD operations for managing users and products.",
      work: "Solo Project",
      status: "Active",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    },
  ]

  const [projectDisplayList, setProjectDisplayList] = useState(projectsList.slice(0, 3))
  const [showMoreProject, setShowMoreProject] = useState(false)

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

  const techStack1 = [
    { name: "React.js",   iconUrl: DEVICON + "/react/react-original.svg" },
    { name: "Next.js",    iconUrl: DEVICON + "/nextjs/nextjs-original.svg" },
    { name: "JavaScript", iconUrl: DEVICON + "/javascript/javascript-original.svg" },
    { name: "HTML5",      iconUrl: DEVICON + "/html5/html5-original.svg" },
    { name: "CSS3",       iconUrl: DEVICON + "/css3/css3-original.svg" },
    { name: "Angular",    iconUrl: DEVICON + "/angularjs/angularjs-original.svg" },
  ]

  const techStack2 = [
    { name: ".NET",   iconUrl: DEVICON + "/dotnetcore/dotnetcore-original.svg" },
    { name: "Python", iconUrl: DEVICON + "/python/python-original.svg" },
    { name: "C#",     iconUrl: DEVICON + "/csharp/csharp-original.svg" },
    { name: "MySQL",  iconUrl: DEVICON + "/mysql/mysql-original.svg" },
    { name: "MSSQL",  iconUrl: DEVICON + "/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "Git",    iconUrl: DEVICON + "/git/git-original.svg" },
  ]

  const { theme: currentTheme, setTheme: setCurrentTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 140)
  })

  const [displayTab, setDisplayTab] = useState("info")

  const internships = [
    {
      title: "QA & Operations Intern",
      company: "Outsourcing Solutions  Onsite, Lahore",
      duration: "JAN 2025 - MAR 2025",
      description:
        "Started in the Business Development team, gaining insight into client requirements and project scoping. Quickly transitioned to a Quality Assurance (QA) role, where I performed functional testing, identified software bugs, and validated features to ensure high-quality deliverables.",
    },
    {
      title: "Software Engineer Intern",
      company: "PHD Solutions",
      duration: "MAR 2025 - MAY 2025",
      description:
        "Actively contributed to the full Software Development Lifecycle (SDLC), engaging in core development activities and managing version control for team projects. Collaborated across multiple teams to support company initiatives and assisted in client engagement, ensuring technical solutions met business requirements.",
    },
  ]

  const certifications = [
    {
      title: "Advanced Diploma in Database Systems",
      issuer: "Alison",
    },
    {
      title: "Scrum Fundamentals Certified",
      issuer: "SCRUMstudy - Fourth Edition",
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
                suppressHydrationWarning
                style={{ objectFit: "cover", transition: "box-shadow 0.1s" }}
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center gap-[2px]">
            <h1 className="font-mono font-semibold leading-10 text-3xl">Ahmad Taj</h1>
            <p className={styles.SWEpara}>Software Engineer & Web Developer</p>
          </div>

          <div className={styles.socialsDiv}>
            <Link href="https://github.com/iAhmadtaj" target="_blank">
              <div className={styles.socialsItem}>
                <Github size={15} color="white" />
                <p>Github</p>
              </div>
            </Link>

            <Link href="https://www.linkedin.com/in/ahmad-taj-824162283/" target="_blank">
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
              {!mounted || currentTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              <p>Theme</p>
            </button>
          </div>
        </div>

        <div className={styles.bio}>
          <p className="font-mono tracking-tighter underline leading-7 font-light text-2xl flex items-center justify-center">
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
          <div className={styles.tabContent}>
            <div className={styles.aboutSection}>
              <h2>About Me</h2>
              <p>
                I am Ahmad Taj, a software engineer based in Lahore, Pakistan. I build full-stack web applications with a focus on clean architecture and practical results. My stack covers React, Next.js, and TypeScript on the frontend, paired with .NET and PHP backends, and SQL databases on the data layer.
              </p>
              <p>
                I graduated with an ADP in Computer Science from Superior University (CGPA 3.88) and am currently furthering my degree with a BS CS at the University of Education, Lahore. I have hands-on experience through two internships and competition projects, including a 1st-place win in a university PBL competition. I work well in teams, pick up new tools quickly, and care about shipping things that actually work.
              </p>
              <p>
                Whether leading a project or collaborating in a team, I focus on shipping code that works, scales, and solves real-world problems.
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
                  <p>BS CS</p>
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
                    if (!showMoreProject) {
                      setProjectDisplayList(projectsList)
                      setShowMoreProject(true)
                    } else {
                      setProjectDisplayList(projectsList.slice(0, 3))
                      setShowMoreProject(false)
                    }
                  }}
                  className={styles.showMore}
                >
                  {!showMoreProject && (
                    <>
                      Show More <ChevronRight size={20} />
                    </>
                  )}
                  {showMoreProject && (
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
                      <img alt={tech.name} src={tech.iconUrl} height={24} width={24} className="rounded-sm" />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:35s]">
                  {techStack2.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <img alt={tech.name} src={tech.iconUrl} height={24} width={24} className="rounded-sm" />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bgColor)]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bgColor)]"></div>
              </div>
            </div>
          </div>
        )}

        {displayTab == "experience" && (
          <div className={"mt-[30px] w-full mx-auto max-w-[1100px] px-4 sm:px-6 " + styles.tabContent}>

            <h2 className="text-[22px] font-semibold mb-6 font-mono">Internships</h2>
            <div className="space-y-6 mb-12">
              {internships.map((exp, i) => (
                <div key={i} className="rounded-lg border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-mono font-bold text-lg">{exp.title}</h3>
                      <p className="text-sm opacity-70">{exp.company}</p>
                    </div>
                    <span className="text-xs opacity-60 font-mono whitespace-nowrap ml-4">{exp.duration}</span>
                  </div>
                  <p className="opacity-85 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-[22px] font-semibold mb-6 font-mono">Education</h2>
            <div className="space-y-4 mb-12">
              <div className="rounded-lg border border-white/10 p-6 bg-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono font-bold text-lg">BS Computer Science (Post ADP)</h3>
                    <p className="text-sm opacity-70">University of Education  Township Campus, Lahore</p>
                  </div>
                  <span className="text-xs opacity-60 font-mono whitespace-nowrap ml-4">SEP 2025 - APR 2027</span>
                </div>
                <p className="text-xs mt-2 inline-block px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">Currently Enrolled</p>
              </div>
              <div className="rounded-lg border border-white/10 p-6 bg-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono font-bold text-lg">Associate Degree in Computer Science (ADP CS)</h3>
                    <p className="text-sm opacity-70">Superior University, Lahore</p>
                  </div>
                  <span className="text-xs opacity-60 font-mono whitespace-nowrap ml-4">SEP 2023 - MAY 2025</span>
                </div>
                <p className="text-xs mt-2 opacity-70 font-mono">CGPA: 3.88 / 4.0</p>
              </div>
              <div className="rounded-lg border border-white/10 p-6 bg-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono font-bold text-lg">Intermediate in Computer Science (ICS)</h3>
                    <p className="text-sm opacity-70">Fazaia Intermediate College, Lahore</p>
                  </div>
                  <span className="text-xs opacity-60 font-mono whitespace-nowrap ml-4">SEP 2021 - AUG 2023</span>
                </div>
                <p className="text-xs mt-2 opacity-70 font-mono">Grade: A</p>
              </div>
            </div>

            <h2 className="text-[22px] font-semibold mb-6 font-mono">Projects</h2>
            <div className="space-y-4">
              {projectsList.map((project, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition cursor-pointer"
                  onClick={() => { openProjectModal(project.name); setDisplayTab("info") }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-mono font-bold text-lg">{project.name}</h3>
                    <span className="text-xs opacity-60 font-mono ml-4 whitespace-nowrap">{project.work}</span>
                  </div>
                  <p className="opacity-75 text-sm leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, ti) => (
                      <span key={ti} className="text-xs px-2 py-1 rounded-md bg-white/10 opacity-80 font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {displayTab == "certifications" && (
          <div className={"mt-[30px] w-full mx-auto max-w-[1100px] " + styles.tabContent}>
            <h2 className="text-[22px] font-semibold mb-6 font-mono">Certifications &amp; Achievements</h2>
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
            <p className={"flex items-center gap-[5px] underline font-mono font-bold text-2xl leading-[0.55rem] " + styles.resumeBtn}>
              Resume <ArrowUpRight className="w-auto h-[26px]" size={16} />
            </p>
          </Link>
          <p className="text-center opacity-[0.7] max-w-[580px] font-mono font-semibold text-base tracking-tight">
            Built by Ahmad Taj | Last Updated: February 25, 2026.
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
