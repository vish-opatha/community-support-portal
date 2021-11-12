import React from 'react';
import styled from 'styled-components';

// import AgencySignup from './AgencySignup';
// import SearchService from './SearchServices';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const MainContent = () => {
  return (
    <Container component="section">
      <Grid
        container
        direction="row"
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={10}>
          <img
            src="./images/cover.jpg"
            alt="cover"
            loading="lazy"
            margin={20}
          />
          <Button type="submit" color="secondary" variant="outlined">
            Submit
          </Button>
        </Grid>
        <Grid item xs={11} sm={10}>
          <div>
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
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContent;

const Section = styled.div`
  //   padding: 0 2rem;
  display: flex;
  // justify-content: space-between;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;
