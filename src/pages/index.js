import React from "react"
import HeroUnit from "../components/HeroUnit"
import AntiHeroUnit from "../components/AntiHeroUnit"
import HowUnit from "../components/HowUnit"

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
        <div>
          <AntiHeroUnit />
        </div>
      </div>
    </div>
  )
}
export default Index
