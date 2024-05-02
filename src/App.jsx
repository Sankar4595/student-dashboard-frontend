
import React, { useContext } from 'react';
import Header from '../components/header/Header';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Application from '../pages/Applications/Application';
import Capstone from '../pages/Capstones/Capstone';
import Certificate from '../pages/Certificates/Certificate';
import Dashboard from '../pages/Dashboards/Dashboard';
import Interview from '../pages/Interviews/Interview';
import Leaderboard from '../pages/Leaderboards/Leaderboard';
import Leave from '../pages/Leaves/Leave';
import Mock from '../pages/Mocks/Mock';
import Portfolio from '../pages/Portfolios/Portfolio';
import Queries from '../pages/Queries/Queries';
import Requirements from '../pages/Requirements/Requirements';
import Syllabus from '../pages/Syllabus/Syllabus';
import Tasks from '../pages/Tasks/Tasks';
import Webcode from '../pages/Webcodes/Webcode';
import Navbar from '../components/navbars/Navbar';
import Roadmap from '../pages/Roadmaps/Roadmap';
import Profile from '../pages/Profiles/Profile';
import Login from '../pages/Logins/Login';
import DataContext from '../contexts/DataContext';
import LoggedOut from '../Pages/LoggedOuts/LoggedOut';
import Signup from '../pages/Signup/Signup';
import Forgot from '../pages/Forgots/Forgot';
import Reset from '../pages/Resets/Reset';
import ConfirmUser from '../pages/confirmUsers/ConfirmUser';
import Mentor from '../pages/Mentors/Mentor';



function App() {

  const { loggedUser } = useContext(DataContext);

  return (
    <>
      {
        loggedUser && !loggedUser.isMentor &&
        <>
          <Header />
          <Navbar />
        </>
      }
      <Routes>
        {
          !loggedUser &&
          <>
            <Route path='/' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset/:id' element={<Reset />} />
            <Route path='/confirm/:id' element={<ConfirmUser />} />
            <Route path='/*' element={<LoggedOut />} />
          </>
        }
        {
          loggedUser && !loggedUser.isMentor &&
          <>
            <Route path='/' element={<Roadmap />} />
            <Route path='/class' element={<Roadmap />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/task' element={<Tasks />} />
            <Route path='/webcode' element={<Webcode />} />
            <Route path='/capstone' element={<Capstone />} />
            <Route path='/queries' element={<Queries />} />
            <Route path='/requirements' element={<Requirements />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/application' element={<Application />} />
            <Route path='/interviewtasks' element={<Interview />} />
            <Route path='/leave' element={<Leave />} />
            <Route path='/mock' element={<Mock />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path='/learderboard' element={<Leaderboard />} />
            <Route path='/syllabus' element={<Syllabus />} />
            <Route path='/profile' element={<Profile />} />
          </>
        }
        {
          loggedUser && loggedUser.isMentor &&
          <>
            <Route path='/mentor' element={<Mentor />} />
          </>
        }

      </Routes>
    </>
  )
}

export default App
