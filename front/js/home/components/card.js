import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
});

/**
 * 
 * @param {*} props
 * @param {string} props.targetParam タイトルの上部に〜向け、という文言を記載する 
 * @param {string} props.title カードのタイトル
 * @param {string} props.englishTitle カードタイトルの英訳
 * @param {string} props.explain カードの役目の記載
 * @param {string} props.linkParam 遷移先のURL
 */
export default function SimpleCard(props) {
  const classes = useStyles();
  const {
    targetParam, title, englishTitle,
    explain, linkParam,
  } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {targetParam}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {englishTitle}
        </Typography>
        <Typography variant="body2" component="p">
          {explain}
        </Typography>
      </CardContent>
      <CardActions>
      <Link href={linkParam} >
          <a className={classes.link}>Lean More</a>
        </Link>
      </CardActions>
    </Card>
  );
}
