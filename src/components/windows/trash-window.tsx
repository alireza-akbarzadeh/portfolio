import { WindowWrapper } from '../window-wrapper'

export function TrashWindow() {
  return (
    <WindowWrapper
      windowType="trash"
      title="Archive"
      defaultWidth={800}
      defaultHeight={600}
      minWidth={600}
      minHeight={500}
    >
      <div className="h-full bg-white p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Trash</h1>
          <p className="text-gray-600">Archive content coming soon...</p>
        </div>
      </div>
    </WindowWrapper>
  )
}
