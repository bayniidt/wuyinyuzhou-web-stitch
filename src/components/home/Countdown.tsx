import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft: TimeLeft | null = null;

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  const items = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-6">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm sm:h-16 sm:w-16">
            <span className="font-serif text-xl font-bold text-wuyin-gold-bright sm:text-2xl">
              {String(item.value).padStart(2, "0")}
            </span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-wuyin-accent/50 to-transparent" />
          </div>
          <span className="mt-2 text-[10px] font-semibold tracking-widest text-neutral-500 sm:text-xs">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
