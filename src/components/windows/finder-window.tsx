import { WindowWrapper } from '../window-wrapper'
import { useFinder } from '../hooks/use-finder'
import { FinderSidebar } from './finder/finder-sidebar'
import { FinderToolbar } from './finder/finder-toolbar'
import { FinderGridView } from './finder/finder-grid-view'
import { FinderListView } from './finder/finder-list-view'
import { FinderPreview } from './finder/finder-preview'

export function FinderWindow() {
  const {
    currentLocation,
    selectedItem,
    openFolder,
    viewMode,
    displayItems,
    currentTitle,
    setViewMode,
    handleItemClick,
    handleItemDoubleClick,
    handleBack,
    handleLocationClick,
    navigateForward,
    isBackDisabled,
    isForwardDisabled,
  } = useFinder()

  return (
    <WindowWrapper
      windowType="finder"
      title="Portfolio"
      defaultWidth={1000}
      defaultHeight={650}
      minWidth={800}
      minHeight={500}
      headerContent={
        <FinderToolbar
          currentTitle={currentTitle}
          viewMode={viewMode}
          isBackDisabled={isBackDisabled}
          isForwardDisabled={isForwardDisabled}
          onBack={handleBack}
          onForward={navigateForward}
          onViewModeChange={setViewMode}
        />
      }
    >
      <div className="flex h-full bg-white">
        <FinderSidebar
          currentLocation={currentLocation}
          openFolder={openFolder}
          onLocationClick={handleLocationClick}
        />

        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-auto p-6">
            {viewMode === 'grid' ? (
              <FinderGridView
                items={displayItems || []}
                selectedItemId={selectedItem?.id}
                onItemClick={handleItemClick}
                onItemDoubleClick={handleItemDoubleClick}
              />
            ) : (
              <FinderListView
                items={displayItems || []}
                selectedItemId={selectedItem?.id}
                onItemClick={handleItemClick}
                onItemDoubleClick={handleItemDoubleClick}
              />
            )}
          </div>

          {selectedItem && <FinderPreview item={selectedItem} />}
        </div>
      </div>
    </WindowWrapper>
  )
}
