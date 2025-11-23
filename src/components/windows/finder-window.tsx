import { WindowWrapper } from '../window-wrapper'

export function FinderWindow() {
  return (
    <WindowWrapper
      windowType="finder"
      title="Portfolio"
      defaultWidth={900}
      defaultHeight={600}
      minWidth={700}
      minHeight={500}
    >
      <div className="h-full bg-white p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Finder</h1>
          <p className="text-gray-600">Portfolio content coming soon...</p>
        </div>
      </div>
    </WindowWrapper>
  )
}
