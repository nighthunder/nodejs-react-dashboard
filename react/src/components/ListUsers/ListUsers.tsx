import React, { useEffect, useState } from 'react';
import { MenuItem, FormControl, InputLabel, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import '../../styles.css';
import './styles.css';
import api from '../../services/api';
import  { User } from "../../types/User";
import  { UserType } from "../../types/UserType";
import  { UserWithType } from "../../types/UserWithType";
import  { ChildProps } from "../../types/ChildProps";

const ListUsers: React.FC<ChildProps> = ({ reloadKey }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [type, setType] = useState<UserType[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [formData, setFormData] = useState<UserWithType>({
    id: 1,
    type: 1
  });

  useEffect(() => {
    fetchPeople();
    fetchType();
    console.log("it fetched again")
  }, [reloadKey]);

  const fetchPeople = async () => {
    try {
      await api.get('/users').then(response => {
        console.log( "Users:"+ response.data);
        const data = response.data
        setUsers(data);
      }).catch(error => {
        console.error(error);
      });
      
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchType = async () => {
    try {
      await api.get('/types').then(response => {
        console.log(response.data);
        const data = response.data;
        setType(data); 
      }).catch(error => {
        console.error(error);
      });
    } catch (error) {
      console.error('Error fetching type:', error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  
  const handleSelectChange = async (e: any, person_id: number) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      ["id"]: person_id
    }));
    console.log("form data", formData);

    const params = {
      "id": person_id,
      "type": value
    }

    try {
      const response = await fetch('http://localhost:5000/update_professional_type', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (response.ok) {
        console.log("Correctly submitted!");
      }

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedPeople = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell>ID:</TableCell>
                <TableCell>Name:</TableCell>
                <TableCell>Phone:</TableCell>
                <TableCell>Class:</TableCell>
                <TableCell>Email:</TableCell>
                <TableCell>Situation:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPeople.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.id}</TableCell>
                <TableCell>{person.firstname} {person.lastname}</TableCell>
                <TableCell>{person.phone}</TableCell>
                <TableCell>
                  <FormControl variant="outlined" sx={{ flex: '5' }}>
                    <Select id="type" name="type" labelId="type" label="Tipo" value = {formData["id"] === person.id ? formData["type"]: person.type } onChange={(e) => handleSelectChange(e, person.id)}>
                      {type.map((t) => (
                        <MenuItem key={t.id} value={t.id}>{t.id}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.situation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ListUsers;
