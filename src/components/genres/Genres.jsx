import React from 'react'
import { useSelector } from 'react-redux';
import './style.scss';



function Genres({data}) {
    const {Generes}=useSelector((state)=>state.home)
    
  return (
    <div className='genres'>
        
      {data?.map((g)=>{
        if(!Generes[g]?.name)return
        return <div key={g} className="genre">
            {Generes[g]?.name}
        </div>
      })}
    </div>
  )
}

export default Genres