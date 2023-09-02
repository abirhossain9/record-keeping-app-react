import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const TableBody = (props) => {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td><Button variant="contained" color="error" onClick={() => props.removeItem(props.index)}><RemoveIcon></RemoveIcon></Button></td>
    </tr>
  )
}

export default TableBody
