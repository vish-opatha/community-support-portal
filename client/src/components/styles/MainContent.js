import React from 'react';
// import styled from 'styled-components';

// import AgencySignup from './AgencySignup';
// import SearchService from './SearchServices';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';

const MainContent = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={11} md={10}>
          <Paper>
            <img src="./images/cover.jpg" alt="cover" loading="lazy" />
          </Paper>
        </Grid>
        <Grid item xs={11} md={10}>
          <Paper>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="#343434"
              style={{ fontWeight: 600 }}
            >
              We are here provide the information, to get the support you want.
              You are valued, loved and blessed!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;
