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
import HireModel from '../../../HireModel'


import { useMutation,useQuery } from '@apollo/react-hooks';

import { getInitials } from 'helpers';
import { GET_USERS } from 'graphql/user';

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
  let { className, users, ...rest } = props;
  const { loading, error, data,refetch, networkStatus } = useQuery(
    GET_USERS,
    {
      notifyOnNetworkStatusChange: true,
    }
    );
    const [isOpen, setOpen] = useState(false);
    const [solver, setSolver] = useState(null);
    const handleOpen=()=>{
      
      setOpen(!isOpen)
    }
    const handleHire =(e,user)=>{
      console.log(user)
      setSolver(user)
      setOpen(true)
    }
  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSelectAll = event => {
    const { users } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map(user => user._id);
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
  if (!data) {return <p>Loading</p>}
  else { 
    users=data.getUsers.users
    console.log(users)
    console.log(typeof(users))
  }
  

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
      {users.slice(0, rowsPerPage).map(user => (
        <Grid item key={user._id} xs={12} sm={6} md={4}>
        <Card className={classes.root2}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={user.avatar}
          title={user.username}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions disableSpacing>
      <Button size="small" color="primary">
          View Details
        </Button>
        <Button className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}onClick={e => handleHire(e,user)}size="small" color="primary">
          Hire Me
        </Button>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Proffession: {user.profession}</Typography>
          <Typography paragraph>
            Degree:{user.degree}
          </Typography>
          <Typography paragraph>Proffession: {user.profession}</Typography>
          <Typography paragraph>
            Education:{user.degree}
          </Typography>
          <Typography paragraph>Proffession: {user.profession}</Typography>
          <Typography paragraph>
            latest Job:{user.degree}
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
            i have some profession in data analyst and data sciencefield i worked with japanesse company as a senior data scientist
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
      ))}
      </Grid>
      </Container>
    
    {/* <Card
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
                      checked={selectedUsers.length === users.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < users.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Names</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Registration date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user._id}
                    selected={selectedUsers.indexOf(user._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(user._id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, user._id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={user.avatar}
                        >
                          {getInitials(user.username)}
                        </Avatar>
                        <Typography variant="body1">{user.username}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.firstName}, {user.lastName}
                    </TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      {moment(user.createdAt).format('DD/MM/YYYY')}
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
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card> */}
    <HireModel isOpen={isOpen} handleClose={handleOpen} reverse={false} solver={solver} />
    </>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;
