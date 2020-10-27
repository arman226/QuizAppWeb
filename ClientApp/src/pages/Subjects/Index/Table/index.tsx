import React, { useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Subject } from "../../../../modules/subject/types";
import Header from "./Header";
import Item from "./Item";
import { MemoryRouter as Router } from "react-router";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

interface ListOfSubjects {
  subjectList: Subject[];
}

const Table: React.FC<ListOfSubjects> = ({ subjectList }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />

      {subjectList.map(({ subjectId, subject, description }) => (
        <Button
          style={{ width: window.innerWidth }}
          component={RouterLink}
          to="/subjectDetail"
        >
          <Item
            subjectId={subjectId}
            subject={subject}
            description={description}
          />
        </Button>
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
