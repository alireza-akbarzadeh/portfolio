import { navIcons, navLinks } from '@/constants'
import { RealtimeClock } from './realtime-clock'
import { toggleSpotlight, openWindow } from '@/store'
import type { WindowType } from '@/store'

export function Navbar() {
  const handleNavClick = (type: string) => {
    openWindow(type as WindowType)
  }

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Alireza's Portfolio</p>
        <ul className="flex items-center gap-6">
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.type)}
                className="text-xs font-medium cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map((item) => (
            <li key={item.id}>
              <img
                src={item.img}
                className="icon-hover"
                alt={`icon-${item.id}`}
                onClick={item.id === 2 ? toggleSpotlight : undefined}
                style={item.id === 2 ? { cursor: 'pointer' } : undefined}
              />
            </li>
          ))}
        </ul>
        <RealtimeClock />
      </div>
    </nav>
  )
}
