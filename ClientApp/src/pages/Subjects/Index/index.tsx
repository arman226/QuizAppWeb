import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { getSubjects } from "../../../modules/subject/api";
import { Subject } from "../../../modules/subject/types";
import Table from "./Table";

const Subjects: React.FC = () => {
  const classes = useStyles();
  const [listOfSubjects, setListOfSubjects] = useState<Subject[]>([]);

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

  return (
    <React.Fragment>
      <Typography
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        Subject
      </Typography>
      <Table subjectList={listOfSubjects} />
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}));

export default connect()(Subjects);
