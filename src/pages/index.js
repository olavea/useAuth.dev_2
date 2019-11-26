import React from "react"
import HeroUnit from "../components/HeroUnit"
import AntiHeroUnit from "../components/AntiHeroUnit"
import HowUnit from "../components/HowUnit"
import QuotesUnit from "../components/QuotesUnit"

const Index = () => {
  return (
    <div>
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
    </div>
  )
}
export default Index
