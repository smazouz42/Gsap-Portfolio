"use client";
import React from "react";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          width: 100px;
          aspect-ratio: 1.154;
          position: relative;
          background: conic-gradient(
            from 120deg at 50% 64%,
            transparent,
            #ff1919 1deg 120deg,
            transparent 121deg
          );
          animation: l27-0 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
        }

        .loader:before,
        .loader:after {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          transform-origin: 50% 66%;
          animation: l27-1 1.5s infinite;
        }

        .loader:after {
          --s: -1;
        }

        @keyframes l27-0 {
          0%, 30% {
            transform: rotate(0);
          }
          70% {
            transform: rotate(120deg);
          }
          70.01%, 100% {
            transform: rotate(360deg);
          }
        }

        @keyframes l27-1 {
          0% {
            transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
          }
          30%, 70% {
            transform: rotate(calc(var(--s, 1) * 120deg))
              translate(calc(var(--s, 1) * -5px), 10px);
          }
          100% {
            transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
          }
        }
      `}</style>
    </div>
  );
}
