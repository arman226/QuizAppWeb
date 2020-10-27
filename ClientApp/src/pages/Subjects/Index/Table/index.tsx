import React, { useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Subject } from "../../../../modules/subject/types";
import Header from "./Header";
import Item from "./Item";

interface ListOfSubjects {
  subjectList: Subject[];
}

const Table: React.FC<ListOfSubjects> = ({ subjectList }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      {subjectList.map(({ subjectId, subject, description }) => (
        <Item
          subjectId={subjectId}
          subject={subject}
          description={description}
        />
      ))}
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}));

export default Table;
