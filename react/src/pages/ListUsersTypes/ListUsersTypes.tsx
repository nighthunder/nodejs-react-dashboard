import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import '../../styles.css';
import './styles.css';
import  { UserType } from "../../types/UserType";
import  { ChildProps } from "../../types/ChildProps";
import api from '../../services/api';

const UserTypeList: React.FC<ChildProps> = ({ reloadKey }) => {
  const [type, setType] = useState<UserType[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchType();
    console.log("it fetched again")
  }, [reloadKey]);

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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedPeople = type.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell>Description:</TableCell>
                <TableCell>Situation:</TableCell>
                <TableCell>Creation date:</TableCell>
                <TableCell>Update date:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPeople.map((type) => (
              <TableRow key={type.id}>
                <TableCell>{type.description}</TableCell>
                <TableCell>{type.situation}</TableCell>
                <TableCell>{type.created_at}</TableCell>
                <TableCell>{type.updated_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        count={type.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserTypeList;
