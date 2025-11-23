import { locations } from '@/constants'

interface FinderSidebarProps {
  currentLocation: string
  openFolder: any
  onLocationClick: (key: string) => void
}

export function FinderSidebar({
  currentLocation,
  openFolder,
  onLocationClick,
}: FinderSidebarProps) {
  return (
    <div className="w-48 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-3">
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">
          Favorites
        </h3>
        <div className="space-y-1">
          {Object.entries(locations)
            .filter(([key]) => key !== 'work')
            .map(([key, location]) => (
              <button
                key={location.id}
                onClick={() => onLocationClick(key)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                  currentLocation === key && !openFolder
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <img
                  src={location.icon}
                  alt={location.name}
                  className="w-4 h-4"
                />
                <span>{location.name}</span>
              </button>
            ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">
          Work
        </h3>
        <div className="space-y-1">
          {locations.work && (
            <button
              onClick={() => onLocationClick('work')}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                currentLocation === 'work' && !openFolder
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <img
                src={locations.work.icon}
                alt={locations.work.name}
                className="w-4 h-4"
              />
              <span>{locations.work.name}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
