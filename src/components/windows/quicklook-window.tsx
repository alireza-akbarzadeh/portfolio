import { WindowWrapper } from '../window-wrapper'
import { useStore } from '@tanstack/react-store'
import { appStore } from '@/store/app-store'
import { FileText, Music, Video, File } from 'lucide-react'

export function QuickLookWindow() {
  const windowState = useStore(appStore, (state) => state.windows.txtfile)
  const { item } = windowState.data || {}

  if (!item) {
    return (
      <WindowWrapper
        windowType="txtfile"
        title="Quick Look"
        defaultWidth={800}
        defaultHeight={600}
        minWidth={600}
        minHeight={400}
      >
        <div className="h-full bg-white flex items-center justify-center">
          <p className="text-gray-500">No file selected</p>
        </div>
      </WindowWrapper>
    )
  }

  const renderContent = () => {
    // Text files
    if (item.fileType === 'txt') {
      return (
        <div className="h-full bg-white overflow-auto">
          <div className="max-w-3xl mx-auto p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b">
              <FileText className="w-8 h-8 text-blue-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {item.name}
                </h2>
                {item.subtitle && (
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                )}
              </div>
            </div>

            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 rounded-lg object-cover mb-6"
              />
            )}

            {item.description && (
              <div className="space-y-4">
                {item.description.map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    }

    // Audio files
    if (item.fileType === 'audio' || item.fileType === 'mp3') {
      return (
        <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col items-center justify-center p-8">
          <Music className="w-24 h-24 text-purple-500 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.name}</h2>
          {item.audioUrl && (
            <audio controls className="w-full max-w-md">
              <source src={item.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )
    }

    // Video files
    if (item.fileType === 'video' || item.fileType === 'mp4') {
      return (
        <div className="h-full bg-black flex items-center justify-center p-4">
          {item.videoUrl ? (
            <video controls className="max-w-full max-h-full">
              <source src={item.videoUrl} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          ) : (
            <div className="text-center">
              <Video className="w-24 h-24 text-gray-400 mx-auto mb-4" />
              <p className="text-white text-xl">{item.name}</p>
            </div>
          )}
        </div>
      )
    }

    // Generic file preview
    return (
      <div className="h-full bg-gray-50 flex flex-col items-center justify-center p-8">
        <File className="w-24 h-24 text-gray-400 mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h2>
        <p className="text-gray-500">Type: {item.fileType}</p>
        {item.description && (
          <div className="mt-6 max-w-2xl">
            {item.description.map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-700 mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <WindowWrapper
      windowType="txtfile"
      title={item.name}
      defaultWidth={800}
      defaultHeight={600}
      minWidth={600}
      minHeight={400}
    >
      {renderContent()}
    </WindowWrapper>
  )
}
