import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import React, { useState } from 'react';
import { members as defaultMembers } from './Data';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HistoryPage } from './Up';

function App(){
  const [members, setMembers] = useState(defaultMembers);

  function deleteMember(id){
    setMembers(members.filter(m => m.id !== id));
  }

  function updateMember(id){
    const index = members.findIndex(m => m.id === id);
    if (index === -1) return;
    
    const updatedMembers = [...members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      status: updatedMembers[index].status === "ACTIVE" ? "INACTIVE" : "ACTIVE"
    };
    setMembers(updatedMembers);
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <div style={{ padding: '15px', borderBottom: '1px solid #ccc', background: '#272424' }}>
              <Link to="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
              <Link to="/" style={{ color: 'white' }}>Members</Link>
            </div>

            <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
              <h2>Member List </h2>

              <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
                <thead>
                  <tr style={{ background: "#f2f2f2" }}>
                    <th>Name</th>
                    <th>Domain</th>
                    <th>Phone</th>
                    <th>plan</th>
                    <th>billing</th>
                    <th>paymentstatus</th>
                    <th>amount</th>
                    <th>Status</th>
                    <th>Actions (Update / Delete)</th>
                    <th>history</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m) => (
                    <tr key={m.id}>
                      <td>{m.memberName}</td>
                      <td>{m.domain}</td>
                      <td>{m.phone}</td>
                      <td>{m.plan}</td>
                      <td>{m.billing}</td>
                      <td>{m.paymentStatus}</td>
                      <td>{m.amount}</td>
                      <td>{m.status}</td>
                      <td>
                        <button onClick={() => updateMember(m.id)} style={{ marginRight: "5px" }}>
                          Toggle Status
                        </button>
                        <button onClick={() => deleteMember(m.id)} style={{ color: "red" }}>
                          Delete
                        </button>
                      </td>
                      <td>
                        <Link to={`/history/${m.id}`}>
                          View History
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        } />
        <Route path="/history/:id" element={<HistoryPage members={members} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;