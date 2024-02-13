import React, { useContext, useState } from 'react'
import './FeedBack.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { MainContext } from '../../ContextStore/MainContext';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
export default function FeedBack() {

  const {feedBackMsg,setFeedBackMsg}=useContext(MainContext)

  const hanldeFeedBackMsg=(event)=>{
    setFeedBackMsg(event.target.value)

  }

  const handleSendButton =()=>{
    if(feedBackMsg){
      toast.success("FeedBack Has Sent Successfully")
    }
    else if(!feedBackMsg){
      toast.error("Please Enter Your Feedback")
    }
  }
  return (
    <div className='feedback_container'>
    <p>Enter Your FeedBack:</p>
    <textarea
    className='feedback_input'
    placeholder='Enter Your FeedBack'
    value={feedBackMsg}
    onChange={hanldeFeedBackMsg}
    />
    <div className='button_send'>
    <Button variant="contained" endIcon={<SendIcon />}  onClick={handleSendButton}>
        Send
      </Button>
    </div>
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
  )
}
