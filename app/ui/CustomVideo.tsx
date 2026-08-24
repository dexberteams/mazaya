"use client";

import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { useEffect, useState } from "react";

const CustomVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const totalDuration = 92;

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= totalDuration) {
          setIsPlaying(false);
          return 0;
        }

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0",
    )}`;
  };

  return (
    <div className="group relative min-h-95 overflow-hidden rounded-md border border-yellow-400/50 lg:min-h-117.5">
      {/* IMAGE */}
      <div
        className={`absolute inset-0 ${
          isPlaying ? "video-image-animation" : ""
        }`}
      >
        <Image
          src="/home/video-bg.avif"
          alt="Customer success story"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isPlaying ? "bg-black/30" : "bg-black/55"
        }`}
      />

      {/* PLAY / PAUSE BUTTON */}
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className={`absolute top-1/2 left-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-black shadow-xl transition-all duration-500 ${
          isPlaying
            ? "scale-90 bg-yellow-400 opacity-90"
            : "scale-100 bg-white hover:scale-110 hover:bg-yellow-400"
        }`}
      >
        {isPlaying ? (
          <Pause size={25} fill="currentColor" />
        ) : (
          <Play size={28} fill="currentColor" className="ml-1" />
        )}
      </button>

      {/* Playing indicator */}
      <div
        className={`absolute top-5 left-5 z-20 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm transition-all duration-500 ${
          isPlaying ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

        <span className="text-[10px] font-medium uppercase tracking-widest text-white">
          Playing
        </span>
      </div>

      {/* Duration */}
      <span className="absolute bottom-24 left-5 z-20 bg-white/80 px-3 py-1 text-xs text-black backdrop-blur-sm">
        {formatTime(seconds)} / 01:32
      </span>

      {/* Progress */}
      <div className="absolute right-0 bottom-0 left-0 z-20 h-1 bg-white/20">
        <div
          className="h-full bg-yellow-400 transition-all duration-1000"
          style={{
            width: `${(seconds / totalDuration) * 100}%`,
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute right-0 bottom-0 left-0 z-20 flex items-end justify-between p-5">
        <div>
          <h3 className="text-sm font-medium text-white lg:text-base">
            Customer Success Story
          </h3>

          <p className="mt-2 text-xs text-white/60">Kestaa Logistics Partner</p>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .video-image-animation {
          animation: fakeVideo 12s ease-in-out infinite alternate;
        }

        @keyframes fakeVideo {
          0% {
            transform: scale(1);
          }

          25% {
            transform: scale(1.12) translateX(-2%);
          }

          50% {
            transform: scale(1.2) translateX(2%);
          }

          75% {
            transform: scale(1.12) translateX(-1%);
          }

          100% {
            transform: scale(1.2) translateX(2%);
          }
        }
      `}</style>
    </div>
  );
};

export default CustomVideo;
