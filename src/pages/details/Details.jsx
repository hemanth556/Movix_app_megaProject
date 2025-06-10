import React from 'react'
import DetailsBanner from './detailsBanner/DetailsBanner';
import useFetch from '../../hook/useFetch';
import { useParams } from 'react-router-dom';
import Cast from './cast/Cast';
import "./style.scss";
import VideosSection from './videoSection/VideoSection';
import Similar from './carousels/similar/Similar';
import Recommondation from './carousels/recommandation/Recommondation';

function Details() {
  const {mediaType,id}=useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  console.log(credits)
  return (
    <div>
          <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
          <Cast  data={credits?.cast} loading={creditsLoading}/>
          <VideosSection data={data} loading={loading}/>
          <Similar mediaType={mediaType} id={id}/>
          <Recommondation mediaType={mediaType} id={id}/>
          
    </div>
  )
}

export default Details