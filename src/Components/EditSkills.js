import React, { useState, useEffect } from "react";
import { readData, writeData } from "../utils/localStorage";

const makeId = ()=>Date.now().toString(36) + Math.random().toString(36).slice(2,6);

const EditSkills = () => {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: "", level: 70 });
  const [editId, setEditId] = useState(null);

  useEffect(()=>{
    const data = readData();
    setSkills(data.skills || []);
  },[]);

  const saveAll = (updated) => {
    const root = readData();
    root.skills = updated;
    writeData(root);
    setSkills(updated);
    alert("Skills updated");
  };

  const addSkill = () => {
    if(!form.name) return alert("Enter skill name");
    const updated = [...skills, { id: makeId(), name: form.name, level: Number(form.level)}];
    saveAll(updated);
    setForm({ name:"", level:70 });
  };

  const startEdit = (s) => {
    setEditId(s.id);
    setForm({ name: s.name, level: s.level });
  };

  const applyEdit = () => {
    const updated = skills.map(s => s.id === editId ? {...s, name: form.name, level: Number(form.level)} : s);
    saveAll(updated);
    setEditId(null);
    setForm({ name:"", level:70 });
  };

  const remove = (id) => {
    if(!window.confirm("Delete skill?")) return;
    const updated = skills.filter(s=>s.id!==id);
    saveAll(updated);
  };

  return (
    <div style={{
      background: "#FCE6D8",
      padding: "28px",
      borderRadius: "16px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
    }}>
      
      <h2 style={{
        color: "#1E1E1E",
        fontWeight: "700",
        marginBottom: "18px"
      }}>
        Manage Skills
      </h2>

      <div style={{display:"flex", gap:12, marginBottom:18}}>
        <input
          className="form-control"
          placeholder="Skill name"
          value={form.name}
          onChange={e=>setForm({...form, name:e.target.value})}
          style={{background:"white", color:"#1E1E1E", border:"1px solid #f0cbb8"}}
        />

        <input
          type="number"
          className="form-control"
          style={{
            width:120,
            background:"white",
            color:"#1E1E1E",
            border:"1px solid #f0cbb8"
          }}
          value={form.level}
          onChange={e=>setForm({...form, level:e.target.value})}
        />

        {!editId ? (
          <button
            className="btn"
            onClick={addSkill}
            style={{background:"#FF7F50", color:"#fff", fontWeight:600}}
          >
            Add
          </button>
        ) : (
          <button
            className="btn"
            onClick={applyEdit}
            style={{background:"#FF7F50", color:"#fff", fontWeight:600}}
          >
            Apply
          </button>
        )}
      </div>

      <div>
        {skills.length===0 && <div style={{opacity:0.7, color:"#1E1E1E"}}>No skills yet</div>}

        {skills.map(s=>(
          <div
            key={s.id}
            className="d-flex align-items-center justify-content-between mb-2 p-3"
            style={{
              background:"white",
              borderRadius:10,
              border:"1px solid #f1d2c4",
              boxShadow:"0 4px 10px rgba(0,0,0,0.05)"
            }}
          >
            <div>
              <div style={{color:"#1E1E1E", fontWeight:600}}>{s.name}</div>
              <div style={{color:"#555", opacity:0.8}}>Level: {s.level}%</div>
            </div>

            <div style={{display:"flex", gap:8}}>
              <button className="btn btn-sm" style={{border:"1px solid #FF7F50", color:"#FF7F50"}} onClick={()=>startEdit(s)}>
                Edit
              </button>
              <button className="btn btn-sm" style={{border:"1px solid red", color:"red"}} onClick={()=>remove(s.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditSkills;
