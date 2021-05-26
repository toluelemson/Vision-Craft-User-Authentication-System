import React, { useState, useEffect, SetStateAction } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Deposits from '../components/dashboard/Deposits'
import NavBar from '../components/Navbar'
import { getUserDetails } from '../store/Auth/auth.actions'
import Footer from '../components/Footer'
import Chart from '../components/dashboard/Charts'
import { RootStore } from '../store'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  toolbarIcon: {},
}))

const Dashboard: React.SFC<RouteComponentProps> = () => {
  const classes = useStyles()
  const [firstName, setFirstName] = useState<SetStateAction<string> | undefined>('')
  const [lastName, setLastName] = useState<SetStateAction<string> | undefined>('')

  const dispatch = useDispatch()

  // login information
  const userLogin = useSelector(
    (state: RootStore) => state.userLogin,
    shallowEqual,
  )
  const loginInfo = userLogin.userInfo

  // User full details
  const userDetails = useSelector(
    (state: RootStore) => state.userDetails,
    shallowEqual,
  )
  const userData = userDetails.userInfo
  console.log(userData)
  useEffect(() => {
    // if user logs in, pull full user data
    if (!userData.data.uuid) dispatch(getUserDetails(`profile/${loginInfo.data.uuid}`))
    else {
      setFirstName(loginInfo.data.firstName)
      setLastName(loginInfo.data.lastName)
    }
  }, [dispatch, userData, loginInfo])

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton />
        </div>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Typography>
              “Yay, you’re logged in!”
              {' '}
              {firstName}
              {' '}
              {lastName}
            </Typography>
            <Chart />
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper} />
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  )
}

export default Dashboard
