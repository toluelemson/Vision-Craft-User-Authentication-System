import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { logout } from '../../store/Auth/authActions'
import { RootStore } from '../../store'

const drawerWidth = 0

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
}))

export const NavBar: React.SFC<RouteComponentProps> = ({ history, location }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const userLogin = useSelector((state: RootStore) => state.userLogin)

  const { userInfo } = userLogin

  // Logout
  const logoutHandler = (): void => {
    dispatch(logout(history, location))
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={clsx(classes.menuButton, classes.menuButtonHidden)}
          />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Welcome
          </Typography>
          {userInfo && userInfo.data ? (
            <Button color="inherit" onClick={logoutHandler}>
              Logout
            </Button>
          ) : (
            <Button color="inherit">.....</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default React.memo(withRouter(NavBar))
