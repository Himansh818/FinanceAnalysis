function MarketOverview() {
  const indices = [
    { name: "NIFTY 50", value: "24,850", change: "+0.82%" },
    { name: "SENSEX", value: "81,450", change: "+0.64%" },
    { name: "BANK NIFTY", value: "55,320", change: "+1.12%" },
    { name: "NIFTY IT", value: "38,920", change: "+0.45%" },
  ];

  return (
    <section className="bg-slate-900 px-6 py-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indices.map((index) => (
          <div
            key={index.name}
            className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-md transition hover:scale-105"
          >
            <h4 className="text-sm font-medium text-slate-400">
              {index.name}
            </h4>

            <p className="mt-2 text-2xl font-bold text-white">
              {index.value}
            </p>

            <span className="mt-1 inline-block text-sm font-semibold text-green-400">
              {index.change}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketOverview;