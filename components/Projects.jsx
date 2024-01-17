import React from 'react'

const Projects = () => {
  return (
    <>
    {/* <h4 className='flex items-center'>Sample Profolio Projects</h4> */}
    <div id="projects" className='flex gap-8 justify-center flex-wrap mb-6'>
        
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="bed1.jpg" alt="Bed 1" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Carlifonia King</h2>
                <p>The California king mattress is 72 inches wide and 84 inches long. It's the longest mattress on the market, making it great for sleepers six feet and taller.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="bed2.jpg" alt="Bed 2" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Murphy Bed</h2>
                <p>A Murphy bed has a hinge on one end so that it can be folded up and stored against the wall. Most beds of this style come with storage</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="bed3.jpg" alt="Bed 3" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Round Bed</h2>
                <p>There's the round or circle frame design for those looking to make an impression and get away from the usual rectangular mattress</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    </div>
    </>
    
  )
}

export default Projects