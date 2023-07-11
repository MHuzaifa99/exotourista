import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import dummyData from '../dummyData/props.json'

function Home() {
  console.log(dummyData)
  return (
    <>
      <Navbar />
      <div style={{display: "flex", flexWrap: "wrap", "margin": "50px 100px 0px 150px" }}>
      {dummyData && dummyData.map((data) => {
        return <Card data={data}/>
      })}
      </div>
    </>
  )
}

export default Home