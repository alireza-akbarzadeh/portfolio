import { WindowWrapper } from '../window-wrapper'
import { KeyboardIcon, CommandIcon } from 'lucide-react'
import { useState } from 'react'
import { useWindow } from '@/store'

interface Shortcut {
  id: string
  name: string
  keys: string[]
  description: string
  category: string
}

const shortcuts: Shortcut[] = [
  {
    id: 'spotlight',
    name: 'Spotlight Search',
    keys: ['Ctrl', 'Space'],
    description: 'Open command palette to search and navigate',
    category: 'Navigation',
  },
  {
    id: 'terminal',
    name: 'Terminal',
    keys: ['Ctrl', 'T'],
    description: 'Toggle terminal window',
    category: 'Windows',
  },
  {
    id: 'settings',
    name: 'Settings',
    keys: ['Ctrl', ','],
    description: 'Open settings window',
    category: 'System',
  },
  {
    id: 'close-window',
    name: 'Close Window',
    keys: ['Ctrl', 'W'],
    description: 'Close current window',
    category: 'Windows',
  },
  {
    id: 'minimize',
    name: 'Minimize',
    keys: ['Ctrl', 'M'],
    description: 'Minimize current window',
    category: 'Windows',
  },
]

export function SettingsWindow() {
  const [activeTab, setActiveTab] = useState<
    'shortcuts' | 'general' | 'appearance'
  >('shortcuts')
  const finderWindow = useWindow('finder')

  const categories = Array.from(new Set(shortcuts.map((s) => s.category)))

  // Only render settings if finder window data type is 'settings'
  if (!finderWindow.isOpen || finderWindow.data?.type !== 'settings') {
    return null
  }

  return (
    <WindowWrapper
      windowType="finder"
      title="Settings"
      defaultWidth={900}
      defaultHeight={600}
      minWidth={700}
      minHeight={500}
    >
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 border-r border-gray-200 p-4">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('shortcuts')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeTab === 'shortcuts'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <KeyboardIcon className="inline-block w-4 h-4 mr-2" />
              Keyboard Shortcuts
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeTab === 'general'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeTab === 'appearance'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Appearance
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'shortcuts' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Keyboard Shortcuts
              </h2>
              <p className="text-gray-600 mb-6">
                Customize keyboard shortcuts to navigate your portfolio faster
              </p>

              {categories.map((category) => (
                <div key={category} className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {shortcuts
                      .filter((s) => s.category === category)
                      .map((shortcut) => (
                        <div
                          key={shortcut.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              {shortcut.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {shortcut.description}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {shortcut.keys.map((key, idx) => (
                              <span key={idx}>
                                <kbd className="px-2.5 py-1.5 text-xs font-semibold text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm">
                                  {key}
                                </kbd>
                                {idx < shortcut.keys.length - 1 && (
                                  <span className="mx-1 text-gray-400">+</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <CommandIcon className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">Pro Tip</h4>
                    <p className="text-sm text-blue-700">
                      Use{' '}
                      <kbd className="px-1.5 py-0.5 text-xs bg-white border border-blue-300 rounded">
                        Ctrl
                      </kbd>{' '}
                      +{' '}
                      <kbd className="px-1.5 py-0.5 text-xs bg-white border border-blue-300 rounded">
                        Space
                      </kbd>{' '}
                      to quickly access any window or command
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'general' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                General Settings
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    General settings coming soon...
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Appearance
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Appearance settings coming soon...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </WindowWrapper>
  )
}
