import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CarIcon from '@material-ui/icons/DriveEta';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import BurgerMenu from './components/Menu/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import 'fontsource-roboto';


// import Carousel from './components/Carousel/Carousel'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        CarChain
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  appName: {
    width:'100%',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  mainButton: {
    height: '125%'

  },
  menu: {},
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
    
  },
  card: {
    height: '100%',
    display: 'flex',  
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
}));

// const cards = [1, 2, 3, 4, 5, 6];

const App = () => {

  const classes = useStyles();

  /* todo 
  const handleClick = () => {


   const [handleOpen, setHandleOpen] = useState({ open: true });
   const handleCarouselClick = () => {
     setHandleOpen({ open: true });
   };*/

  const greyImage = "https://picsum.photos/300/200?grayscale"
  const image = "https://picsum.photos/300/200"
  const slides = [
    (<img alt="" key={1} src={greyImage} />),
    (<img alt="" key={2} src={image} />),
    (<img alt="" key={3} src={greyImage} />),
    (<img alt="" key={4} src={greyImage} />),
    (<img alt="" key={5} src={image} />),
    (<img alt="" key={6} src={greyImage} />),
    (<img alt="" key={7} src={greyImage} />),
    (<img alt="" key={8} src={image} />),
    (<img alt="" key={9} src={greyImage} />),

  ];

  return (


      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CarIcon className={classes.icon} />
            <Typography className={classes.appName} variant="h6" color="inherit" noWrap>
              Carchain
            </Typography>
            <div style={{ width: '100%' }}>
              <Box 
                display="flex"
                justifyContent="flex-end"
                p={1}
                m={1}>
                <BurgerMenu className={classes.menu} />
              </Box>
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Carchain
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Sed libero enim sed faucibus turpis in.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button className={classes.mainButton} variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          {/* End hero unit */}
          {/* Start cards unit */}
          {/* <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={12} md={4} maxWidth="md" justify="center">
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container> */}

     
        <Container maxWidth="md">

          <Carousel
          
            infinite
            clickToChange
            centered
            slides={slides}
            breakpoints={{
              5000: { // these props will be applied when screen width is less than 1000px
                slidesPerPage: 3,
                clickToChange: false,
                centered: false,
                arrows: true,
                infinite: false,
              },
              500: {
                slidesPerPage: 1,
                slidesPerScroll: 1,
                clickToChange: false,
                centered: true,
                arrowLeft: (<MenuIcon className="icon-example" name="arrow-left" />),
                arrowRight: (<MenuIcon className="icon-example" name="arrow-right" />),
                animationSpeed: 2000,
                infinite: false,
              },
            }}
          />
     
     
        </Container>
      

          {/* End cards unit */}

        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
          <Copyright />
          </Typography>
         
        </footer>
        {/* End footer */}
      </React.Fragment>
    );

}
export default App