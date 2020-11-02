import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Typography,
  IconButton,
  InputBase,
  Paper,
  Divider,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Search, Add } from "@material-ui/icons";
import { getSubjects } from "../../../modules/subject/api";
import { Subject } from "../../../modules/subject/types";
import Table from "./Table";
import Create from "../Create";
import { PRIMARY } from "../../../Theme/colors";

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
      <Typography className={classes.titleText}>Subject Overview</Typography>
      <div className={classes.searchContainer}>
        <Paper className={classes.searchRoot} elevation={1}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            aria-label="search"
            size="small"
            className={classes.iconButton}
          >
            <Search />
          </IconButton>
          <Divider orientation="vertical" className={classes.divider} />
          <IconButton
            aria-label="add"
            className={classes.iconButton}
            onClick={openModal}
            size="small"
          >
            <Add style={{ color: PRIMARY }} />
          </IconButton>
        </Paper>
      </div>

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
    display: "flex",
    backgroundColor: "#fff",
  },
  searchRoot: {
    display: "flex",
    alignContent: "flex-start",
    alignSelf: "center",
    width: "30%",
    marginBottom: 15,
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "80%",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 35,
    margin: 4,
  },
  searchContainer: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
}));

export default connect()(Subjects);
