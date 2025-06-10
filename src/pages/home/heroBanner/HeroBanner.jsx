import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hook/useFetch';
import Img from '../../../components/lazyLoadImage/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

function HeroBanner() {
  const [background, setBackground] = useState('')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home)





  useEffect(() => {
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * data?.results?.length)]?.backdrop_path;
    setBackground(bg)
    

  }, [data])

  const onKeyUpHandler = (e) => {

    if (e.key == 'Enter' && query.length > 0) {
      navigate(`search/${query}`)

    }

  }

 const  onClickHandler =()=>{
  console.log("search clicked")
  if(query.length>0){
    navigate(`search/${query}`)
  }
 }

  return (
    <div className='heroBanner'>
      {!loading && <div className="backdop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-Layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className='Title'>Welcome</span>
          <span className='subTitle'>
            Millions of movies,TV shows and people to discover
            explore now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder='Search for Movies or Tv shows.....'
              onKeyUp={onKeyUpHandler}
              onChange={(e) => {
                setQuery(e.target.value)
              }}


            />
            <button onClick={onClickHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner