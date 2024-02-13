import React,{useState} from 'react';
import MainPage from '../src/Screens/MainPage/MainPage'
import { MainContext } from './ContextStore/MainContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from '../src/Screens/HomeScreen/HomeScreen'
import MarksUpdateScreen from '../src/Screens/MarksUpdateScreen/MarksUpdateScreen'
import FeedBack from '../src/Screens/FeedBackScreen/FeedBackScreen'

function App() {
  const [semester, setSemester] = useState("") ;
  const [subjects,setSubjects]= useState("")
  const [mid1Marks,setMid1Marks]= useState("")
  const [mid2Marks,setMide2Marks]=useState("")
  const [internal,setInternal]= useState("")
  const [external,setExternal]= useState("")
  const [feedBackMsg,setFeedBackMsg]=useState("")
  return (
    <div className="App">
    <MainContext.Provider value={{
    semester,setSemester,
    subjects,setSubjects,
    mid1Marks,setMid1Marks,
    mid2Marks,setMide2Marks,
    internal,setInternal,
    external,setExternal,
    feedBackMsg,setFeedBackMsg


    }} >

      {/* <MainPage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/MarksUpdateScreen" element={<MarksUpdateScreen/>}/>
          <Route path="/FeedBack" element={<FeedBack/>}/>
        </Routes>
      </Router>
    </MainContext.Provider>
    </div>
  );
}

export default App;
