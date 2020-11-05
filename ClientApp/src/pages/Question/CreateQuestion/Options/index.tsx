import React, { useState, Dispatch, SetStateAction } from "react";
import {
  Typography,
  Paper,
  IconButton,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import CreateOption from "../../CreateOption";
import UpdateOption from "../../UpdateOption";
import { PRIMARY } from "../../../../Theme/colors";
import { Option } from "../../../../modules/option/types";

interface Props {
  option: Option[];
  setOptions: Dispatch<SetStateAction<Option[]>>;
  questionCode: string;
}

const Options: React.FC<Props> = ({ option, setOptions, questionCode }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openUpdate, setOpenUpdate] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const onClose = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeUpdate = () => {
    setOpenUpdate(false);
  };

  const openUpdateModal = (index: number) => () => {
    setOpenUpdate(true);
    setActiveIndex(index);
  };

  const onOptionChange = (
    event: React.ChangeEvent<{ name?: string; value?: unknown }>
  ) => {
    const value = event.target.value as string;
    setCorrectAnswer(value);
    const index = option.findIndex(({ optionName }) => optionName == value);
    let tempOptions = option;
    tempOptions.map(({ optionName }, idx) => {
      optionName === value
        ? (tempOptions[idx].isCorrectAnswer = 1)
        : (tempOptions[idx].isCorrectAnswer = 0);
    });
    setOptions(tempOptions);
  };

  return (
    <Paper className={classes.container}>
      <CreateOption
        isOpen={isOpen}
        onClose={onClose}
        options={option}
        setOptions={setOptions}
        questionCode={questionCode}
      />

      <UpdateOption
        isOpen={openUpdate}
        onClose={closeUpdate}
        options={option}
        setOptions={setOptions}
        questionCode={questionCode}
        index={activeIndex}
      />

      <div className={classes.head}>
        <Typography className={classes.headerText}>Options</Typography>
        <IconButton size="small" onClick={openModal}>
          <Add className={classes.icon} />
        </IconButton>
      </div>
      <FormControl component="fieldset">
        <RadioGroup
          name="options"
          value={correctAnswer}
          onChange={onOptionChange}
        >
          <Grid container className={classes.gridContainer}>
            {option.map(({ optionName }, idx) => (
              <div key={idx} className={classes.itemContainer}>
                <Grid item xs={10}>
                  <FormControlLabel
                    key={idx}
                    value={optionName}
                    control={<Radio />}
                    label={optionName}
                  />
                </Grid>
                <Grid item xs={2}>
                  <div className={classes.itemContainer}>
                    <IconButton onClick={openUpdateModal(idx)}>
                      <Edit />
                    </IconButton>
                  </div>
                </Grid>
                <br />
              </div>
            ))}
          </Grid>
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
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  gridContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
}));

export default Options;
