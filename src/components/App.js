import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import PostsList from "./components/PostsList";
import UsersList from "./components/UsersList";
import NotificationsList from "./components/NotificationsList";
import AddPostForm from "./components/AddPostForm";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>GenZ</h1>
          <nav>
            <NavLink to="/" className="nav-link">Posts</NavLink>
            <NavLink to="/users" className="nav-link">Users</NavLink>
            <NavLink to="/notifications" className="nav-link">Notifications</NavLink>
          </nav>
          <button className="refresh-btn">Refresh Notifications</button>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<><AddPostForm /><PostsList /></>} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/notifications" element={<NotificationsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
