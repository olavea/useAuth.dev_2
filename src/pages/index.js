import React from "react"
import HeroUnit from "../components/HeroUnit"
import AntiHeroUnit from "../components/AntiHeroUnit"
import HowUnit from "../components/HowUnit"
import QuotesUnit from "../components/QuotesUnit"
import AppBar from "../components/AppBar"
import FooterUnit from "../components/FooterUnit"

const Index = () => {
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div>
        <HeroUnit />
      </div>
      <div>
        <HowUnit />
      </div>
      <div>
        <AntiHeroUnit />
      </div>
      <div>
        <QuotesUnit />
      </div>
      <div>
        <FooterUnit />
      </div>
    </div>
  )
}
export default Index
