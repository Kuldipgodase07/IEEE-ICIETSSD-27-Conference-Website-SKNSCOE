import { useState, useEffect } from 'react';

const CONF_DATE = new Date('2027-06-10T09:00:00');

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function Countdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function tick() {
      const ms = Math.max(0, CONF_DATE.getTime() - Date.now());
      setT({
        days: Math.floor(ms / 86400000),
        hours: Math.floor((ms % 86400000) / 3600000),
        minutes: Math.floor((ms % 3600000) / 60000),
        seconds: Math.floor((ms % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: t.days },
    { label: 'Hours', value: t.hours },
    { label: 'Mins', value: t.minutes },
    { label: 'Secs', value: t.seconds },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-2 sm:gap-3">
          <div className="text-center">
            <div
              className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(0,194,255,0.08)',
                border: '1px solid rgba(0,194,255,0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                className="text-xl sm:text-2xl font-bold text-white tabular-nums"
                style={{ fontFamily: "'Sora',sans-serif" }}
              >
                {pad(value)}
              </span>
            </div>
            <div className="text-[10px] sm:text-xs mt-1 uppercase tracking-widest" style={{ color: '#00C2FF' }}>
              {label}
            </div>
          </div>
          {i < 3 && <span className="text-[#00C2FF] text-xl font-light pb-5">:</span>}
        </div>
      ))}
    </div>
  );
}
