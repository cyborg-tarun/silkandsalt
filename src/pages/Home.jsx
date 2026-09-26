const RINGS = [
  { id: "near", count: 8, dur: "18s", dir: "normal", radius: "16vmin", scale: 2.55, size: 16 },
  { id: "mid", count: 7, dur: "28s", dir: "reverse", radius: "23vmin", scale: 2.05, size: 12 },
  { id: "far", count: 10, dur: "42s", dir: "normal", radius: "30vmin", scale: 1.7, size: 9 },
];

const DUST = [
  { top: "7%", left: "8%", size: 8, delay: "0s", dur: "6.5s" },
  { top: "12%", left: "78%", size: 5, delay: "1.2s", dur: "8s" },
  { top: "18%", left: "22%", size: 4, delay: "2.4s", dur: "7s" },
  { top: "22%", left: "90%", size: 9, delay: "0.6s", dur: "9s" },
  { top: "30%", left: "6%", size: 6, delay: "3s", dur: "7.5s" },
  { top: "38%", left: "84%", size: 4, delay: "1.8s", dur: "6s" },
  { top: "58%", left: "10%", size: 7, delay: "2s", dur: "8.5s" },
  { top: "64%", left: "88%", size: 5, delay: "0.4s", dur: "7s" },
  { top: "72%", left: "18%", size: 4, delay: "2.8s", dur: "9s" },
  { top: "78%", left: "74%", size: 8, delay: "1s", dur: "6.8s" },
  { top: "86%", left: "42%", size: 5, delay: "3.4s", dur: "8s" },
  { top: "90%", left: "12%", size: 6, delay: "1.6s", dur: "7.2s" },
  { top: "14%", left: "48%", size: 4, delay: "2.2s", dur: "10s" },
  { top: "48%", left: "4%", size: 5, delay: "0.8s", dur: "8.2s" },
  { top: "46%", left: "94%", size: 7, delay: "2.6s", dur: "7.6s" },
  { top: "68%", left: "52%", size: 4, delay: "1.4s", dur: "9.4s" },
];

function Spark({ size }) {
  return (
    <svg className="spark-svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .8 13.8 9.2 22.2 12 13.8 14.8 12 23.2 10.2 14.8 1.8 12 10.2 9.2Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <section className="stage">
      <div className="wash" aria-hidden="true" />

      <div className="dust" aria-hidden="true">
        {DUST.map((star) => (
          <span
            key={`${star.top}-${star.left}`}
            className="mote"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.dur,
            }}
          >
            <Spark size={star.size} />
          </span>
        ))}
      </div>

      <div className="orbits" aria-hidden="true">
        {RINGS.map((ring) => (
          <div
            key={ring.id}
            className={`spinner spinner-${ring.id}`}
            style={{
              "--dur": ring.dur,
              "--dir": ring.dir,
              "--radius": ring.radius,
              "--scale": ring.scale,
            }}
          >
            {Array.from({ length: ring.count }, (_, index) => (
              <span
                key={index}
                className="arm"
                style={{ "--a": `${(360 / ring.count) * index}deg` }}
              >
                <span className="spark" style={{ "--tw": `${index * 0.35}s` }}>
                  <Spark size={ring.size} />
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="mark">
        <img src="/logo.png" alt="Silk & Salt" />
        <h1>Coming soon</h1>
      </div>
    </section>
  );
}
