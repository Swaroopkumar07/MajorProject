import React from 'react'
import FeedBack from '../../Components/FeedBack/FeedBack'
import DashBoard from '../../Components/DashBoard/DashBoard'
import '../FeedBackScreen/FeedBackScreen.css'

export default function FeedBackScreen() {
  return (
    <div>
      <DashBoard/>
      <div className='feed_back_box'>
      <FeedBack/>
      </div>

    </div>
  )
}
