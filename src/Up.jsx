import React from 'react';
import { Link, useParams } from 'react-router-dom';

export function HistoryPage({ members }) {
  const { id } = useParams();
  const member = members.find(m => m.id == id);

  return (
    <>
      <div style={{ padding: '15px', background: '#272424' }}>
        <Link to="/" style={{ color: 'white' }}>Back to Members</Link>
      </div>
      <div style={{ padding: "20px" }}>
        <h2>{member?.memberName} - History</h2>
        <table border="1"  style={{ width: "100%", marginTop: "15px" }}>
          <thead>
            <tr><th>Date</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody>
            {member?.paymentHistory?.map((h, i) => (
              <tr key={i}>
                <td>{h.date}</td>
                <td>{member.amount}</td>
                <td>{h.status}</td>
              </tr>
            )) || <tr><td colSpan="3">No history found.</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}