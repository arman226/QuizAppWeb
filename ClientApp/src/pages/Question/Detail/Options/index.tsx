import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CreateOption from "../../CreateOption";

const Options: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <CreateOption isOpen={isOpen} onClose={onClose} />
      <div>
        <Typography className={classes.headerText}>
          Categories{" "}
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            +
          </Button>
        </Typography>
      </div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value="female">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    marginBottom: 3,
  },
}));

export default Options;
