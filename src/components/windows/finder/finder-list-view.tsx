interface FinderListViewProps {
  items: any[]
  selectedItemId?: number
  onItemClick: (item: any) => void
  onItemDoubleClick: (item: any) => void
}

export function FinderListView({
  items,
  selectedItemId,
  onItemClick,
  onItemDoubleClick,
}: FinderListViewProps) {
  return (
    <div className="space-y-1">
      {items?.map((item: any) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item)}
          onDoubleClick={() => onItemDoubleClick(item)}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-colors ${
            selectedItemId === item.id
              ? 'bg-blue-100 ring-2 ring-blue-500'
              : 'hover:bg-gray-100'
          }`}
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 object-contain"
          />
          <span className="text-sm text-gray-700 flex-1 text-left">
            {item.name}
          </span>
          <span className="text-xs text-gray-500">{item.kind}</span>
        </button>
      ))}
    </div>
  )
}
