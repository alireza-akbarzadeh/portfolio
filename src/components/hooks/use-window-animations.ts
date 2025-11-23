import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface UseWindowAnimationsProps {
  isOpen: boolean
  isMinimized: boolean
  isMaximized: boolean
  isDragging: boolean
}

export function useWindowAnimations({
  isOpen,
  isMinimized,
  isMaximized,
  isDragging,
}: UseWindowAnimationsProps) {
  const windowRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Opening animation - macOS-style scale and fade
  useGSAP(() => {
    if (isOpen && windowRef.current) {
      gsap.fromTo(
        windowRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 20,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'back.out(1.4)',
        },
      )
    }
  }, [isOpen])

  // Minimize animation - macOS genie effect (scale down with elastic)
  useEffect(() => {
    if (isMinimized && windowRef.current) {
      const tl = gsap.timeline()

      // Wavy squeeze effect
      tl.to(windowRef.current, {
        scaleY: 0.8,
        scaleX: 1.1,
        duration: 0.15,
        ease: 'power2.inOut',
      })
        .to(windowRef.current, {
          scaleY: 1.2,
          scaleX: 0.9,
          duration: 0.15,
          ease: 'power2.inOut',
        })
        .to(windowRef.current, {
          scale: 0.1,
          y: window.innerHeight - 100,
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in',
        })
    }
  }, [isMinimized])

  // Maximize/Restore animation
  useEffect(() => {
    if (windowRef.current && contentRef.current) {
      if (isMaximized) {
        gsap.to(windowRef.current, {
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }
  }, [isMaximized])

  // Drag animation - smooth movement
  useEffect(() => {
    if (isDragging && windowRef.current) {
      // Add slight tilt when dragging
      gsap.to(windowRef.current, {
        rotationZ: 0.5,
        scale: 1.02,
        duration: 0.2,
        ease: 'power2.out',
      })
    } else if (!isDragging && windowRef.current) {
      // Reset tilt when released
      gsap.to(windowRef.current, {
        rotationZ: 0,
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)',
      })
    }
  }, [isDragging])

  return { windowRef, contentRef }
}
