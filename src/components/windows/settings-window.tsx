import { WindowWrapper } from '../window-wrapper'
import {
  Palette,
  Keyboard,
  Settings as SettingsIcon,
  Wifi,
  Volume2,
  Accessibility,
  Sun,
  Moon,
  Laptop,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useWindow } from '@/store'
import {
  settingsStore,
  updateSetting,
  type SettingsState,
} from '@/store/settings-store'
import { useTheme } from '../theme-provider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SettingsTab =
  | 'general'
  | 'appearance'
  | 'accessibility'
  | 'keyboard'
  | 'sound'
  | 'network'

export function SettingsWindow() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general')
  const settingsWindow = useWindow('settings')
  const [settings, setSettings] = useState<SettingsState>(settingsStore.state)
  const { theme, setTheme } = useTheme()

  // Subscribe to store changes
  useEffect(() => {
    const unsubscribe = settingsStore.subscribe(() => {
      setSettings(settingsStore.state)
    })
    return unsubscribe
  }, [])

  if (!settingsWindow.isOpen) {
    return null
  }

  const accentColors = [
    { name: 'blue', value: 'bg-blue-500' },
    { name: 'purple', value: 'bg-purple-500' },
    { name: 'pink', value: 'bg-pink-500' },
    { name: 'red', value: 'bg-red-500' },
    { name: 'orange', value: 'bg-orange-500' },
    { name: 'yellow', value: 'bg-yellow-500' },
    { name: 'green', value: 'bg-green-500' },
    { name: 'teal', value: 'bg-teal-500' },
  ]

  return (
    <WindowWrapper
      windowType="settings"
      title="System Preferences"
      defaultWidth={900}
      defaultHeight={650}
      minWidth={700}
      minHeight={500}
    >
      <div className="flex h-full bg-white dark:bg-gray-900">
        {/* Sidebar */}
        <div className="w-56 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('general')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                activeTab === 'general'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <SettingsIcon className="w-4 h-4" />
              General
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                activeTab === 'appearance'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Palette className="w-4 h-4" />
              Appearance
            </button>
            <button
              onClick={() => setActiveTab('accessibility')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                activeTab === 'accessibility'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Accessibility className="w-4 h-4" />
              Accessibility
            </button>
            <button
              onClick={() => setActiveTab('keyboard')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                activeTab === 'keyboard'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Keyboard className="w-4 h-4" />
              Keyboard
            </button>
            <button
              onClick={() => setActiveTab('sound')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                activeTab === 'sound'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              Sound
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                activeTab === 'network'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Wifi className="w-4 h-4" />
              Network
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {/* General Tab */}
          {activeTab === 'general' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                General
              </h2>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Default Browser
                  </label>
                  <Select
                    value={settings.defaultBrowser}
                    onValueChange={(value) =>
                      updateSetting('defaultBrowser', value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a browser" />
                    </SelectTrigger>
                    <SelectContent className="z-9999">
                      <SelectItem value="Safari">Safari</SelectItem>
                      <SelectItem value="Chrome">Chrome</SelectItem>
                      <SelectItem value="Firefox">Firefox</SelectItem>
                      <SelectItem value="Edge">Edge</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      Show recent items
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Display recently opened files and apps
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.showRecentItems}
                    onChange={(e) =>
                      updateSetting('showRecentItems', e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      Close windows when quitting
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Close all windows when application quits
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.closeWindowsOnQuit}
                    onChange={(e) =>
                      updateSetting('closeWindowsOnQuit', e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Appearance
              </h2>

              <div className="space-y-8">
                {/* Theme */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Appearance
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setTheme('light')}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        theme === 'light'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <Sun className="w-6 h-6" />
                      <span className="text-sm font-medium">Light</span>
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        theme === 'dark'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <Moon className="w-6 h-6" />
                      <span className="text-sm font-medium">Dark</span>
                    </button>
                    <button
                      onClick={() => setTheme('system')}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        theme === 'system'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <Laptop className="w-6 h-6" />
                      <span className="text-sm font-medium">Auto</span>
                    </button>
                  </div>
                </div>

                {/* Accent Color */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Accent Color
                  </label>
                  <div className="grid grid-cols-8 gap-3">
                    {accentColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() =>
                          updateSetting(
                            'accentColor',
                            color.name as typeof settings.accentColor,
                          )
                        }
                        className={`w-12 h-12 rounded-full ${color.value} transition-transform ${
                          settings.accentColor === color.name
                            ? 'ring-4 ring-offset-2 ring-gray-400 scale-110'
                            : 'hover:scale-105'
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        Reduce motion
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Minimize animations and transitions
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.reduceMotion}
                      onChange={(e) =>
                        updateSetting('reduceMotion', e.target.checked)
                      }
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        Reduce transparency
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Reduce blur and transparency effects
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.reduceTransparency}
                      onChange={(e) =>
                        updateSetting('reduceTransparency', e.target.checked)
                      }
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accessibility Tab */}
          {activeTab === 'accessibility' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Accessibility
              </h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      Increase contrast
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Improve visibility with higher contrast
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.increasedContrast}
                    onChange={(e) =>
                      updateSetting('increasedContrast', e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      Larger text
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Make all text easier to read
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.largerText}
                    onChange={(e) =>
                      updateSetting('largerText', e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Keyboard Tab */}
          {activeTab === 'keyboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Keyboard
              </h2>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Key Repeat Rate: {settings.keyRepeatRate}
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">Slow</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={settings.keyRepeatRate}
                      onChange={(e) =>
                        updateSetting('keyRepeatRate', Number(e.target.value))
                      }
                      className="flex-1"
                    />
                    <span className="text-xs text-gray-500">Fast</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Delay Until Repeat: {settings.delayUntilRepeat}
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">Short</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={settings.delayUntilRepeat}
                      onChange={(e) =>
                        updateSetting(
                          'delayUntilRepeat',
                          Number(e.target.value),
                        )
                      }
                      className="flex-1"
                    />
                    <span className="text-xs text-gray-500">Long</span>
                  </div>
                </div>

                {/* Keyboard Shortcuts Info */}
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                    Keyboard Shortcuts
                  </h4>
                  <div className="space-y-2 text-sm text-blue-700 dark:text-blue-400">
                    <div className="flex justify-between">
                      <span>Spotlight Search</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700 rounded text-xs">
                        Ctrl + Space
                      </kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Terminal</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700 rounded text-xs">
                        Ctrl + T
                      </kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Settings</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700 rounded text-xs">
                        Ctrl + ,
                      </kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sound Tab */}
          {activeTab === 'sound' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Sound
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      Sound enabled
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Enable all sound effects
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.soundEnabled}
                    onChange={(e) =>
                      updateSetting('soundEnabled', e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Volume: {settings.soundVolume}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={settings.soundVolume}
                    onChange={(e) =>
                      updateSetting('soundVolume', Number(e.target.value))
                    }
                    className="w-full"
                    disabled={!settings.soundEnabled}
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      Play sound effects
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Play sounds for UI interactions
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.playSoundEffects}
                    onChange={(e) =>
                      updateSetting('playSoundEffects', e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 rounded"
                    disabled={!settings.soundEnabled}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Network Tab */}
          {activeTab === 'network' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Network
              </h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      WiFi
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {settings.wifiEnabled
                        ? 'Connected to Network'
                        : 'Disconnected'}
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.wifiEnabled}
                    onChange={(e) =>
                      updateSetting('wifiEnabled', e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </div>

                {settings.wifiEnabled && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <Wifi className="w-5 h-5" />
                      <span className="font-medium">Connected</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                      Network connection is active
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </WindowWrapper>
  )
}
