interface FinderGridViewProps {
  items: any[]
  selectedItemId?: number
  onItemClick: (item: any) => void
  onItemDoubleClick: (item: any) => void
}

export function FinderGridView({
  items,
  selectedItemId,
  onItemClick,
  onItemDoubleClick,
}: FinderGridViewProps) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {items?.map((item: any) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item)}
          onDoubleClick={() => onItemDoubleClick(item)}
          className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors group ${
            selectedItemId === item.id
              ? 'bg-blue-100 dark:bg-blue-900/30 ring-2 ring-blue-500'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-16 h-16 object-contain"
          />
          <span className="text-sm text-center text-gray-700 dark:text-gray-300 line-clamp-2 wrap-break-word">
            {item.name}
          </span>
        </button>
      ))}
    </div>
  )
}
