// import React, { useState, useEffect } from "react";
// import { readData, writeData } from "../utils/localStorage";

// const EditContact = () => {
//   const [form, setForm] = useState({ email: "", phone: "", address: "" });

//   useEffect(()=>{
//     const data = readData();
//     setForm(data.contact || { email:"", phone:"", address:"" });
//   },[]);

//   const save = () => {
//     const root = readData();
//     root.contact = form;
//     writeData(root);
//     alert("Contact saved");
//   };

//   return (
//     <div>
//       <h2 style={{color:"#ffc107"}}>Edit Contact</h2>

//       <div className="mb-3">
//         <label className="form-label text-white">Email</label>
//         <input className="form-control" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
//       </div>

//       <div className="mb-3">
//         <label className="form-label text-white">Phone</label>
//         <input className="form-control" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
//       </div>

//       <div className="mb-3">
//         <label className="form-label text-white">Address</label>
//         <textarea className="form-control" rows={2} value={form.address} onChange={e=>setForm({...form, address:e.target.value})} />
//       </div>

//       <button className="btn btn-warning" onClick={save}>Save Contact</button>
//     </div>
//   );
// };

// export default EditContact;
