import React from 'react'
import MultipleSelect from '../../Components/MultipleSelect/MultipleSelect'
import DashBoard from '../../Components/DashBoard/DashBoard'
import '../MarksUpdateScreen/MarksUpdateScreen.css'

export default function MarksUpdateScreen() {
  return (
    <div>
    <DashBoard/>
    <div className='marks_update_box'>
    <MultipleSelect/>
    </div>
       
    </div>
  )
}
