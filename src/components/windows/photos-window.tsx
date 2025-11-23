import { WindowWrapper } from '../window-wrapper'
import { useStore } from '@tanstack/react-store'
import { appStore } from '@/store/app-store'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, X } from 'lucide-react'

export function PhotosWindow() {
  const windowState = useStore(appStore, (state) => state.windows.photos)
  const { imageUrl, name, allImages } = windowState.data || {}

  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoom, setZoom] = useState(1)

  // If we have multiple images, use them; otherwise just show the single image
  const images = allImages || (imageUrl ? [{ url: imageUrl, name }] : [])
  const currentImage = images[currentIndex] || images[0]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
    setZoom(1)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    setZoom(1)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleResetZoom = () => {
    setZoom(1)
  }

  if (!currentImage) {
    return (
      <WindowWrapper
        windowType="photos"
        title="Gallery"
        defaultWidth={1000}
        defaultHeight={700}
        minWidth={800}
        minHeight={600}
      >
        <div className="h-full bg-white p-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
            <p className="text-gray-600">No image selected</p>
          </div>
        </div>
      </WindowWrapper>
    )
  }

  return (
    <WindowWrapper
      windowType="photos"
      title={currentImage.name || 'Gallery'}
      defaultWidth={1000}
      defaultHeight={700}
      minWidth={800}
      minHeight={600}
    >
      <div className="h-full bg-gray-900 flex flex-col">
        {/* Toolbar */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-2">
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="p-2 hover:bg-gray-700 rounded transition-colors"
                  title="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <span className="text-white text-sm">
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 hover:bg-gray-700 rounded transition-colors"
                  title="Next"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title="Zoom Out"
              disabled={zoom <= 0.5}
            >
              <ZoomOut className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-3 py-1 hover:bg-gray-700 rounded transition-colors"
            >
              <span className="text-white text-sm">
                {Math.round(zoom * 100)}%
              </span>
            </button>
            <button
              onClick={handleZoomIn}
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title="Zoom In"
              disabled={zoom >= 3}
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Image Viewer */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-4">
          <img
            src={currentImage.url || currentImage.imageUrl}
            alt={currentImage.name}
            className="max-w-full max-h-full object-contain transition-transform duration-200"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>

        {/* Image Info */}
        <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
          <p className="text-white text-sm truncate">{currentImage.name}</p>
        </div>
      </div>
    </WindowWrapper>
  )
}
