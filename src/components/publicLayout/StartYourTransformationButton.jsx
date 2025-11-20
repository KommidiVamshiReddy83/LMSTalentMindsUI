import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartYourTransformationButton({
  label = "Start Your Transformation →",
  to = "/corporate-training",
}) {
  const navigate = useNavigate();

  return (
    <button
      className="start-your-transformation-btn"
      onClick={() => navigate(to)}
      title="Navigate to Corporate Training Details"
    >
      {label}
      <style jsx="true">{`
        .start-your-transformation-btn {
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          color: #0f172a;
          font-weight: 800;
          font-size: 1.1rem;
          padding: 14px 42px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(251, 191, 36, 0.4);
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .start-your-transformation-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.6);
          background: linear-gradient(90deg, #facc15, #fbbf24);
        }

        .start-your-transformation-btn:active {
          transform: translateY(0);
          box-shadow: 0 3px 10px rgba(251, 191, 36, 0.4);
        }

        @media (max-width: 600px) {
          .start-your-transformation-btn {
            width: 100%;
            font-size: 1rem;
            padding: 12px 0;
          }
        }
      `}</style>
    </button>
  );
}
