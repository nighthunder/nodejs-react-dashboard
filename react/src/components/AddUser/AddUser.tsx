import * as React from 'react';
import ResponsiveHeader from '../ResponsiveHeader/ResponsiveHeader';
import AddProfessionalForm from '../AddProfessionalForm/AddProfessionalForm';
import ResponsiveFooter from '../ResponsiveFooter/ResponsiveFooter';
import './styles.css';

function AddUser() {
return (
    <div>
        <ResponsiveHeader></ResponsiveHeader>
        <h2>Users</h2>
        <AddProfessionalForm></AddProfessionalForm>
        <ResponsiveFooter></ResponsiveFooter>
    </div>

);
}
export default AddUser;