import React from "react"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

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

const FooterUnit = () => {
  return (
    <div>
      {" "}
      <footer>
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
