import { WindowWrapper } from '../window-wrapper'

export function PhotosWindow() {
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
          <p className="text-gray-600">Gallery content coming soon...</p>
        </div>
      </div>
    </WindowWrapper>
  )
}
