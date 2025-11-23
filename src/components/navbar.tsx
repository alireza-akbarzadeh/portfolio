import { navIcons, navLinks } from '@/constants'
import { RealtimeClock } from './realtime-clock'

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
              />
            </li>
          ))}
        </ul>
        <RealtimeClock />
      </div>
    </nav>
  )
}
