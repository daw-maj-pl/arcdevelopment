import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import vision from '../assets/vision.svg';

const useStyles = makeStyles(theme => ({
  rowContainer: {
    padding: '0 5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  }
}));

export default function Revolution() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant="h2" style={{ fontFamily: 'Pacifico' }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through binoculars"
            style={{ maxWidth: '40em', marginRight: '5em' }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: '40em' }}
          align="right"
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography variant="body1" paragraph>
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography variant="body1" paragraph>
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography variant="body1" paragraph>
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography variant="body1" paragraph>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
