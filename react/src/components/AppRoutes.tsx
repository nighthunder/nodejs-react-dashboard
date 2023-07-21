import React from "react";
import { Route, Routes, BrowserRouter  } from "react-router-dom";

import AddUser from "../pages/AddUser/AddUser";
import AddUsersType from "../pages/AddUsersType/AddUsersType";

const AppRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/add-professional" element={<AddUser />} />
          <Route path="/add-type" element={<AddUsersType />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
export default AppRoutes;