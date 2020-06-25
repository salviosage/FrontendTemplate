import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  CardActionArea,
  CardMedia,
  Button ,
  IconButton,
  Container,
  Collapse,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import HireModel from '../../../HireModel'


import { useMutation,useQuery } from '@apollo/react-hooks';

import { getInitials } from 'helpers';
import { GET_HIRES } from 'graphql/hire';

const useStyles = makeStyles(theme => ({
  root: {},
  root2: {
    maxWidth: 345,
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UsersTable = props => {
  let { className, hires, ...rest } = props;
  const { loading, error, data,refetch, networkStatus } = useQuery(
    GET_HIRES,
    {
      notifyOnNetworkStatusChange: true,
    }
    );
    // const [isOpen, setOpen] = useState(false);
    // const [solver, setSolver] = useState(null);
    // const handleOpen=()=>{
      
    //   setOpen(!isOpen)
    // }
    // const handleHire =(e,hire)=>{
    //   console.log(hire)
    //   setSolver(hire)
    //   setOpen(true)
    // }
  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSelectAll = event => {
    const { hires } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = hires.map(hire => hire._id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };
  if (loading) {return <p>Loading</p>}
  if(error) {return <p>error accured while feaching data</p>}
  else { hires=data.getHires.hires}
  

  return (
    <>
      
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUsers.length === hires.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < hires.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>SOlver</TableCell>
                  <TableCell>Company Email</TableCell>
                  <TableCell>Company Names</TableCell>
                  <TableCell>Company Phone</TableCell>
                  <TableCell>Req date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hires.slice(0, rowsPerPage).map(hire => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={hire._id}
                    selected={selectedUsers.indexOf(hire._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(hire._id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, hire._id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={hire.solver.avatar}
                        >
                          {/* {hire.solver.username} */}
                          {/* {getInitials(hire.solver.username)} */}
                        </Avatar>
                        <Typography variant="body1">{hire.solver.username}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{hire.companyEmail}</TableCell>
                    <TableCell>
                       {hire.companyName}
                    </TableCell>
                    <TableCell>{hire.companyPhone}</TableCell>
                    <TableCell>
                      {moment(hire.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={hires.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
    {/* <HireModel isOpen={isOpen} handleClose={handleOpen} solver={solver} /> */}
    </>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
};

export default UsersTable;
