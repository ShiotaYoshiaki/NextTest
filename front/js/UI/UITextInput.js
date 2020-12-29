import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function UITextInput(props) {
  const classes = useStyles();
  const { id, label, onChange, value } = props;
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id={id}
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        key={`input_${id}`}
      />
    </form>
  );
}
