import * as React from 'react';
import ResponsiveHeader from '../../components/ResponsiveHeader/ResponsiveHeader';
import AddUsersTypeForm from '../AddUsersTypeForm/AddUsersTypeForm';
import ResponsiveFooter from '../../components/ResponsiveFooter/ResponsiveFooter';
import './styles.css';
function AddUserType() {
return (
    <div>
        <ResponsiveHeader></ResponsiveHeader>
        <h2>Users classes</h2>
        <AddUsersTypeForm></AddUsersTypeForm>
        <ResponsiveFooter></ResponsiveFooter>
    </div>

);
}
export default AddUserType;