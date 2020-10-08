import React from 'react';
import { useSelector } from 'react-redux';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import NumberFormat from 'react-number-format';
import { useStyles } from '../../Hooks';
import styles from './styles';

const TalentsTable = () => {
  const classes = useStyles(styles);
  const { candidatesList } = useSelector(state => state.candidates);
  const formatSalary = (salary) => {
    const formatted = Math.round(salary / 1000);
    return formatted >= 1 ? { salary: formatted, suffix: true } : { salary, suffix: false };
  }
  return (
    <TableContainer style={{ maxHeight: '50%', paddingLeft: '65px' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Industry</TableCell>
            <TableCell>Job Position</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell style={{ width: 75 }}>Salary</TableCell>
            <TableCell align='center' style={{ width: 100 }}>Location</TableCell>
            <TableCell style={{ width: 150 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            candidatesList.length > 0
              && candidatesList.map(candidate => (
                <TableRow hover key={candidate._id} >
                  <TableCell className={classes.firstTableCell}>
                    <Avatar className={classes.avatar} src={candidate.avatar} />
                  </TableCell>
                  <TableCell>
                    <Typography variant='subtitle2' >
                      {candidate.name}
                    </Typography>
                    {candidate.degree.name}
                  </TableCell>
                  <TableCell>{candidate.industry.name}</TableCell>
                  <TableCell>{candidate.position.name}</TableCell>
                  <TableCell>
                    <NumberFormat
                      format='+##  (###)  ####-##-##'
                      customInput={TextField}
                      value={candidate.cellphone}
                      InputProps={{
                        disableUnderline: true,
                        classes: { disabled: classes.numberFormatFont }
                      }}
                      fullWidth
                      disabled
                    />
                  </TableCell>
                  <TableCell>
                    <NumberFormat
                      prefix='$'
                      suffix={formatSalary(candidate.salary).suffix ? 'k' : null}
                      value={formatSalary(candidate.salary).salary}
                      customInput={TextField}
                      InputProps={{
                        disableUnderline: true,
                        classes: { disabled: classes.numberFormatFont }
                      }}
                      fullWidth
                      disabled
                    />
                  </TableCell>
                  <TableCell align='center'>{candidate.location.short_code}</TableCell>
                  <TableCell className={classes.lastTableCell}>
                    <Button variant='outlined'>View Profile</Button>
                  </TableCell>
                </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TalentsTable
