import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef(null);
  const moreButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  /* ✅ Detect Screen Size */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ✅ Close Menus on Route Change */
  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location]);

  /* ✅ Click Outside to Close */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !moreButtonRef.current?.contains(e.target)
      ) {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ✅ Hide Header on Scroll */
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY + 10) setHidden(true);
          else if (currentScrollY < lastScrollY - 5) setHidden(false);
          lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
          ticking = false;
        });
        ticking = true;
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setHidden(false), 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  /* ✅ Prevent Page Scroll When Dropdown Opens */
  useEffect(() => {
    if (moreOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }, [moreOpen]);

  
  return (
    <header className={`tm-header ${hidden ? "hidden" : ""}`}>
      <nav className="tm-nav" ref={menuRef}>
        {/* LOGO */}
        <Link to="/" className="tm-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-yellow">HG’s</span>
          <span className="logo-blue">TalentMinds</span>
        </Link>

        {/* SEARCH BAR */}
        {!isMobile && (
          <div className="tm-center">
            <div className="tm-search">
              <input
                type="text"
                placeholder="Search for courses, mentors, skills..."
              />
              <button className="tm-search-btn" aria-label="Search">
                🔍
              </button>
            </div>
          </div>
        )}

        {/* NAV LINKS */}
        <div className={`tm-links ${menuOpen ? "open" : ""}`}>
          <Link to="/explore" onClick={() => setMenuOpen(false)}>
            <div className="tm-explore-icon">
              {[...Array(9)].map((_, i) => (
                <span key={i} className="tm-dot-waffle" />
              ))}
            </div>
            <span>Explore</span>
          </Link>

          <Link to="/resources" onClick={() => setMenuOpen(false)}>
            Resources
          </Link>
          <Link to="/business" onClick={() => setMenuOpen(false)}>
            For Business
          </Link>
          

          {/* MORE MENU */}
          <div
            className="tm-more-area"
            onMouseEnter={() => !isMobile && setMoreOpen(true)}
            onMouseLeave={() => !isMobile && setMoreOpen(false)}
          >
            <button
              className="tm-more-btn"
              onClick={() => (isMobile ? setMoreOpen(!moreOpen) : null)}
              ref={moreButtonRef}
            >
              More <span className="tm-more-arrow">{moreOpen ? "▲" : "▼"}</span>
            </button>

            {moreOpen && (
              <div
                className={`tm-more-dropdown ${isMobile ? "mobile" : "desktop"}`}
                ref={dropdownRef}
              >
                <Link to="/reviews" onClick={() => setMoreOpen(false)}>
                  Learner Stories
                </Link>
                <Link to="/hire" onClick={() => setMoreOpen(false)}>
                  Hire Talent
                </Link>
                <Link to="/become-mentor" onClick={() => setMoreOpen(false)}>
                  Become a Mentor
                </Link>
                <Link to="/partnerships" onClick={() => setMoreOpen(false)}>
                  Partnerships
                </Link>
                <Link to="/scholarships" onClick={() => setMoreOpen(false)}>
                  Scholarships
                </Link>
                <Link to="/faq" onClick={() => setMoreOpen(false)}>
                  FAQ
                </Link>
                <Link to="/support" onClick={() => setMoreOpen(false)}>
                  Support
                </Link>
              </div>
            )}
          </div>

          <Link to="/login" className="tm-login-btn" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="tm-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* STYLES */}
      <style>{`
        .tm-header {
          background: #fff;
          border-bottom: 1px solid #dee2e6;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }
        .tm-header.hidden {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }
        .tm-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
          height: 70px;
          padding: 0 24px;
        }
        .tm-logo {
          font-size: 1.6rem;
          font-weight: 700;
          display: flex;
          align-items: center;
        }
        .logo-yellow { color: #fbbf24; margin-right: 5px; }
        .logo-blue { color: #2563eb; }
        .tm-center { flex: 1; display: flex; justify-content: center; }
        .tm-search {
          display: flex;
          align-items: center;
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 20px;
          overflow: hidden;
          width: 400px;
          max-width: 100%;
        }
        .tm-search input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 10px 15px;
          font-size: 0.95rem;
          outline: none;
        }
        .tm-search-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .tm-search-btn:hover { background: #1e40af; }

        /* LINKS */
        .tm-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .tm-links a {
          color: #495057;
          font-weight: 500;
          text-decoration: none;
        }
        .tm-links a:hover { color: #2563eb; }

        /* MORE MENU */
        .tm-more-area { position: relative; }
        .tm-more-btn {
          background: none;
          border: none;
          color: #495057;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .tm-more-btn:hover { color: #2563eb; }

        /* Dropdown — fixed to prevent layout shift */
        .tm-more-dropdown {
          position: fixed !important;
          top: 70px; /* Just below header */
          right: 120px; /* Adjust based on your layout */
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          min-width: 220px;
          z-index: 10000;
          overflow: hidden;
          max-height: calc(100vh - 100px);
        }
        .tm-more-dropdown a {
          padding: 10px 18px;
          color: #212529;
          white-space: nowrap;
          text-decoration: none;
        }
        .tm-more-dropdown a:hover {
          background: #f8f9fa;
          color: #2563eb;
        }

        /* Disable body scroll when dropdown open */
        body.no-scroll { overflow: hidden; }

        /* LOGIN */
        .tm-login-btn {
          color: #212529;
          padding: 9px 20px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .tm-login-btn:hover {
          background: #eff6ff;
          color: #2563eb;
        }

        /* HAMBURGER */
        .tm-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .tm-hamburger span {
          width: 25px;
          height: 2px;
          background: #2563eb;
        }

        /* RESPONSIVE */
        @media (max-width: 800px) {
          .tm-center { display: none; }
          .tm-links {
            display: none;
            flex-direction: column;
            background: #fff;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            padding: 20px;
            gap: 16px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.08);
            z-index: 9999;
            height: calc(100vh - 70px);
            overflow-y: auto;
          }
          .tm-links.open { display: flex; }
          .tm-hamburger { display: flex; }
        }
      `}</style>
    </header>
  );
}
