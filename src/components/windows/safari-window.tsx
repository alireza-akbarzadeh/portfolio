import { WindowWrapper } from '../window-wrapper'

export function SafariWindow() {
  return (
    <WindowWrapper
      windowType="safari"
      title="Articles"
      defaultWidth={900}
      defaultHeight={600}
      minWidth={700}
      minHeight={500}
    >
      <div className="h-full bg-white p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Browser</h1>
          <p className="text-gray-600">Articles content coming soon...</p>
        </div>
      </div>
    </WindowWrapper>
  )
}
