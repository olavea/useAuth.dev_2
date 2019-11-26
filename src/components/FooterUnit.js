import React from "react"
import AppBar from "@material-ui/core/AppBar"
import { Button } from "@material-ui/core"

// import CameraIcon from '@material-ui/icons/PhotoCamera';
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Link from "@material-ui/core/Link"

import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"

import { makeStyles } from "@material-ui/core/styles"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        useAuth Swizec
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  link: {
    marginRight: theme.spacing(2),
  },
}))

const FooterUnit = () => {
  const classes = useStyles()
  const preventDefault = event => event.preventDefault()
  return (
    <div>
      {" "}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
        <Copyright />
      </footer>
    </div>
  )
}

export default FooterUnit
