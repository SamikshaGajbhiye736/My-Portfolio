import React, { useState, useEffect } from "react";
import { readData, writeData } from "../utils/localStorage";
import { motion } from "framer-motion";

const makeId = ()=>Date.now().toString(36) + Math.random().toString(36).slice(2,6);
const EmptyForm = { title:"", desc:"", tech:"", image:"" };

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const EditProjects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(EmptyForm);
  const [editId, setEditId] = useState(null);

  useEffect(()=>{
    const data = readData();
    setProjects(data.projects || []);
  },[]);

  const saveAll = (updated) => {
    const root = readData();
    root.projects = updated;
    writeData(root);
    setProjects(updated);
    alert("Projects saved");
  };

  const addProject = () => {
    if(!form.title) return alert("Enter title");
    const updated = [...projects, { id: makeId(), ...form }];
    saveAll(updated);
    setForm(EmptyForm);
  };

  const startEdit = (p) => {
    setEditId(p.id);
    setForm({ title: p.title, desc: p.desc, tech: p.tech, image: p.image });
  };

  const applyEdit = () => {
    const updated = projects.map(p => p.id === editId ? { ...p, ...form } : p);
    saveAll(updated);
    setEditId(null);
    setForm(EmptyForm);
  };

  const remove = (id) => {
    if(!window.confirm("Delete project?")) return;
    const updated = projects.filter(p=>p.id!==id);
    saveAll(updated);
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        padding: "30px",
        background: "#FFE9D9",
        borderRadius: "18px",
        border: "1px solid #FFD0BC",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)"
      }}
    >
      <h2 style={{color:"#FF6B35", fontWeight:"800", marginBottom:15}}>
        Manage Projects
      </h2>

      {/* FORM CARD */}
      <motion.div
        className="p-3 mb-3"
        whileHover={{ scale: 1.01 }}
        style={{
          background: "#fff5ef",
          borderRadius: "14px",
          border: "1px solid #ffcdb7",
          boxShadow: "0 4px 12px rgba(0,0,0,0.10)"
        }}
      >
        <input className="form-control mb-2" placeholder="Title"
          value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
        <textarea className="form-control mb-2" placeholder="Description" rows={3}
          value={form.desc} onChange={e=>setForm({...form, desc:e.target.value})} />
        <input className="form-control mb-2" placeholder="Tech stack"
          value={form.tech} onChange={e=>setForm({...form, tech:e.target.value})} />
        <input className="form-control mb-3" placeholder="Image URL"
          value={form.image} onChange={e=>setForm({...form, image:e.target.value})} />

        <button
          className="btn"
          style={{
            background:"#FF6B35", color:"#fff",
            borderRadius:"8px", padding:"8px 18px", fontWeight:"600"
          }}
          onClick={!editId ? addProject : applyEdit}
        >
          {!editId ? "Add Project" : "Save Changes"}
        </button>
      </motion.div>

      {/* PROJECT LIST */}
      <div>
        {projects.length===0 && <div style={{opacity:0.7}}>No projects yet</div>}

        {projects.map(p=>(
          <motion.div
            key={p.id}
            className="p-3 mb-2"
            whileHover={{ scale: 1.02 }}
            style={{
              background:"#fff5ef",
              border:"1px solid #ffcdb7",
              borderRadius:"14px",
              boxShadow:"0 4px 12px rgba(0,0,0,0.10)"
            }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 style={{color:"#FF6B35", fontWeight:"700"}}>{p.title}</h5>
                <div style={{opacity:0.8, color:"#333"}}>{p.desc}</div>
                <div style={{marginTop:6, fontSize:13, opacity:0.8, color:"#444"}}>
                  Tech: {p.tech}
                </div>
              </div>

              <div style={{display:"flex", gap:8}}>
                <button
                  className="btn btn-sm"
                  style={{border:"1px solid #FF6B35", color:"#FF6B35"}}
                  onClick={()=>startEdit(p)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={()=>remove(p.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EditProjects;
