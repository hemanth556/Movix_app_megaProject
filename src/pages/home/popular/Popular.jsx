import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetch from '../../../hook/useFetch'
import Carousel from '../../../components/carousel/carousel'
function Popular() {
    const [endpoint,setEndpoint]=useState("movie")
    const {data,loading} =useFetch(`/${endpoint}/popular`)
    const onTabChange =(tab,index)=>{
        setEndpoint(tab==="Movies"?"movie":"tv")
        

    }
  return (
    <div className='carouselSection'>
        <ContentWrapper className ="ContentWrapper">
          <span className="carouselTitle">What's Popular</span>
          <SwitchTab data={["Movies","TV Shows"]} onTabChange={onTabChange}/>

        </ContentWrapper>
        <Carousel data ={data?.results} loading={loading}  endpoint={endpoint}/>
    </div>
  )
}

export default Popular