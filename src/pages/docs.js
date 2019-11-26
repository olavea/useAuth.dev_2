import React from "react"
import { Link } from "gatsby"
import AppBar from "../components/AppBar"
import HowUnit from "../components/HowUnit"
import FooterUnit from "../components/FooterUnit"
const docs = () => {
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <HowUnit />
      <div>
        <FooterUnit />
      </div>
    </div>
  )
}
export default docs
