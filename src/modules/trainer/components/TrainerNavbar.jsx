// import React from "react";
import { Menu, Bell } from "lucide-react";

export default function TrainerNavbar({ onMenuClick, trainerName = "Trainer" }) {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        {/* Hamburger menu button */}
        <button
          onClick={onMenuClick}
          aria-label="Toggle Sidebar"
          style={styles.iconBtn}
        >
          <Menu size={22} />
        </button>

        {/* Logo / title */}
        <span style={styles.logoText}>TRAINER HUB</span>
      </div>

      <div style={styles.right}>
        {/* Search bar */}
        <div style={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search learners, courses..."
            style={styles.searchInput}
          />
        </div>

        {/* Notification icon */}
        <button style={styles.iconBtn} aria-label="Notifications">
          <Bell size={20} />
        </button>

        {/* Trainer avatar */}
        <div style={styles.avatar}>
          {trainerName ? trainerName.charAt(0).toUpperCase() : "T"}
        </div>
      </div>
    </header>
  );
}

/* ================= STYLES ================= */
const styles = {
  header: {
    height: "64px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "#fff",
    borderBottom: "1px solid #e2e8f0",
    boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
    zIndex: 1001,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#0f4f9f",
    padding: 6,
    borderRadius: 8,
  },
  logoText: {
    fontWeight: 900,
    fontSize: "1.1rem",
    color: "#0f4f9f",
    letterSpacing: 0.5,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  searchWrapper: {
    background: "#f1f5f9",
    borderRadius: 8,
    padding: "6px 10px",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  searchInput: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "0.9rem",
    color: "#334155",
    width: 200,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#0f4f9f",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    cursor: "pointer",
    userSelect: "none",
  },
};
