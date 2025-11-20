import React, { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Users,
  BarChart3,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export default function TrainerSidebar({ open, onClose, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 992px)").matches;

  useEffect(() => {
    if (isMobile()) onClose();
  }, [location.pathname]);

  const menu = [
    { to: "/trainer/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/trainer/my-courses", icon: BookOpen, label: "My Courses" },
    { to: "/trainer/course-management", icon: ClipboardList, label: "Course Management" },
    { to: "/trainer/student-progress", icon: Users, label: "Student Progress" },
    { to: "/trainer/earnings", icon: BarChart3, label: "Earnings" },
    { to: "/trainer/notifications", icon: Bell, label: "Notifications" },
    { to: "/trainer/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className={`trainer-sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">🧑‍🏫</div>
        <h2 className="title">Trainer Hub</h2>
      </div>

      <nav className="nav">
        <div className="nav-group-title">Main Menu</div>
        {menu.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            onClick={() => isMobile() && onClose()}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="bottom">
        <button
          className="logout"
          onClick={() => {
            onLogout();
            navigate("/login");
          }}
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      <style jsx="true">{`
        .trainer-sidebar {
          height: 100%;
          width: 100%;
          background: linear-gradient(180deg, #0f172a, #1e293b);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
        }

        .title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #e2e8f0;
        }

        .nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px;
          overflow-y: auto;
          scrollbar-width: none; /* Firefox */
        }

        .nav::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }

        .nav-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          padding: 14px 14px 4px 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          color: #cbd5e1;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.25s ease;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(4px);
          color: #fff;
        }

        .nav-item.active {
          background: rgba(37, 99, 235, 0.2);
          color: #fff;
          box-shadow: inset 4px 0 0 #3b82f6;
        }

        .bottom {
          padding: 16px 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logout {
          background: linear-gradient(90deg, #ef4444, #dc2626);
          color: #fff;
          border: none;
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .logout:hover {
          background: linear-gradient(90deg, #f87171, #b91c1c);
        }
      `}</style>
    </aside>
  );
}
