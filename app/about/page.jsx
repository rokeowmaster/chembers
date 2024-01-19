import {about, services} from '../../constants'

const About = () => {
	return(
		<div  className="bg-gray-50 p-6">
			<div className="carousel carousel-end rounded-box">
				<div className="carousel-item h-80 w-30">
					<img src="bed2.jpg" alt="Drink" />
				</div> 
				<div className="carousel-item h-80 w-30">
					<img src="b1.jpg" alt="" />
				</div> 
				<div className="carousel-item h-80 w-30">
					<img src="b2.jpg" alt="" />
				</div> 
				<div className="carousel-item h-80 w-30">
					<img src="b3.jpg" alt="" />
				</div> 
				<div className="carousel-item h-80 w-30">
					<img src="b4.jpg" alt="" />
				</div> 
				<div className="carousel-item h-80 w-30">
					<img src="b5.jpg" alt="" />
				</div> 
			</div>
			<section className='m-8 text-center'>
				<p className='text-2xl'>{about.company}</p>
				<br></br>
				<p>{about.mission}</p>
			</section>
			<section className='m-8 mx-8 text-center'>
				<h3 className='text-2xl'>Our Services</h3>
				{services?.map(service=>(
					<section className="my-4" key={service.id}>
					<h3 className='mb-2 font-bold'>{service.title}</h3>
					<p>{service.description}</p>
					</section>
				))}
			</section>
			
		</div>
	)
}

export default About;