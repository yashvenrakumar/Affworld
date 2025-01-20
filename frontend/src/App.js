// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./input.css";
import TaskBoard from "./pages/Tasks/TaskBoard";
import Feed from "./pages/feeds/feeds";
import Register from "./pages/Auth/Register";

import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import CreateTask from "./pages/Tasks/CreateTask";
import ShowFeed from "./pages/feeds/showFeed";
import FeedingView from "./pages/feeds/feedingView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/tasks" element={<CreateTask />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/showFeed" element={<ShowFeed />} />
        <Route path="/feeds" element={<FeedingView />} />
      </Routes>
    </Router>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
