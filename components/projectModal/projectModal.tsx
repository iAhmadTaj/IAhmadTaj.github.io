'use client'

import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import styles from './projectModal.module.css'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  projectName: string
  images: string[]
  description: string
  techStack: string[]
}

export default function ProjectModal({
  isOpen,
  onClose,
  projectName,
  images,
  description,
  techStack,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  
  const isLastImage = currentImageIndex === images.length - 1
  const isTallImage = currentImageIndex === images.length - 1
  const isVideo = images[currentImageIndex]?.endsWith('.mp4') || images[currentImageIndex]?.endsWith('.webm')

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {!isZoomed ? (
              <div className={styles.content}>
                <div className={styles.gallerySection}>
                  <div className={styles.imageContainer}>
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={styles.imageWrapper}
                    >
                      {isVideo ? (
                        <video
                          src={images[currentImageIndex]}
                          controls
                          className={styles.video}
                          poster={images[0]}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={images[currentImageIndex]}
                          alt={`${projectName} - image ${currentImageIndex + 1}`}
                          fill
                          objectFit="contain"
                          className={styles.image}
                          priority={currentImageIndex === 0}
                        />
                      )}
                    </motion.div>

                    {!isVideo && isTallImage && (
                      <button
                        className={styles.zoomButton}
                        onClick={() => setIsZoomed(true)}
                        title="Expand for detailed view"
                      >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                      </button>
                    )}
                  </div>

                  {images.length > 1 && (
                    <div className={styles.navigationControls}>
                      <button
                        onClick={prevImage}
                        className={styles.navButton}
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className={styles.imageCounter}>
                        {currentImageIndex + 1} / {images.length}
                      </span>
                      <button
                        onClick={nextImage}
                        className={styles.navButton}
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}

                  {images.length > 1 && (
                    <div className={styles.thumbnails}>
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          className={`${styles.thumbnail} ${
                            idx === currentImageIndex ? styles.activeThumbnail : ''
                          }`}
                          onClick={() => {
                            setCurrentImageIndex(idx)
                          }}
                          title={
                            img.endsWith('.mp4') || img.endsWith('.webm') ? 'Video demo' : ''
                          }
                        >
                          {img.endsWith('.mp4') || img.endsWith('.webm') ? (
                            <div className={styles.videoThumbnail}>
                              <Play size={24} fill="currentColor" />
                            </div>
                          ) : (
                            <Image
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              fill
                              objectFit="cover"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.detailsSection}>
                  <h2 className={styles.title}>{projectName}</h2>
                  <p className={styles.description}>{description}</p>

                  <div className={styles.techStackSection}>
                    <h3 className={styles.stackTitle}>Tech Stack</h3>
                    <div className={styles.stackContainer}>
                      {techStack.map((tech, idx) => (
                        <span key={idx} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.zoomedContainer}>
                <button
                  className={styles.closeZoomButton}
                  onClick={() => setIsZoomed(false)}
                  aria-label="Close zoom"
                >
                  <Minimize2 size={20} />
                  <span>Collapse</span>
                </button>

                <div className={styles.zoomedImageWrapper}>
                  <div className={styles.zoomedImageContainer}>
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${projectName} - zoomed view`}
                      fill
                      objectFit="contain"
                      className={styles.zoomedImage}
                      priority
                    />
                  </div>
                </div>

                <div className={styles.zoomScrollHint}>
                  <span>Scroll to view complete details</span>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}