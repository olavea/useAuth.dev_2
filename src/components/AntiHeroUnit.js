import React from "react"
import { Button } from "@material-ui/core"
import ArrowForward from "@material-ui/icons/ArrowForward"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

//aria-label="ArrowForward"
const AntiHeroUnit = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Curious?
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          It only takes a few minutes to get up and running!
        </Typography>
        <div>
          <div>
            <Grid container justify="center">
              <Button
                size="large"
                variant="outlined"
                color="primary"
                href="/docs/"
                overrideCSS={{ mt: 5 }}
                endIcon={<ArrowForward />}
              >
                Get Started
              </Button>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AntiHeroUnit
