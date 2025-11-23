import { useWindow } from '@/store'

interface DockIconProps {
  windowType:
    | 'finder'
    | 'terminal'
    | 'contact'
    | 'resume'
    | 'safari'
    | 'photos'
    | 'trash'
  icon: string
  label: string
}

export function DockIcon({ windowType, icon, label }: DockIconProps) {
  const window = useWindow(windowType)

  return (
    <div className="dock-icon">
      <button
        onClick={() => window.toggle()}
        className={window.isOpen ? 'active' : ''}
        title={label}
      >
        <img src={icon} alt={label} />
      </button>
      {window.isOpen && <div className="indicator" />}
    </div>
  )
}
