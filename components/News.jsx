import React from 'react'

const News = () => {
  return (
    <div>
        
        <div className="carousel w-full h-30">
            <div id="item1" className="carousel-item w-full">
                <img src="bed4.webp" className="w-full" />
            </div> 
            <div id="item2" className="carousel-item w-full">
                <img src="bed5.jpg" className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
                <img src="bed6.jpg" className="w-full" />
            </div> 
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
        </div>
    </div>
  )
}

export default News