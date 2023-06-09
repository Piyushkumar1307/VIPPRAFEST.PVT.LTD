import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Project Gallery' subtitle='Building Dreams, Creating Realities: Our Construction Projects Unveiled' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
