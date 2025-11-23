import { navLinks } from '@/constants'
import { RealtimeClock } from './realtime-clock'
import { toggleSpotlight, openWindow, closeAllWindows } from '@/store'
import type { WindowType } from '@/store'
import { useState } from 'react'
import {
  Moon,
  Sun,
  Monitor,
  Wifi,
  WifiOff,
  Battery,
  Volume2,
  VolumeX,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('light')
  const [isWifiOn, setIsWifiOn] = useState(true)
  const [isSoundOn, setIsSoundOn] = useState(true)

  const handleNavClick = (type: string) => {
    openWindow(type as WindowType)
  }

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <nav>
      <div>
        {/* Apple Logo Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="p-1.5 hover:bg-white/50 rounded transition-colors outline-none">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09l-.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem onClick={() => openWindow('contact')}>
              About This Portfolio
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => openWindow('terminal')}>
              System Preferences...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={closeAllWindows}>
              Close All Windows
              <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>Sleep</DropdownMenuItem>
            <DropdownMenuItem disabled>Restart...</DropdownMenuItem>
            <DropdownMenuItem disabled>Shut Down...</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Portfolio Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-bold hover:bg-white/50 px-2 py-1 rounded transition-colors outline-none">
            Portfolio
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem onClick={() => openWindow('contact')}>
              About Me
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => openWindow('terminal')}>
              Preferences...
              <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>
              Hide Portfolio
              <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              Hide Others
              <DropdownMenuShortcut>⌥⌘H</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Show All</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>
              Quit Portfolio
              <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* File Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium hover:bg-white/50 px-2 py-1 rounded transition-colors outline-none">
            File
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem onClick={() => openWindow('finder')}>
              New Window
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openWindow('finder')}>
              Open...
              <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={closeAllWindows}>
              Close Window
              <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* View Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium hover:bg-white/50 px-2 py-1 rounded transition-colors outline-none">
            View
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem disabled>Show Toolbar</DropdownMenuItem>
            <DropdownMenuItem disabled>
              Show Sidebar
              <DropdownMenuShortcut>⌘⇧S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>
              Actual Size
              <DropdownMenuShortcut>⌘0</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              Zoom In
              <DropdownMenuShortcut>⌘+</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              Zoom Out
              <DropdownMenuShortcut>⌘-</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Quick Links */}
        <ul className="flex items-center gap-1 ml-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.type)}
                className="text-xs font-medium cursor-pointer hover:bg-white/50 px-3 py-1 rounded transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex items-center gap-3">
          {/* WiFi Toggle */}
          <li>
            <button
              onClick={() => setIsWifiOn(!isWifiOn)}
              className="hover:bg-white/50 p-1 rounded transition-colors"
              title={isWifiOn ? 'WiFi On' : 'WiFi Off'}
            >
              {isWifiOn ? (
                <Wifi className="w-4 h-4" />
              ) : (
                <WifiOff className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </li>

          {/* Search / Spotlight */}
          <li>
            <button
              onClick={toggleSpotlight}
              className="hover:bg-white/50 p-1 rounded transition-colors"
              title="Spotlight Search (⌘Space)"
            >
              <img src="/icons/search.svg" className="w-4 h-4" alt="search" />
            </button>
          </li>

          {/* Theme Switcher */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:bg-white/50 p-1.5 rounded transition-colors outline-none">
                {theme === 'dark' ? (
                  <Moon className="w-4 h-4" />
                ) : theme === 'light' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Monitor className="w-4 h-4" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() => handleThemeChange('light')}
                  className={theme === 'light' ? 'bg-accent' : ''}
                >
                  <Sun className="w-4 h-4 mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeChange('dark')}
                  className={theme === 'dark' ? 'bg-accent' : ''}
                >
                  <Moon className="w-4 h-4 mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeChange('auto')}
                  className={theme === 'auto' ? 'bg-accent' : ''}
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  Auto
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Sound Toggle */}
          <li>
            <button
              onClick={() => setIsSoundOn(!isSoundOn)}
              className="hover:bg-white/50 p-1 rounded transition-colors"
              title={isSoundOn ? 'Sound On' : 'Muted'}
            >
              {isSoundOn ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </li>

          {/* Battery */}
          <li>
            <button
              className="hover:bg-white/50 p-1 rounded transition-colors"
              title="Battery: 100%"
            >
              <Battery className="w-4 h-4" />
            </button>
          </li>

          {/* User Profile */}
          <li>
            <button
              onClick={() => openWindow('contact')}
              className="hover:bg-white/50 p-1 rounded transition-colors"
              title="User Profile"
            >
              <img src="/icons/user.svg" className="w-4 h-4" alt="user" />
            </button>
          </li>
        </ul>

        <RealtimeClock />
      </div>
    </nav>
  )
}
