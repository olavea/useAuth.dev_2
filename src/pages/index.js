import React from "react"
import { Button } from "@material-ui/core"
import ArrowForward from "@material-ui/icons/ArrowForward"
import HeroUnit from "../components/HeroUnit"
//aria-label="ArrowForward"
const Index = () => {
  return (
    <>
      <div>
        <HeroUnit />
      </div>
      <div>How useAuth Works?</div>
      <div>How Do I Use useAuth?</div>
      <div>yarn add useAuth</div>
      <div>Code Example useAuth</div>
      <div>
        <div>It only takes a few minutes to get up and running!</div>
        <div>
          {" "}
          <div css={{ flex: `1 1 100%` }}>
            <div>
              <Button
                size="large"
                color="primary"
                variant="outlined"
                href="/docs/"
                overrideCSS={{ mt: 5 }}
                endIcon={<ArrowForward />}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index
