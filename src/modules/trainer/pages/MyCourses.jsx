import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * MyCourses reads trainerCourses from localStorage and displays:
 * - thumbnail, title, description
 * - category, level, duration, startDate, capacity
 * - status (Draft/Published)
 * - Edit navigates to course management (you can implement prefill by route or shared state)
 */

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("trainerCourses");
    if (saved) setCourses(JSON.parse(saved));
  }, []);

  const handleDelete = (index) => {
    if (!window.confirm("Remove this course?")) return;
    const updated = courses.filter((_, i) => i !== index);
    setCourses(updated);
    localStorage.setItem("trainerCourses", JSON.stringify(updated));
  };

  return (
    <div className="courses">
      <h1>My Courses</h1>
      <p className="sub">Manage your published and draft courses.</p>

      {courses.length === 0 ? (
        <div className="empty">
          <p>No courses found.</p>
          <p>
            Go to{" "}
            <button className="link-btn" onClick={() => navigate("/trainer/course-management")}>
              Course Management
            </button>{" "}
            to add your first course!
          </p>
          <button
  className="edit"
  onClick={() =>
    navigate("/trainer/course-management", { state: { editIndex: i } })
  }
>
  Edit
</button>
        </div>
        
      ) : (
        <div className="grid">
          {courses.map((c, i) => (
            <div key={i} className="card">
              {c.thumbnail ? <img src={c.thumbnail} alt={c.title} className="thumb" /> : <div className="thumb placeholder">No Image</div>}
              <div className="card-body">
                <div className="header">
                  <h3>{c.title}</h3>
                  <span className={`status ${c.status.toLowerCase()}`}>{c.status}</span>
                </div>
                <p className="meta">{c.category} • {c.level} • {c.duration ? `${c.duration} hrs` : "—"}</p>
                <p className="desc">{c.description}</p>

                <div className="info-row">
                  {c.startDate && <span className="tag">Starts: {c.startDate}</span>}
                  {c.capacity && <span className="tag">Seats: {c.capacity}</span>}
                  {Array.isArray(c.tags) && c.tags.slice(0,3).map((t, idx) => (<span key={idx} className="tag">{t}</span>))}
                </div>

                <div className="card-actions">
                  <button onClick={() => { navigate("/trainer/course-management"); /* optionally pass index in state */ }} className="edit">Edit</button>
                  <button onClick={() => handleDelete(i)} className="delete">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .courses { padding:20px; font-family:Inter,system-ui,Arial; }
        .sub { color:#64748b; margin-bottom:16px; }
        .grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:16px; }
        .card { background:white; border-radius:12px; overflow:hidden; border:1px solid #e6eef8; display:flex; flex-direction:column; }
        .thumb { height:150px; width:100%; object-fit:cover; }
        .card-body { padding:12px; display:flex; flex-direction:column; gap:8px; }
        .header { display:flex; justify-content:space-between; align-items:center; }
        .header h3 { margin:0; font-size:1rem; }
        .meta { color:#64748b; font-size:0.85rem; }
        .desc { color:#334155; }
        .tag { background:#f1f5f9; padding:4px 8px; border-radius:6px; color:#334155; margin-right:6px; display:inline-block; }
        .info-row { display:flex; gap:8px; flex-wrap:wrap; }
        .card-actions { display:flex; gap:8px; margin-top:8px; }
        .edit { flex:1; background:#3b82f6; color:white; border:none; padding:8px; border-radius:8px; cursor:pointer; }
        .delete { flex:1; background:#ef4444; color:white; border:none; padding:8px; border-radius:8px; cursor:pointer; }
        .empty { background:white; padding:28px; border-radius:12px; border:1px dashed #cbd5e1; text-align:center; }
        .link-btn { background:none; border:none; color:#2563eb; cursor:pointer; font-weight:700; text-decoration:underline; }
      `}</style>
    </div>
  );
}
