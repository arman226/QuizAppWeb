import React, { useState } from "react";
import {
  Paper,
  Table as TableSet,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TablePagination,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Subject } from "../../../../modules/subject/types";

interface ListOfSubjects {
  subjectList: Subject[];
}

interface Column {
  id: number;
  label: string;
}

const columns: Column[] = [
  {
    id: 1,
    label: "Subject Id",
  },
  {
    id: 2,
    label: "Subject",
  },
  {
    id: 3,
    label: "Description",
  },
];

const Table: React.FC<ListOfSubjects> = ({ subjectList }) => {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigateToDetail = (
    subjectId: number,
    subject: string,
    description: string
  ) => () => {
    history.push({
      pathname: "./subjectDetail",
      search: `${subjectId}`,
      state: { subjectId, subject, description },
    });
  };

  return (
    <Paper className={classes.container}>
      <TableContainer>
        <TableSet stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(({ id, label }) => (
                <TableCell key={id}>
                  <b>{label}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {subjectList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ subjectId, subject, description }) => (
                <TableRow
                  hover
                  role="checkbox"
                  onClick={navigateToDetail(subjectId, subject, description)}
                >
                  <TableCell>{subjectId}</TableCell>
                  <TableCell>{subject}</TableCell>
                  <TableCell>{description}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TableSet>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[1, 10, 20, 30]}
        component="div"
        count={subjectList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    marginBottom: 20,
  },
}));

export default Table;
