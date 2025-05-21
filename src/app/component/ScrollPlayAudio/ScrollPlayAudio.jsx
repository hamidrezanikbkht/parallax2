'use client'
import { useEffect, useRef, useState } from "react";

export default function ScrollPlayAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [autoPlayed, setAutoPlayed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  useEffect(() => {
    // وقتی اولین اسکرول انجام شد و هنوز auto play نشده
    if (hasScrolled && !autoPlayed && !isPlaying) {
      audioRef.current?.play().then(() => {
        setIsPlaying(true);
        setAutoPlayed(true);
      }).catch(() => {
        // اگر خودکار پلی نشد (مثلا به خاطر سیاست مرورگر)، فقط autoPlayed رو می‌ذاریم true تا دوباره تلاش نکنه
        setAutoPlayed(true);
      });
    }

    // اگر isPlaying شد، صدا پلی میشه
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    } 
    
    // اگر isPlaying خاموش شد، صدا قطع و ریست میشه
    if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [hasScrolled, autoPlayed, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <>
      <button
        onClick={togglePlay}
        className="fixed top-7 right-4 p-3 bg-[rgb(5,21,40)] text-white rounded-full shadow-lg z-50 flex items-center justify-center "
        aria-label={isPlaying ? "Mute audio" : "Play audio"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            d="M11 5L6 9H2v6h4l5 4V5z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {isPlaying && (
            <path
              d="M15 9a4 4 0 010 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>

        {!isPlaying && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{ pointerEvents: "none" }}
          >
            <line x1="4" y1="20" x2="20" y2="4" strokeWidth={3} />
          </svg>
        )}
      </button>

      <audio ref={audioRef} src="/music/Julien_Dore_Le_Lac_320.mp3" preload="auto" />
    </>
  );
}
