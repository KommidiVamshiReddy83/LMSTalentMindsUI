import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CourseManagement() {
  const location = useLocation();
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("trainerCourses");
    return saved ? JSON.parse(saved) : [];
  });

  const emptyCourse = {
    title: "",
    description: "",
    category: "",
    tags: "",
    level: "Beginner",
    duration: "",
    capacity: "",
    prerequisites: "",
    objectives: "",
    modules: [],
    startDate: "",
    thumbnail: "",
    status: "Draft",
  };

  const [course, setCourse] = useState(emptyCourse);
  const [editingIndex, setEditingIndex] = useState(null);
  const [toast, setToast] = useState("");

  // --- Pre-fill if Edit was triggered from MyCourses
  useEffect(() => {
    if (location.state?.editIndex !== undefined) {
      const idx = location.state.editIndex;
      const existing = JSON.parse(localStorage.getItem("trainerCourses") || "[]");
      if (existing[idx]) {
        setCourse({
          ...existing[idx],
          tags: (existing[idx].tags || []).join(", "),
        });
        setEditingIndex(idx);
        showToast("Editing existing course ✏️");
      }
    }
  }, [location.state]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((p) => ({ ...p, [name]: value }));
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setCourse((p) => ({ ...p, thumbnail: reader.result }));
    reader.readAsDataURL(file);
  };

  const addModule = () => {
    setCourse((p) => ({
      ...p,
      modules: [...p.modules, { title: "", lessons: "" }],
    }));
  };

  const updateModule = (i, field, val) => {
    setCourse((p) => ({
      ...p,
      modules: p.modules.map((m, idx) => (idx === i ? { ...m, [field]: val } : m)),
    }));
  };

  const removeModule = (i) => {
    setCourse((p) => ({
      ...p,
      modules: p.modules.filter((_, idx) => idx !== i),
    }));
  };

  const resetForm = () => {
    setCourse(emptyCourse);
    setEditingIndex(null);
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();

    if (!course.title.trim() || !course.description.trim()) {
      showToast("Please enter title & description!");
      return;
    }

    const formatted = {
      ...course,
      tags: (course.tags || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    if (editingIndex !== null) {
      const updated = [...courses];
      updated[editingIndex] = formatted;
      setCourses(updated);
      localStorage.setItem("trainerCourses", JSON.stringify(updated));
      showToast("Course updated successfully ✅");
    } else {
      const updated = [...courses, formatted];
      setCourses(updated);
      localStorage.setItem("trainerCourses", JSON.stringify(updated));
      showToast("Course added successfully 🎉");
    }

    resetForm();
  };

  // --- JSX ---
  return (
    <div className="page">
      <header className="banner">
        <h1>🎓 Course Management</h1>
        <p>
          Create, organize, and publish your training courses. Trainers manage
          course details here — no pricing, just learning.
        </p>
      </header>

      {toast && <div className="toast">{toast}</div>}

      <form className="form" onSubmit={handleAddOrUpdate}>
        <h2>{editingIndex !== null ? "Edit Course" : "Add New Course"}</h2>

        <div className="grid">
          <div className="left">
            <label>Course Title</label>
            <input
              name="title"
              value={course.title}
              onChange={handleChange}
              placeholder="e.g. Full Stack Development Bootcamp"
              required
            />

            <label>Description</label>
            <textarea
              name="description"
              value={course.description}
              onChange={handleChange}
              placeholder="Brief overview of the course content"
              rows="3"
              required
            />

            <div className="row">
              <div>
                <label>Category</label>
                <input
                  name="category"
                  value={course.category}
                  onChange={handleChange}
                  placeholder="e.g. Web Development"
                />
              </div>
              <div>
                <label>Level</label>
                <select
                  name="level"
                  value={course.level}
                  onChange={handleChange}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div>
                <label>Duration (hours)</label>
                <input
                  name="duration"
                  value={course.duration}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                />
              </div>
              <div>
                <label>Capacity (students)</label>
                <input
                  name="capacity"
                  value={course.capacity}
                  onChange={handleChange}
                  placeholder="e.g. 40"
                />
              </div>
            </div>

            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={course.startDate}
              onChange={handleChange}
            />

            <label>Prerequisites</label>
            <input
              name="prerequisites"
              value={course.prerequisites}
              onChange={handleChange}
              placeholder="e.g. Basic Programming Knowledge"
            />

            <label>Learning Objectives</label>
            <textarea
              name="objectives"
              value={course.objectives}
              onChange={handleChange}
              rows="2"
              placeholder="List what learners will achieve"
            />

            <label>Tags (comma separated)</label>
            <input
              name="tags"
              value={course.tags}
              onChange={handleChange}
              placeholder="e.g. JavaScript, React"
            />
          </div>

          <div className="right">
            <label>Modules</label>
            <div className="modules">
              {course.modules.map((m, i) => (
                <div key={i} className="module-row">
                  <input
                    placeholder="Module Title"
                    value={m.title}
                    onChange={(e) => updateModule(i, "title", e.target.value)}
                  />
                  <input
                    placeholder="No. of Lessons"
                    value={m.lessons}
                    onChange={(e) => updateModule(i, "lessons", e.target.value)}
                  />
                  <button
                    type="button"
                    className="remove"
                    onClick={() => removeModule(i)}
                  >
                    ✖
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn-outline"
                onClick={addModule}
              >
                + Add Module
              </button>
            </div>

            <label>Thumbnail</label>
            <div className="thumb-upload">
              {course.thumbnail ? (
                <img src={course.thumbnail} alt="thumb" />
              ) : (
                <div className="placeholder">No Image</div>
              )}
              <input type="file" accept="image/*" onChange={handleThumbnailUpload} />
            </div>

            <label>Status</label>
            <select
              name="status"
              value={course.status}
              onChange={handleChange}
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="btn-primary">
            {editingIndex !== null ? "Update Course" : "Add Course"}
          </button>
          <button
            type="button"
            className="btn-reset"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>

      <style>{`
        .page {
          background: #f8fafc;
          min-height: 100vh;
          padding-bottom: 50px;
          font-family: "Inter", system-ui;
        }
        .banner {
          background: linear-gradient(120deg, #2563eb, #1e40af);
          color: #fff;
          padding: 30px 24px;
          border-radius: 0 0 30px 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .banner h1 {
          margin: 0 0 6px;
          font-size: 1.8rem;
          font-weight: 800;
        }
        .banner p {
          max-width: 800px;
          color: #e2e8f0;
        }
        .toast {
          background: #16a34a;
          color: #fff;
          padding: 10px 16px;
          border-radius: 10px;
          margin: 20px auto;
          width: fit-content;
          font-weight: 600;
          animation: fadeInOut 2.5s ease;
        }
        @keyframes fadeInOut {
          0%,100%{opacity:0;transform:translateY(-10px);}
          10%,90%{opacity:1;transform:translateY(0);}
        }
        .form {
          background: rgba(255,255,255,0.95);
          margin: 20px auto;
          max-width: 1100px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          padding: 24px;
        }
        h2 { color:#1e293b; margin-bottom: 16px; }
        .grid { display:flex; flex-wrap:wrap; gap:24px; }
        .left { flex:2; min-width: 320px; display:flex; flex-direction:column; gap:10px; }
        .right { flex:1; min-width: 250px; display:flex; flex-direction:column; gap:10px; }
        input, textarea, select {
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          font-size: 0.95rem;
          outline:none;
          transition: all .2s;
        }
        input:focus, textarea:focus, select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.1);
        }
        .row { display:flex; gap:10px; }
        .modules { display:flex; flex-direction:column; gap:8px; }
        .module-row {
          display:flex; gap:8px; align-items:center;
          animation: fadeIn .3s ease;
        }
        @keyframes fadeIn {
          from{opacity:0;transform:translateY(-5px);} to{opacity:1;transform:translateY(0);}
        }
        .remove {
          background:#ef4444; border:none; color:#fff;
          padding:6px 10px; border-radius:8px; cursor:pointer;
        }
        .thumb-upload {
          position:relative;
          border:2px dashed #94a3b8;
          border-radius:12px;
          height:150px;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }
        .thumb-upload img {
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .thumb-upload input {
          position:absolute;
          inset:0;
          opacity:0;
          cursor:pointer;
        }
        .placeholder { color:#94a3b8; }
        .btn-primary {
          background:#2563eb;
          color:white;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          font-weight:700;
          cursor:pointer;
          transition: background .2s;
        }
        .btn-primary:hover { background:#1e40af; }
        .btn-reset {
          background:#e2e8f0;
          color:#1e293b;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          cursor:pointer;
          font-weight:600;
        }
        .btn-outline {
          background:none;
          border:1px dashed #94a3b8;
          border-radius:8px;
          padding:8px;
          color:#334155;
          font-weight:600;
          cursor:pointer;
        }
        .actions {
          display:flex;
          gap:10px;
          margin-top:20px;
        }
        @media(max-width:900px){ .grid{flex-direction:column;} }
      `}</style>
    </div>
  );
}
