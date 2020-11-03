import React, { useState } from "react";
import {
  Typography,
  Paper,
  IconButton,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import CreateOption from "../../CreateOption";
import { PRIMARY } from "../../../../Theme/colors";

const Options: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Paper className={classes.container}>
      <CreateOption isOpen={isOpen} onClose={onClose} />
      <div className={classes.head}>
        <Typography className={classes.headerText}>Categories</Typography>
        <IconButton size="small" onClick={openModal}>
          <Add className={classes.icon} />
        </IconButton>
      </div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value="female">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    marginBottom: 3,
    marginRight: 5,
  },
  icon: {
    fontSize: 18,
    color: PRIMARY,
  },
  head: {
    flexDirection: "row",
    display: "flex",
  },
  container: {
    flex: 1,
    padding: 15,
    marginTop: 20,
    width: "100%",
    marginBottom: 10,
  },
  list: {
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
}));

export default Options;
