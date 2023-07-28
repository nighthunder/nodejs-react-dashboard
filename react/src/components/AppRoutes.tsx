import React from "react";
import { Route, Routes, BrowserRouter  } from "react-router-dom";

import AddUser from "../pages/AddUser/AddUser";
import Login from "../pages/Login/Login";
import AddSituation from "../pages/AddSituation/AddSituation";
import AddUsersType from "../pages/AddUsersType/AddUsersType";

const AppRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/add-situation" element={<AddSituation />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-type" element={<AddUsersType />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loggout" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
export default AppRoutes;