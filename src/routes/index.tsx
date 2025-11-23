import { TerminalWindow } from '@/components/windows/terminal-window'
import { SettingsWindow } from '@/components/windows/settings-window'
import { GlobalKeyboardShortcuts } from '@/components/global-keyboard-shortcuts'
import { Navbar } from '@/components/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="min-h-screen relative">
      <GlobalKeyboardShortcuts />
      <Navbar />
      <TerminalWindow />
      <SettingsWindow />
    </main>
  )
}
