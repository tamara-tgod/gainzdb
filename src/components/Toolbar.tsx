interface ToolbarProps  {
  onSavedClick: () => void;
  favouritesCount: number;
}

const Toolbar = ({onSavedClick, favouritesCount}: ToolbarProps) => {
  return (
    <div className="flex justify-between items-center min-w-full p-3 border-b border-dashed border-(--accent)">
        <h1>Gainz<span className="text-(--muscle-text)">DB</span></h1>
        <div>
            <input type="search" 
            className="bg-(--app-bg) w-70 border border-(--card-hover) px-6 py-1 rounded-full placeholder:text-(--accent)"
            placeholder="🔍 search exercises..."/>
        </div>
        <button 
        onClick={() => onSavedClick()}
        className="border border-(--card-hover) px-4 py-1 rounded-full text-(--accent)">Saved
        ({favouritesCount})
        </button>
    </div>
  )
}

export default Toolbar