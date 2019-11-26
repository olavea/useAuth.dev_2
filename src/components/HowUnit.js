import React from "react"
import { Button } from "@material-ui/core"
import ArrowForward from "@material-ui/icons/ArrowForward"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

//aria-label="ArrowForward"
const HowUnit = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        ></Typography>

        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          How useAuth Works?
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          How Do I Use useAuth?
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          yarn add useAuth
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Code Example useAuth
        </Typography>
        <div>
          <div></div>
        </div>
      </Container>
    </div>
  )
}

export default HowUnit
