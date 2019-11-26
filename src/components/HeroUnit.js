import React from "react"
import { Button } from "@material-ui/core"
import ArrowForward from "@material-ui/icons/ArrowForward"
import Grid from "@material-ui/core/Grid"
//aria-label="ArrowForward"
const HeroUnit = () => {
  return (
    <div>
      <div>What is, who for and why useAuth?</div>
      <div>
        <div>
          <Grid container justify="center">
            <Button
              size="large"
              variant="contained"
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
    </div>
  )
}

export default HeroUnit
