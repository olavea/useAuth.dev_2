import React from "react"
import { Button } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

const cards = [1, 2, 3]

const QuotesUnit = () => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent>
                  <Typography variant="h5" color="textSecondary" paragraph>
                    "I use useauth. I use useauth. I use useauth. I use
                    useauth."
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href="https://useauthdev2-2tpug1oos.now.sh/"
                    size="small"
                    color="primary"
                  >
                    View Batcat's useAuth
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default QuotesUnit
