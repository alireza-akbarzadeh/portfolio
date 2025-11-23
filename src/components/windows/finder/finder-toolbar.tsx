import { ChevronLeft, ChevronRight, Grid3x3, List } from 'lucide-react'

interface FinderToolbarProps {
  currentTitle: string
  viewMode: 'grid' | 'list'
  isBackDisabled: boolean
  isForwardDisabled: boolean
  onBack: () => void
  onForward: () => void
  onViewModeChange: (mode: 'grid' | 'list') => void
}

export function FinderToolbar({
  currentTitle,
  viewMode,
  isBackDisabled,
  isForwardDisabled,
  onBack,
  onForward,
  onViewModeChange,
}: FinderToolbarProps) {
  return (
    <div className="flex flex-1 items-center gap-4">
      <div className="flex items-center gap-1">
        <button
          onClick={onBack}
          disabled={isBackDisabled}
          className="p-1.5 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={onForward}
          disabled={isForwardDisabled}
          className="p-1.5 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="flex-1 text-center">
        <h2 className="text-sm font-semibold text-gray-700">{currentTitle}</h2>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onViewModeChange('grid')}
          className={`p-1.5 rounded transition-colors ${
            viewMode === 'grid' ? 'bg-gray-300' : 'hover:bg-gray-200'
          }`}
        >
          <Grid3x3 className="w-4 h-4 text-gray-600" />
        </button>
        <button
          onClick={() => onViewModeChange('list')}
          className={`p-1.5 rounded transition-colors ${
            viewMode === 'list' ? 'bg-gray-300' : 'hover:bg-gray-200'
          }`}
        >
          <List className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
