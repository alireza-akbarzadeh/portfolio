interface FinderPreviewProps {
  item: any
}

export function FinderPreview({ item }: FinderPreviewProps) {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
      <div className="flex items-start gap-4">
        <img
          src={item.icon}
          alt={item.name}
          className="w-12 h-12 object-contain"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {item.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Kind: {item.fileType || item.kind}
          </p>
          {item.description && (
            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">
              {item.description[0]}
            </p>
          )}
          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              Open Link →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
