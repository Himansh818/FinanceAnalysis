function MarketMovers() {
  const gainers = [
    "TATA MOTORS +4.2%",
    "RELIANCE +3.8%",
    "INFY +3.1%",
  ];

  const losers = [
    "WIPRO -2.3%",
    "HCLTECH -1.8%",
    "BAJAJFIN -1.4%",
  ];

  return (
    <section className="px-6 py-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl bg-slate-800 p-5">
          <h2 className="mb-4 text-xl font-bold text-green-400">
            Top Gainers
          </h2>

          {gainers.map((stock) => (
            <p key={stock} className="py-2 text-white">
              {stock}
            </p>
          ))}
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h2 className="mb-4 text-xl font-bold text-red-400">
            Top Losers
          </h2>

          {losers.map((stock) => (
            <p key={stock} className="py-2 text-white">
              {stock}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketMovers;