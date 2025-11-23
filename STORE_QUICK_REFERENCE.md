# 🚀 Quick Reference: Global State Management

## Installation ✅

Already installed: `@tanstack/react-store`

## Import What You Need

```tsx
// Most common imports
import { useWindow, useSpotlight, openWindow } from '@/store'
```

## 🎯 Quick Examples

### Open a Window from Anywhere

```tsx
import { openWindow } from '@/store'

// Simple open
openWindow('terminal')

// With data
openWindow('finder', { type: 'work', projectId: '123' })
```

### In a Component

```tsx
import { useWindow } from '@/store'

function MyComponent() {
  const terminal = useWindow('terminal')

  return (
    <>
      <button onClick={() => terminal.open()}>Open</button>

      {terminal.isOpen && (
        <div style={{ zIndex: terminal.zIndex }}>
          <button onClick={terminal.close}>×</button>
          Content here
        </div>
      )}
    </>
  )
}
```

### Spotlight (Already Working!)

- Press **⌘K** or **Ctrl+K** to open
- Fully integrated with global state
- Opens windows automatically

## 📦 Available Window Types

- `'finder'` - Portfolio/Projects
- `'terminal'` - Skills/Terminal
- `'contact'` - Contact Form
- `'resume'` - Resume Viewer
- `'safari'` - Blog/Articles
- `'photos'` - Gallery
- `'trash'` - Archive
- `'txtfile'` - Text File Viewer
- `'imgfile'` - Image Viewer

## 🔥 Most Used Patterns

### Pattern 1: Toggle Button

```tsx
const window = useWindow('terminal')
<button onClick={() => window.toggle()}>Toggle Terminal</button>
```

### Pattern 2: Conditional Render

```tsx
const window = useWindow('contact')
if (!window.isOpen) return null
return <div>Contact Form</div>
```

### Pattern 3: Focus on Click

```tsx
const window = useWindow('finder')
<div onClick={window.focus} style={{ zIndex: window.zIndex }}>
  Content
</div>
```

## 🎨 Complete Window Component

```tsx
import { useWindow } from '@/store'

export function MyWindow() {
  const win = useWindow('terminal')

  if (!win.isOpen) return null

  return (
    <div style={{ zIndex: win.zIndex }} onClick={win.focus} className="window">
      <header>
        <button onClick={win.close}>×</button>
        <h2>Terminal</h2>
      </header>
      <main>
        {win.data && <p>Data: {JSON.stringify(win.data)}</p>}
        <p>Your content here</p>
      </main>
    </div>
  )
}
```

## 💡 Tips

1. **Always use `zIndex`** from the window state for proper stacking
2. **Click to focus**: Call `window.focus()` on window click
3. **Pass data**: Use `openWindow(type, data)` to pass initial data
4. **Conditional render**: Check `isOpen` before rendering

## 📚 Full Documentation

See `STORE_USAGE.md` for complete API reference and advanced patterns.
