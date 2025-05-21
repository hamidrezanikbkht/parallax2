import React from "react";

export default function Category({ category }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-40 transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        category ? "translate-x-0" : "-translate-x-full"
      } perspective-3xl`}
    >
      <div
        className="relative w-full h-full bg-black/70 backdrop-blur-2xl shadow-inner"
        style={{
          backgroundImage:
            "url(/f5ce8cb6-24a6-4aaf-b49a-83889b2d25fd_CLOS-DES-SENS-MATTHIEU-CELLARD-SALLE-97.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformStyle: "preserve-3d",
          animation: category ? "fadeInBg 1.5s ease forwards" : "",
        }}
      >
        {/* نور لوکس متحرک */}
        <div className="absolute inset-0 pointer-events-none animate-light-overlay z-10" />

        {/* محتوای منو */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full gap-10 px-4 text-white">
          <h1 className="text-6xl font-thin tracking-[.4em] text-center text-yellow-100 animate-fade-in delay-[0.4s] drop-shadow-lg">
            Le Menu
          </h1>
          {["Accueil", "À propos", "La Carte", "Réservation", "Contact"].map(
            (item, i) => (
              <p
                key={i}
                className="text-3xl md:text-4xl font-light tracking-wide cursor-pointer opacity-0 hover:text-yellow-400 hover:scale-110 transition-all duration-700 animate-slide-up"
                style={{
                  animationDelay: `${i * 0.3 + 0.6}s`,
                  animationFillMode: "forwards",
                }}
              >
                {item}
              </p>
            )
          )}
        </div>
      </div>

      {/* استایل‌های پیشرفته */}
      <style jsx>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95) rotateX(15deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInBg {
          0% {
            opacity: 0;
            filter: blur(20px);
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: scale(1);
          }
        }

        @keyframes light-overlay {
          0% {
            background-position: -200% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-light-overlay {
          background-image: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: light-overlay 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
