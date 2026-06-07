function PortfolioSummary() {
  return (
    <section className="px-6 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-slate-800 p-5 shadow">
          <h3 className="text-slate-400">Portfolio Value</h3>
          <p className="mt-2 text-3xl font-bold text-white">
            ₹2,45,000
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5 shadow">
          <h3 className="text-slate-400">Today's P&L</h3>
          <p className="mt-2 text-3xl font-bold text-green-400">
            +₹4,500
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5 shadow">
          <h3 className="text-slate-400">Total Return</h3>
          <p className="mt-2 text-3xl font-bold text-green-400">
            +12.8%
          </p>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSummary;