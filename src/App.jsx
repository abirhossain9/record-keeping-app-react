import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TableBody from './components/TableBody';

function App() {
  const [name, setName] =  useState('')
  const [email, setEmail] =  useState('')
  const [data, setData] = useState([])

  const addData = () => {
    setData([...data, {name, email}])
    setName('')
    setEmail('')
  }
  const removeItem = (index) => {
    let arr = data
    arr.splice(index, 1)
    setData([...arr])
  }
  return (
    <>
      <Header></Header>
      <div className="container-fluid" >
        <div className='row'>
        <div className='col-md-8 text-center offset-md-3 mt-4'>
        <Stack spacing={5} direction="row">
            <TextField id="outlined-basic" 
            value={name} 
            onChange={(event) => setName(event.target.value)} 
            label="Name" 
            variant="outlined" 
            />
            <TextField 
            id="outlined-basic" 
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
            label="Email" 
            variant="outlined" 
            />
            <Button variant="contained" color="success" onClick={()=>addData()}><AddIcon></AddIcon></Button>
            <Button variant="contained" color="error"><RemoveIcon></RemoveIcon></Button>
         </Stack>   
        </div>
        </div>
        <div className='row'>
        <div className='col-md-8 text-center offset-md-2 mt-4'>
          <table className="table table-bordered border-primary">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {
              data.map((el, index)=>{
                return(
                  <TableBody key={index} index={index} name={el.name} email={el.email} removeItem={removeItem}></TableBody>
                )
              })
            }
          </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
   
  );
}

export default App;
