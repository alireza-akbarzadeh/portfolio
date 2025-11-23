import { useRef, useState, useEffect } from 'react'
import { type WindowType, setWindowPosition, setWindowSize } from '@/store'

interface UseWindowDragResizeProps {
  windowType: WindowType
  isMaximized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  defaultWidth: number
  defaultHeight: number
  minWidth: number
  minHeight: number
  onFocus: () => void
}

export function useWindowDragResize({
  windowType,
  isMaximized,
  position,
  size,
  defaultWidth,
  defaultHeight,
  minWidth,
  minHeight,
  onFocus,
}: UseWindowDragResizeProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState('')

  const dragStartRef = useRef({ x: 0, y: 0, windowX: 0, windowY: 0 })
  const resizeStartRef = useRef({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    startX: 0,
    startY: 0,
  })

  // Drag handler
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return
    if ((e.target as HTMLElement).closest('button')) return

    setIsDragging(true)
    onFocus()
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      windowX: position?.x || 100,
      windowY: position?.y || 100,
    }
  }

  // Resize handler
  const handleResizeMouseDown = (e: React.MouseEvent, direction: string) => {
    if (isMaximized) return
    e.stopPropagation()

    setIsResizing(true)
    setResizeDirection(direction)
    onFocus()
    resizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: size?.width || defaultWidth,
      height: size?.height || defaultHeight,
      startX: position?.x || 100,
      startY: position?.y || 100,
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - dragStartRef.current.x
        const deltaY = e.clientY - dragStartRef.current.y
        const newX = Math.max(0, dragStartRef.current.windowX + deltaX)
        const newY = Math.max(0, dragStartRef.current.windowY + deltaY)

        // Use GSAP for smooth dragging animation
        setWindowPosition(windowType, newX, newY)
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStartRef.current.x
        const deltaY = e.clientY - resizeStartRef.current.y

        let newWidth = resizeStartRef.current.width
        let newHeight = resizeStartRef.current.height
        let newX = resizeStartRef.current.startX
        let newY = resizeStartRef.current.startY

        if (resizeDirection.includes('e')) {
          newWidth = Math.max(minWidth, resizeStartRef.current.width + deltaX)
        }
        if (resizeDirection.includes('w')) {
          newWidth = Math.max(minWidth, resizeStartRef.current.width - deltaX)
          if (newWidth > minWidth) {
            newX = resizeStartRef.current.startX + deltaX
          }
        }
        if (resizeDirection.includes('s')) {
          newHeight = Math.max(
            minHeight,
            resizeStartRef.current.height + deltaY,
          )
        }
        if (resizeDirection.includes('n')) {
          newHeight = Math.max(
            minHeight,
            resizeStartRef.current.height - deltaY,
          )
          if (newHeight > minHeight) {
            newY = resizeStartRef.current.startY + deltaY
          }
        }

        setWindowSize(windowType, newWidth, newHeight)
        if (
          newX !== resizeStartRef.current.startX ||
          newY !== resizeStartRef.current.startY
        ) {
          setWindowPosition(windowType, newX, newY)
        }
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
      setResizeDirection('')
    }

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [
    isDragging,
    isResizing,
    resizeDirection,
    windowType,
    minWidth,
    minHeight,
    position,
    size,
    defaultWidth,
    defaultHeight,
  ])

  return {
    isDragging,
    isResizing,
    handleMouseDown,
    handleResizeMouseDown,
  }
}
