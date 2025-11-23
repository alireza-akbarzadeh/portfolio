import { dockApps } from '@/constants'
import React from 'react'
import { DockIcon } from './dock-icon'

export default function Dock() {
  const dockRef = React.useRef<HTMLDivElement>(null)
  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map((app) => (
          <DockIcon key={app.id} app={app} />
        ))}
      </div>
    </section>
  )
}
