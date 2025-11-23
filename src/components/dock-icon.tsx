import { useWindow, type WindowType } from '@/store'

interface DockApp {
  id: string
  name: string
  icon: string
  canOpen: boolean
}

interface DockIconProps {
  app: DockApp
}

export function DockIcon({ app }: DockIconProps) {
  const window = useWindow(app.id as WindowType)

  const handleClick = () => {
    if (app.canOpen) {
      window.toggle()
    }
  }

  return (
    <div
      className="dock-icon group relative"
      data-tooltip-id={`tooltip-${app.id}`}
      data-tooltip-content={app.name}
    >
      <button
        onClick={handleClick}
        className={`transition-all duration-200 ${window.isOpen ? 'scale-110' : ''} ${
          !app.canOpen ? 'cursor-not-allowed opacity-50' : 'hover:scale-125'
        }`}
        title={app.name}
        disabled={!app.canOpen}
      >
        <img
          src={`/images/${app.icon}`}
          alt={app.name}
          className="w-full h-full"
        />
      </button>

      {/* Active indicator dot */}
      {window.isOpen && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
      )}

      {/* Tooltip on hover */}
      <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {app.name}
      </div>
    </div>
  )
}
