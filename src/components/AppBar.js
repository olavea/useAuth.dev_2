import React from "react"
import AppBar from "@material-ui/core/AppBar"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  link: {
    marginRight: theme.spacing(2),
  },
}))

const QuotesUnit = () => {
  const classes = useStyles()
  //   const preventDefault = event => event.preventDefault()
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <AccountCircleIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            <Link className={classes.link} href="/" color="inherit">
              useAuth
            </Link>
            <Link className={classes.link} href="/docs/" color="inherit">
              docs
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default QuotesUnit

//onClick={preventDefault}
