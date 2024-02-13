import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import '../MultipleSelect/MultipleSelect.css';
import MarksUpdate from '../MarksUpdate/MarksUpdate';
import { MainContext } from '../../ContextStore/MainContext';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const sem = ['a', 'b', 'c'];
const subject = ['1', '2', '3'];

export default function MultipleSelect(props) {
  const { semester, setSemester,
    subjects,setSubjects,
    mid1Marks,setMid1Marks,
    mid2Marks,setMide2Marks,
    internal,setInternal,
    external,setExternal,
   } = useContext(MainContext);
  

  const handleclickButton = () => {
   if(semester && subjects && mid1Marks && mid2Marks && internal && external){
    toast.success("Marks Added Sucessfully")
   }
   else if(!semester){
    toast.error("Please Choose Your Semester")
   }
   else if(!subjects){
    toast.error("Please Choose Your Subject")
   }
   else if(!mid1Marks){
    toast.error("Please Enter Your Mid1 Marks")
   }
   else if(!mid2Marks){
    toast.error("Please Enter Your Mid2 Marks")
   }
   else if(!internal){
    toast.error("Please Enter Your internal Marks")
   }
   else if(!external){
    toast.error("Please Enter Your external Marks")
   }
  };

  return (
    <div className='Multiple_container'>
      <div className='Matter'>
        <p className='multipleselect'>Choose your semester:</p>
        <FormControl>
          {!semester && <InputLabel id='demo-simple-select-label' shrink={false}>Semester</InputLabel>}
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className='select_input'
            sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
          >
            {sem.map((e) => (
              <MenuItem key={e} value={e}>{e}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className='Matter'>
        <p className='multipleselect'>Choose your subject:</p>
        <FormControl>
          {!subjects && <InputLabel id='demo-simple-select-label' shrink={false}>Subject</InputLabel>}
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
            className='select_input'
            sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
          >
            {subject.map((e) => (
              <MenuItem key={e} value={e}>{e}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className='Matter'>
        <p className='multipleselect'>Enter your mid1 marks:</p>
        <input
          type='number'
          className='marks_input'
          placeholder='Enter your marks'
          value={mid1Marks}
          onChange={(e) => setMid1Marks(e.target.value)}
        />
      </div>

      <div className='Matter'>
        <p className='multipleselect'>Enter your mid2 marks:</p>
        <input
          type='number'
          className='marks_input'
          placeholder='Enter your marks'
          value={mid2Marks}
          onChange={(e) => setMide2Marks(e.target.value)}
        />
      </div>
      <div className='Matter'>
        <p className='multipleselect'>Enter your internal marks:</p>
        <input
          type='number'
          className='marks_input'
          placeholder='Enter your marks'
          value={internal}
          onChange={(e) => setInternal(e.target.value)}
        />
      </div>
      <div className='Matter'>
        <p className='multipleselect'>Enter your external marks:</p>
        <input
          type='number'
          className='marks_input'
          placeholder='Enter your marks'
          value={external}
          onChange={(e) => setExternal(e.target.value)}
        />
      </div>

      <div className='upload_button'>
        <Button variant='contained' onClick={handleclickButton}>Update</Button>
      </div>
      {/* <div className='marks_table'>
        <MarksUpdate data={allMarks} />
      </div> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 2000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </div>
  );
}
