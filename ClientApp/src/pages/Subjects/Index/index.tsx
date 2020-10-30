import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { getSubjects } from "../../../modules/subject/api";
import { Subject } from "../../../modules/subject/types";
import Table from "./Table";
import Create from "../Create";

const Subjects: React.FC = () => {
  const classes = useStyles();

  const [listOfSubjects, setListOfSubjects] = useState<Subject[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    getAllSubjects();
  }, []);

  const getAllSubjects = async () => {
    try {
      const response = await getSubjects();
      if (response.status === 200) {
        setListOfSubjects(response.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const onHandleClose = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <Create isOpen={isOpen} onClose={onHandleClose} />
      <Grid container>
        <Grid item xs={9}>
          <Typography className={classes.titleText}>Subject</Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={openModal}
          >
            + New Subject
          </Button>
        </Grid>
      </Grid>

      <Table subjectList={listOfSubjects} />
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

export default connect()(Subjects);
