import './App.css';

import { useState, useEffect } from 'react';
import { SunMedium} from 'lucide-react';

function App() {
  const [time, setTime] = useState(new Date());
  const [weather] = useState({ temp: '55°', condition: 'SUNNY' });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const date = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }).toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-pink-950 flex items-center justify-center p-6">
      <div className="relative w-full max-w-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rotate-1 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
        
        <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/5 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="text-white/80 font-light">
                <div className="text-sm tracking-[0.4em]">{date}</div>
                <div className="text-3xl mt-1 font-light tracking-widest">
                  {weather.temp}
                  <span className="ml-2 inline-block">
                    <SunMedium className="w-6 h-6 text-amber-400" />
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white/40 font-light tracking-widest">LOCAL TIME</div>
                <div className="text-sm text-white/60 mt-1">{weather.condition}</div>
              </div>
            </div>

            <div className="flex items-end justify-center gap-4 mb-8">
              <div className="text-[8rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 tracking-tight">
                {hours}
              </div>
              <div className="text-[8rem] leading-none font-bold text-pink-500/80 animate-pulse mb-2">:</div>
              <div className="text-[8rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 tracking-tight">
                {minutes}
              </div>
              <div className="text-4xl text-white/30 mb-6">{seconds}</div>
            </div>

            <div className="flex justify-between items-center text-white/30 text-sm">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>LIVE</span>
              </div>
              <div className="tracking-widest">GMT+1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;