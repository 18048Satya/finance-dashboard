import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(name, Id,Date,Status,amt) {
  return { name, Id,Date,Status,amt };
}

const rows = [
  createData('UPI Pay ', 'T34983As09i635', '12/12/2023', 'Paid',14000),
  createData('Fund Transfer', 'ABI903209829025', '13/12/2023', 'Recieved',75000),
  createData('Net banking', 'GHUR7598759872', '13/12/2023', 'Paid',30000),
  createData('Credit card', 'SDJH54960936907', '14/12/2023', 'Paid',650),
  createData('Fund Transfer', 'FGTHJB9875987', '15/12/2023', 'Recieved',3000),
];
const applystyles =(type)=>{
    if(type === 'Paid')
    {
      return{
        color:'red',
      }
    } else if(type ==='Recieved'){

        return{
            color:'green',
        }
    }

}

export default function BasicTable() {
  return (
    <div className="Table">
    <h3>Recent Transactions</h3>
    <TableContainer component={Paper}
    style={{boxShadow : '0px 13px 20px 0px #80808029', borderRadius:'10px'} }
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transactions Types</TableCell>
            <TableCell align="left">TransactionsId</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.Id}</TableCell>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">
                <span className='type' style={applystyles(row.Status)} >{row.Status}</span>
              </TableCell>
              <TableCell align="left">{row.amt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );

}
