# Global State Management with TanStack Store

This portfolio app uses TanStack Store for global state management to handle window states and the Spotlight command palette.

## Store Structure

The store manages:

- **Spotlight state**: Open/close state of the command palette
- **Window states**: For each window type (finder, terminal, contact, etc.)
- **Z-index management**: Automatic focus handling

## Available Window Types

```typescript
;'finder' |
  'contact' |
  'resume' |
  'safari' |
  'photos' |
  'terminal' |
  'txtfile' |
  'imgfile' |
  'trash'
```

## Usage Examples

### 1. Using the Spotlight Hook

```tsx
import { useSpotlight } from '@/store'

function MyComponent() {
  const { isOpen, toggle, setOpen } = useSpotlight()

  return (
    <button onClick={toggle}>
      Toggle Spotlight {isOpen ? '(Open)' : '(Closed)'}
    </button>
  )
}
```

### 2. Using the Window Hook

```tsx
import { useWindow } from '@/store'

function MyComponent() {
  const terminal = useWindow('terminal')

  return (
    <div>
      <button onClick={() => terminal.open()}>Open Terminal</button>

      {terminal.isOpen && (
        <div style={{ zIndex: terminal.zIndex }} onClick={terminal.focus}>
          <h2>Terminal</h2>
          <button onClick={terminal.close}>Close</button>
        </div>
      )}
    </div>
  )
}
```

### 3. Opening a Window with Data

```tsx
import { openWindow } from '@/store'

function ProjectButton() {
  const handleClick = () => {
    // Open finder window with project data
    openWindow('finder', {
      type: 'work',
      projectId: '123',
    })
  }

  return <button onClick={handleClick}>View Projects</button>
}
```

### 4. Using Multiple Windows

```tsx
import { useWindow } from '@/store'

function DockIcon({ type, icon }) {
  const window = useWindow(type)

  return (
    <button
      onClick={() => window.toggle()}
      className={window.isOpen ? 'active' : ''}
    >
      <img src={icon} alt={type} />
    </button>
  )
}
```

### 5. Direct Store Actions

```tsx
import {
  openWindow,
  closeWindow,
  toggleWindow,
  focusWindow,
  closeAllWindows,
} from '@/store'

// Open a window
openWindow('terminal')

// Open with data
openWindow('finder', { type: 'about' })

// Close a window
closeWindow('terminal')

// Toggle a window
toggleWindow('photos')

// Bring a window to front
focusWindow('contact')

// Close all windows
closeAllWindows()
```

### 6. Checking Window State

```tsx
import { useAllWindows } from '@/store'

function WindowManager() {
  const { windows, closeAll } = useAllWindows()

  const openWindows = Object.entries(windows)
    .filter(([_, state]) => state.isOpen)
    .map(([type]) => type)

  return (
    <div>
      <p>Open windows: {openWindows.join(', ')}</p>
      <button onClick={closeAll}>Close All</button>
    </div>
  )
}
```

## Window State Properties

Each window has the following state:

```typescript
{
  isOpen: boolean // Whether the window is open
  zIndex: number // Current z-index for stacking
  data: any // Optional data passed to the window
}
```

## Keyboard Shortcuts

- **⌘K / Ctrl+K**: Toggle Spotlight command palette

## Store API

### Hooks

- `useSpotlight()` - Access spotlight state and actions
- `useWindow(type)` - Access a specific window's state and actions
- `useAllWindows()` - Access all windows
- `useMaxZIndex()` - Get current maximum z-index
- `useHasOpenWindows()` - Check if any window is open

### Actions

- `toggleSpotlight()` - Toggle spotlight open/closed
- `setSpotlightOpen(open)` - Set spotlight state
- `openWindow(type, data?)` - Open a window with optional data
- `closeWindow(type)` - Close a window
- `toggleWindow(type, data?)` - Toggle a window
- `focusWindow(type)` - Bring window to front
- `setWindowData(type, data)` - Update window data
- `closeAllWindows()` - Close all windows

## Integration Example

```tsx
// In your dock component
import { useWindow } from '@/store'

function Dock() {
  const apps = [
    { id: 'finder', icon: '/finder.png' },
    { id: 'terminal', icon: '/terminal.png' },
    { id: 'photos', icon: '/photos.png' },
  ]

  return (
    <div className="dock">
      {apps.map((app) => (
        <DockIcon key={app.id} type={app.id} icon={app.icon} />
      ))}
    </div>
  )
}

function DockIcon({ type, icon }) {
  const window = useWindow(type)

  return (
    <button
      onClick={() => window.toggle()}
      className={window.isOpen ? 'active' : ''}
    >
      <img src={icon} alt={type} />
    </button>
  )
}

// In your window component
function TerminalWindow() {
  const terminal = useWindow('terminal')

  if (!terminal.isOpen) return null

  return (
    <div
      style={{ zIndex: terminal.zIndex }}
      onClick={terminal.focus}
      className="window"
    >
      <div className="window-header">
        <button onClick={terminal.close}>×</button>
        <h2>Terminal</h2>
      </div>
      <div className="window-content">{/* Terminal content */}</div>
    </div>
  )
}
```

## Benefits

1. **Centralized State**: All window states in one place
2. **Automatic Z-Index**: Windows automatically stack correctly
3. **Type Safety**: Full TypeScript support
4. **Simple API**: Easy-to-use hooks and actions
5. **Performance**: Efficient re-renders with TanStack Store
6. **Persistence Ready**: Easy to add localStorage persistence if needed
