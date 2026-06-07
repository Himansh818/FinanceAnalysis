function RecentNews() {
  const news = [
    {
      title: "Reliance gains after strong quarterly results",
      time: "2 hours ago",
    },
    {
      title: "NIFTY closes at record high",
      time: "4 hours ago",
    },
    {
      title: "IT stocks lead market rally",
      time: "6 hours ago",
    },
  ];

  return (
    <section className="px-6 py-4">
      <div className="rounded-xl bg-slate-800 p-6">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Market News
        </h2>

        <div className="space-y-4">
          {news.map((item) => (
            <div
              key={item.title}
              className="border-b border-slate-700 pb-3"
            >
              <h3 className="text-white">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentNews;