const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-700 text-white">
      
      {/* Logo */}
      <div>
        <h2 className="text-2xl font-bold text-blue-400">
          FinSight
        </h2>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Search stocks (e.g. RELIANCE, TCS)"
          className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Market Status */}
      <div className="flex items-center gap-2 mr-6">
        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-green-400 font-medium">
          Market Open
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-slate-800 transition">
          🔔
        </button>

        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
          📊 Watchlist
        </button>

        <img
          src="/profile.png"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-slate-600 object-cover"
        />
      </div>
      
    </header>
  );
};

export default Header;