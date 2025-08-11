export default function SearchBox({ search, setSearch }) {
    return (
      <div className="relative mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="ابحث عن وجبة..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyUp={e => e.key === "Enter" && setSearch(e.target.value)}
          className="w-full pr-12 pl-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setSearch(search)}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
        >
          {/* أيقونة البحث */}
        </button>
        <div className="absolute left-0 -bottom-8">
          <button className="text-sm text-blue-600 hover:underline" onClick={() => {/* switch to ar */}}>العربية</button>
          |
          <button className="text-sm text-blue-600 hover:underline" onClick={() => {/* switch to en */}}>English</button>
        </div>
      </div>
    );
  }