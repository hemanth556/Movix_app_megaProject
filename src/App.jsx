import { useState, useEffect } from 'react'
import { fetchDatafromApi } from './Utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration,getGenerse } from './Redux/HomeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import PageNotFound from './pages/404/PageNotFound'
import Details from './pages/details/Details'
import Explorer from './pages/explorer/Explorer'
import SearchResult from './pages/searchResult/SearchResult'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'



function App() {

  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)
  




  useEffect(() => {
    fetchApiConfiguration()
    genresCall()
}, [])



  const fetchApiConfiguration = async () => {
    const data = await fetchDatafromApi('/configuration')
    const url ={
      backdrop:data.images.
      secure_base_url + 'original',
      poster:data.images.
      secure_base_url + 'original',
      profile:data.images.
      secure_base_url + 'original',

    }
    dispatch(getApiConfiguration(url))

 }

 const genresCall=async()=>{
  let promises=[]
  let endPoints=["tv","movie"]
  let  allGenres={}

  endPoints.forEach((url)=>{
    promises.push(fetchDatafromApi(`/genre/${url}/list`))
  })

  const data =await Promise.all(promises)

  data?.map(({genres})=>{
    return genres.map((item)=>allGenres[item.id]=item)
  })
  dispatch(getGenerse(allGenres))

  console.log(allGenres)



 }


  return (
    <BrowserRouter >
    <Header/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/:mediaType/:id' element={<Details/>}/>
         <Route path='/explorer/:mediaType' element={<Explorer/>}/>
         <Route path='/search/:query' element={<SearchResult/>}/>
         <Route path='*' element={<PageNotFound/>}/>
      

      </Routes>
      <Footer/>

    </BrowserRouter>
  )
}

export default App
