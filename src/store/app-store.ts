import { Store } from '@tanstack/react-store'

export type WindowType =
  | 'finder'
  | 'contact'
  | 'resume'
  | 'safari'
  | 'photos'
  | 'terminal'
  | 'txtfile'
  | 'imgfile'
  | 'trash'

export interface WindowState {
  isOpen: boolean
  zIndex: number
  data: any
  position: { x: number; y: number }
  size: { width: number; height: number }
  isMinimized: boolean
  isMaximized: boolean
}

export interface AppState {
  // Spotlight state
  spotlightOpen: boolean
  // Window states
  windows: Record<WindowType, WindowState>
  // Highest z-index tracker
  maxZIndex: number
  // Currently focused window
  focusedWindow: WindowType | null
}

const INITIAL_Z_INDEX = 1000
const SPOTLIGHT_Z_INDEX = 9999 // Spotlight always on top

const createInitialWindowState = (): WindowState => ({
  isOpen: false,
  zIndex: INITIAL_Z_INDEX,
  data: null,
  position: { x: 100, y: 100 },
  size: { width: 800, height: 600 },
  isMinimized: false,
  isMaximized: false,
})

const initialState: AppState = {
  spotlightOpen: false,
  windows: {
    finder: createInitialWindowState(),
    contact: createInitialWindowState(),
    resume: createInitialWindowState(),
    safari: createInitialWindowState(),
    photos: createInitialWindowState(),
    terminal: createInitialWindowState(),
    txtfile: createInitialWindowState(),
    imgfile: createInitialWindowState(),
    trash: createInitialWindowState(),
  },
  maxZIndex: INITIAL_Z_INDEX,
  focusedWindow: null,
}

export const appStore = new Store(initialState)

// Spotlight Actions
export const toggleSpotlight = () => {
  appStore.setState((state) => ({
    ...state,
    spotlightOpen: !state.spotlightOpen,
  }))
}

export const setSpotlightOpen = (open: boolean) => {
  appStore.setState((state) => ({
    ...state,
    spotlightOpen: open,
  }))
}

// Window Actions
export const openWindow = (windowType: WindowType, data?: any) => {
  appStore.setState((state) => {
    const newZIndex = state.maxZIndex + 1
    return {
      ...state,
      windows: {
        ...state.windows,
        [windowType]: {
          isOpen: true,
          zIndex: newZIndex,
          data: data || null,
        },
      },
      maxZIndex: newZIndex,
    }
  })
}

export const closeWindow = (windowType: WindowType) => {
  appStore.setState((state) => ({
    ...state,
    windows: {
      ...state.windows,
      [windowType]: {
        ...state.windows[windowType],
        isOpen: false,
        data: null,
      },
    },
    focusedWindow:
      state.focusedWindow === windowType ? null : state.focusedWindow,
  }))
}

export const closeFocusedWindow = () => {
  const focusedWindow = appStore.state.focusedWindow
  if (focusedWindow && appStore.state.windows[focusedWindow].isOpen) {
    closeWindow(focusedWindow)
  }
}

export const toggleWindow = (windowType: WindowType, data?: any) => {
  const currentState = appStore.state.windows[windowType]
  if (currentState.isOpen) {
    closeWindow(windowType)
  } else {
    openWindow(windowType, data)
  }
}

export const focusWindow = (windowType: WindowType) => {
  appStore.setState((state) => {
    const newZIndex = state.maxZIndex + 1
    return {
      ...state,
      windows: {
        ...state.windows,
        [windowType]: {
          ...state.windows[windowType],
          zIndex: newZIndex,
        },
      },
      maxZIndex: newZIndex,
      focusedWindow: windowType,
    }
  })
}

export const setWindowData = (windowType: WindowType, data: any) => {
  appStore.setState((state) => ({
    ...state,
    windows: {
      ...state.windows,
      [windowType]: {
        ...state.windows[windowType],
        data,
      },
    },
  }))
}

export const minimizeWindow = (windowType: WindowType) => {
  appStore.setState((state) => ({
    ...state,
    windows: {
      ...state.windows,
      [windowType]: {
        ...state.windows[windowType],
        isMinimized: true,
      },
    },
  }))
}

export const restoreWindow = (windowType: WindowType) => {
  appStore.setState((state) => ({
    ...state,
    windows: {
      ...state.windows,
      [windowType]: {
        ...state.windows[windowType],
        isMinimized: false,
        isMaximized: false,
      },
    },
  }))
}

export const maximizeWindow = (windowType: WindowType) => {
  appStore.setState((state) => ({
    ...state,
    windows: {
      ...state.windows,
      [windowType]: {
        ...state.windows[windowType],
        isMaximized: true,
        isMinimized: false,
      },
    },
  }))
}

export const setWindowPosition = (
  windowType: WindowType,
  x: number,
  y: number,
) => {
  appStore.setState((state) => ({
    ...state,
    windows: {
      ...state.windows,
      [windowType]: {
        ...state.windows[windowType],
        position: { x, y },
      },
    },
  }))
}

export const setWindowSize = (
  windowType: WindowType,
  width: number,
  height: number,
) => {
  appStore.setState((state) => ({
    ...state,
    windows: {
      ...state.windows,
      [windowType]: {
        ...state.windows[windowType],
        size: { width, height },
      },
    },
  }))
}

export const isWindowOpen = (windowType: WindowType): boolean => {
  return appStore.state.windows[windowType].isOpen
}

export const getWindowState = (windowType: WindowType): WindowState => {
  return appStore.state.windows[windowType]
}

// Get spotlight z-index (always higher than windows)
export const getSpotlightZIndex = (): number => {
  return SPOTLIGHT_Z_INDEX
}

// Close all windows
export const closeAllWindows = () => {
  appStore.setState((state) => {
    const updatedWindows = { ...state.windows }
    Object.keys(updatedWindows).forEach((key) => {
      updatedWindows[key as WindowType] = createInitialWindowState()
    })
    return {
      ...state,
      windows: updatedWindows,
      maxZIndex: INITIAL_Z_INDEX,
    }
  })
}
