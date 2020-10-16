import React from 'react';
import './App.css';
import Customer from './components/customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 500
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '이선우',
    'birthday': '960406',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김소연',
    'birthday': '960214',
    'gender': '여자',
    'job': '바보'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '정승규',
    'birthday': '961002',
    'gender': '남자',
    'job': '병신'
  }
]

class App extends React.Component{
  render(){
    const { classes } = this.props
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {customers.map(v => {return <Customer key={v.id} id={v.id} image={v.image} name={v.name} birthday={v.birthday} gender={v.gender} job={v.job}/>})}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);