import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetch from '../../../hook/useFetch'
import Carousel from '../../../components/carousel/Carousel'
function Trending() {
    const [endpoint,setEndpoint]=useState("day")
    const {data,loading} =useFetch(`/trending/all/${endpoint}`)
    const onTabChange =(tab,index)=>{
        setEndpoint(tab==="Day"?"day":"week")
        

    }
  return (
    <div className='carouselSection'>
        <ContentWrapper className ="ContentWrapper">
          <span className="carouselTitle">Trending</span>
          <SwitchTab data={["Day","Week"]} onTabChange={onTabChange}/>

        </ContentWrapper>
        <Carousel data ={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending