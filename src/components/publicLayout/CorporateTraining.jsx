import React, { useEffect, useRef } from "react";
import StartYourTransformationButton from "./StartYourTransformationButton";

export default function CorporateTraining() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // --- Intersection Observer for Scroll Animation ---
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && section.classList.add("visible"));
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // --- 3D Hover Effect on Image ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const imgWrap = imageRef.current;
      if (!imgWrap) return;
      const img = imgWrap.querySelector("img");
      const glow = imgWrap.querySelector(".ct-img-glow");
      const rect = imgWrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `scale(1.05) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
      glow.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };

    const reset = () => {
      const img = imageRef.current?.querySelector("img");
      const glow = imageRef.current?.querySelector(".ct-img-glow");
      if (img && glow) {
        img.style.transform = "scale(1.02) rotateX(0) rotateY(0)";
        glow.style.transform = "translate(0, 0)";
      }
    };

    const current = imageRef.current;
    if (current) {
      current.addEventListener("mousemove", handleMouseMove);
      current.addEventListener("mouseleave", reset);
      current.querySelector("img").style.transform = "scale(1.02)";
    }

    return () => {
      current?.removeEventListener("mousemove", handleMouseMove);
      current?.removeEventListener("mouseleave", reset);
    };
  }, []);

  const corporateTrainingImg =
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop";

  return (
    <section ref={sectionRef} className="ct-section">
      <div className="ct-container">
        <div className="ct-content">
          <h2 className="ct-title">
            Empower Teams with{" "}
            <span className="highlight">HG’s Talent Minds</span>
          </h2>

          <p className="ct-subtitle">
            Transform your organization with{" "}
            <b>AI-powered, outcome-driven</b> corporate training that builds
            measurable skills and unlocks performance at every level.
          </p>

          <div className="ct-features">
            <div className="ct-feature">🚀 Measurable ROI & Skill Uplift</div>
            <div className="ct-feature">🧠 Personalized Learning Paths</div>
            <div className="ct-feature">💼 Leadership Acceleration</div>
          </div>

          {/* ========================== */}
          {/* 🔹 StartYourTransformationButton */}
          {/* ========================== */}
          <StartYourTransformationButton
            label="Start Your Transformation →"
            to="/corporate-training" // ✅ fixed route
          />
          {/* ========================== */}
          {/* 🔹 End of StartYourTransformationButton */}
          {/* ========================== */}
        </div>

        <div ref={imageRef} className="ct-image">
          <div className="ct-img-glow"></div>
          <img
            src={corporateTrainingImg}
            alt="Corporate team training and collaboration"
          />
        </div>
      </div>

      <style>{`
        .ct-section {
          position: relative;
          height: 100vh;
          max-height: 750px;
          background: radial-gradient(circle at top left, #0f172a, #1e3a8a 60%, #2563eb);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.2s ease;
        }

        .ct-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ct-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          width: 90%;
          max-width: 1200px;
        }

        .ct-title {
          font-size: 2.8rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.2;
          text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        }

        .highlight {
          background: linear-gradient(90deg, #fde047, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ct-subtitle {
          font-size: 1.2rem;
          color: #e0e7ff;
          margin-bottom: 40px;
          max-width: 520px;
          line-height: 1.6;
        }

        .ct-features {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 40px;
        }

        .ct-feature {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          padding: 10px 18px;
          font-weight: 600;
          color: #facc15;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
          transition: 0.3s;
        }

        .ct-feature:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: scale(1.03);
        }

        .ct-image {
          flex: 1;
          position: relative;
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ct-img-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.25), transparent 70%);
          filter: blur(40px);
          transition: transform 0.3s ease;
          z-index: 1;
        }

        .ct-image img {
          position: relative;
          z-index: 2;
          width: 500px;
          border-radius: 16px;
          border: 3px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease;
        }

        @media (max-width: 850px) {
          .ct-container {
            flex-direction: column;
            text-align: center;
          }
          .ct-image {
            margin-top: 30px;
          }
          .ct-image img {
            width: 85%;
          }
        }

        @media (max-width: 600px) {
          .ct-title {
            font-size: 2rem;
          }
          .ct-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
