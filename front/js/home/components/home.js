import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid key={"input_card"} item>
            <Card
              targetParam={"もっと特定のポケモンを知りたい人向け"}
              title={"ポケモン情報検索"}
              englishTitle={"Search pokemon info"}
              explain={"ポケモンの各情報を知りたい方はこちらを選択ください"}
              linkParam={'/test'}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
