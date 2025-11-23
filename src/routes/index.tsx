import { TerminalWindow } from '@/components/windows/terminal-window'
import { SettingsWindow } from '@/components/windows/settings-window'
import { FinderWindow } from '@/components/windows/finder-window'
import { SafariWindow } from '@/components/windows/safari-window'
import { PhotosWindow } from '@/components/windows/photos-window'
import { ContactWindow } from '@/components/windows/contact-window'
import { TrashWindow } from '@/components/windows/trash-window'
import { GlobalKeyboardShortcuts } from '@/components/global-keyboard-shortcuts'
import { Navbar } from '@/components/navbar'
import { createFileRoute } from '@tanstack/react-router'
import Dock from '@/components/dock'
import { Resume } from '@/components/windows/resume'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="min-h-screen relative">
      <GlobalKeyboardShortcuts />
      <Navbar />
      <FinderWindow />
      <SafariWindow />
      <PhotosWindow />
      <ContactWindow />
      <TerminalWindow />
      <TrashWindow />
      <SettingsWindow />
      <Resume />
      <Dock />
    </main>
  )
}
