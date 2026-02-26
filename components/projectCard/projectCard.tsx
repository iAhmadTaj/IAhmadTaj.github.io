"use client"
import type { ProjectType } from "@/lib/types"
import styles from "./projectCard.module.css"
import { useState } from "react"
import { Button } from "../ui/button"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectCard({ projectDetails }: { projectDetails: ProjectType }) {
  const [showFooter, setShowFooter] = useState(true)
  return (
    <div className={styles.main}>
      <div className={styles.projectItem}>
        <div className={styles.imgContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={projectDetails.name}
            src={projectDetails.imageUrl || "/placeholder.svg"}
            loading="lazy"
            className="rounded-md object-cover w-full h-[150px]"
          />
          <div className={styles.p1}>{projectDetails.work}</div>
          <div className={projectDetails.status == "Active" ? styles.p2 : styles.devp2}>
            {projectDetails.status == "Active" ? (
              <div className={styles.activeDot} />
            ) : (
              <div className={styles.devDot} />
            )}
            {projectDetails.status}
          </div>
        </div>

        <p className="font-mono tracking-tight leading-[1.60rem] font-medium text-zinc-400">{projectDetails.description}</p>
      </div>
      <div className={`${styles.footerDiv} ${showFooter && styles.showFooter}`}>
        <div className="ml-auto flex items-center gap-2">
          {projectDetails.githubRepo && (
            <Link href={projectDetails.githubRepo} target="_blank" aria-label="Open GitHub repository">
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                <Github size={18} />
              </Button>
            </Link>
          )}
          {projectDetails.liveLink && (
            <Link href={projectDetails.liveLink} target="_blank" aria-label="Open live project">
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                <ArrowUpRight size={18} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
