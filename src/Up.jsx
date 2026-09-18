import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function HistoryPage({ members }) {
  const { id } = useParams();
  const member = members.find(m => m.id == id);
  const historyData = member?.paymentHistory  || [];


 return (
    <div style={{ padding: '30px', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ color: 'darkblue', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Back to Tetant
        </Link>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333' }}>
          {member?.memberName ? `${member.memberName}'s Payment History` : 'Tetant Not Found'}
        </h2>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="payment history table">
          <TableHead>
            <TableRow sx={{ background: '#fff6f6' }}>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell align="right"><strong>Period</strong></TableCell>
              <TableCell align="right"><strong>Amount</strong></TableCell>
              <TableCell align="right"><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historyData.length > 0 ? (
              historyData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right">{row.period}</TableCell>
                  <TableCell align="right">₹{row.ammount}</TableCell>
                  <TableCell align="right">
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '12px',
                      background: row.status === 'PAID' ? '#d4edda' : '#fff3cd',
                      color: row.status === 'PAID' ? '#155724' : '#856404',
                      fontWeight: 'bold'
                    }}>
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 3, color: '#777' }}>
                  No payment history found for this member.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}