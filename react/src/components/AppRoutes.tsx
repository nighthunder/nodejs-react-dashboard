import React from "react";
import { Route, Routes, BrowserRouter  } from "react-router-dom";

import AddUser from "./AddUser/AddUser";
import AddProfessionalType from "./AddProfessionalType/AddProfessionalType";

const AppRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/add-professional" element={<AddUser />} />
          <Route path="/add-type" element={<AddProfessionalType />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
export default AppRoutes;