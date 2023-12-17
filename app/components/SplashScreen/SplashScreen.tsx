"use client";

import { useEffect } from "react";

interface SplashScreenProps {
  finishLoading: () => void;
}

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 1000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className="flex justify-center items-center h-screen bg-dark-bg">
      <svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5 L95 5 L95 35 M95 65 L95 95 L5 95 L5 5"
          stroke="#FD774B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="square"
          className="draw-animation"
        />
        <path
          d="M57.7812 29.5H63.6875V61.1562C63.6458 63.2604 63.2396 65.1979 62.4688 66.9688C61.7188 68.7396 60.6875 70.2604 59.375 71.5312C58.0625 72.8229 56.5104 73.8333 54.7188 74.5625C52.9479 75.2708 51.0104 75.625 48.9062 75.625C46.7812 75.625 44.8438 75.3021 43.0938 74.6562C41.3646 74.0104 39.8646 73.0833 38.5938 71.875C37.3021 70.6875 36.2708 69.25 35.5 67.5625C34.7292 65.8542 34.25 63.9479 34.0625 61.8438H39.9375C40 63.1146 40.25 64.2917 40.6875 65.375C41.1458 66.4583 41.7604 67.3958 42.5312 68.1875C43.3021 69 44.2188 69.625 45.2812 70.0625C46.3646 70.5 47.5729 70.7188 48.9062 70.7188C50.2812 70.7188 51.5104 70.4688 52.5938 69.9688C53.6771 69.4479 54.6042 68.75 55.375 67.875C56.125 67 56.6979 65.9896 57.0938 64.8438C57.5104 63.6771 57.7396 62.4479 57.7812 61.1562V29.5Z"
          fill="#FD774B"
        />
      </svg>
    </div>
  );
}
