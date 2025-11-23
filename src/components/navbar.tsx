import { navIcons, navLinks } from '@/constants'
import { RealtimeClock } from './realtime-clock'
import { toggleSpotlight } from '@/store'

export function Navbar() {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Alireza's Portfolio</p>
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <p className="">{item.name}</p>
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
