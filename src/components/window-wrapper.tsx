import {
  useWindow,
  type WindowType,
  minimizeWindow,
  maximizeWindow,
  restoreWindow,
  setWindowPosition,
  setWindowSize,
} from '@/store'
import { useEffect } from 'react'
import { useWindowDragResize } from './hooks/use-window-drag-resize'
import { useWindowAnimations } from './hooks/use-window-animations'

interface WindowWrapperProps {
  windowType: WindowType
  title: string
  children: React.ReactNode
  className?: string
  defaultWidth?: number
  defaultHeight?: number
  minWidth?: number
  minHeight?: number
}

export function WindowWrapper({
  windowType,
  title,
  children,
  className = '',
  defaultWidth = 800,
  defaultHeight = 600,
  minWidth = 400,
  minHeight = 300,
}: WindowWrapperProps) {
  const window = useWindow(windowType)

  const isMaximized = window.isMaximized
  const position = window.position || { x: 100, y: 100 }
  const size = window.size || { width: defaultWidth, height: defaultHeight }

  // Use custom hooks for drag/resize and animations
  const { isDragging, isResizing, handleMouseDown, handleResizeMouseDown } =
    useWindowDragResize({
      windowType,
      isMaximized,
      position,
      size,
      defaultWidth,
      defaultHeight,
      minWidth,
      minHeight,
      onFocus: window.focus,
    })

  const { windowRef, contentRef } = useWindowAnimations({
    isOpen: window.isOpen,
    isMinimized: window.isMinimized,
    isMaximized,
    isDragging,
  })

  // Initialize position and size on first open
  useEffect(() => {
    if (
      window.isOpen &&
      window.position &&
      window.position.x === 100 &&
      window.position.y === 100
    ) {
      // Center window on screen
      const x = Math.max(50, (globalThis.innerWidth - defaultWidth) / 2)
      const y = Math.max(50, (globalThis.innerHeight - defaultHeight) / 2)
      setWindowPosition(windowType, x, y)
      setWindowSize(windowType, defaultWidth, defaultHeight)
    }
  }, [window.isOpen, windowType, defaultWidth, defaultHeight])

  if (!window.isOpen || window.isMinimized) return null

  const handleWindowClick = () => {
    window.focus()
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.close()
  }

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation()
    minimizeWindow(windowType)
  }

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isMaximized) {
      restoreWindow(windowType)
    } else {
      maximizeWindow(windowType)
    }
  }

  return (
    <div
      ref={windowRef}
      className={`fixed bg-white shadow-2xl transition-all flex flex-col ${
        isMaximized ? 'rounded-none' : 'rounded-xl overflow-hidden'
      } ${isDragging || isResizing ? 'transition-none' : 'transition-all duration-200'} ${className}`}
      style={{
        zIndex: window.zIndex,
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        width: isMaximized ? '100vw' : size.width,
        height: isMaximized ? '100vh' : size.height,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onClick={handleWindowClick}
    >
      {/* Resize Handles */}
      {!isMaximized && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-1 cursor-n-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, 'n')}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1 cursor-s-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, 's')}
          />
          <div
            className="absolute top-0 bottom-0 left-0 w-1 cursor-w-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, 'w')}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-1 cursor-e-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, 'e')}
          />
          <div
            className="absolute top-0 left-0 w-3 h-3 cursor-nw-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, 'nw')}
          />
          <div
            className="absolute top-0 right-0 w-3 h-3 cursor-ne-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, 'ne')}
          />
          <div
            className="absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, 'sw')}
          />
          <div
            className="absolute bottom-0 right-0 w-3 h-3 cursor-se-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, 'se')}
          />
        </>
      )}

      {/* Title Bar */}
      <div
        className="shrink-0 flex items-center justify-between px-4 py-3 bg-linear-to-b from-gray-100 to-gray-50 border-b border-gray-200 select-none relative z-10"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="flex items-center gap-2 relative z-20">
          <button
            className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors group relative"
            onClick={handleClose}
            aria-label="Close"
          >
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                className="text-[#4d0000]"
              >
                <path
                  d="M0.5 0.5L5.5 5.5M5.5 0.5L0.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <button
            className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#ffb300] transition-colors group relative"
            onClick={handleMinimize}
            aria-label="Minimize"
          >
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <svg
                width="6"
                height="1.5"
                viewBox="0 0 6 1.5"
                fill="none"
                className="text-[#995700]"
              >
                <path
                  d="M0.5 0.75H5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <button
            className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#1fb734] transition-colors group relative"
            onClick={handleMaximize}
            aria-label="Maximize"
          >
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                className="text-[#004d0a]"
              >
                <path
                  d="M1.5 3L3 4.5L4.5 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <h2 className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-700 pointer-events-none">
          {title}
        </h2>
        <div className="w-16" /> {/* Spacer for centering */}
      </div>
      <div ref={contentRef} className="flex-1 bg-white overflow-hidden">
        {children}
      </div>
    </div>
  )
}
