import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return <h1>"Loading..."</h1>;

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
          style={{color:'aqua',backgroundColor:'rgb(0,0,34)'}}
        >
          <CardContent>
            <Typography color="inherit" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={confirmed.value / 2}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textPrimary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of people infected</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
          style={{color:'lightGreen',backgroundColor:'rgb(0,34,0)'}}

        >
          <CardContent>
            <Typography color="inherit" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={recovered.value / 2}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textPrimary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of people recovered</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
          style={{color:'firebrick',backgroundColor:'rgb(34,0,0)'}}

        >
          <CardContent>
            <Typography color="inherit" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={deaths.value / 2}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textPrimary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths due to Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
