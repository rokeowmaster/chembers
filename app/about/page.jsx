import {about, services} from '../../constants'

const About = () => {
	return(
		<div  className="mx-6">
			<section className='m-8'>
				<p>{about.company}</p>
				<p>{about.mission}</p>
			</section>
			<section className='m-8'>
				<h3>Our Services</h3>
				{services?.map(service=>(
					<section className="my-4" key={service.id}>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
					</section>
				))}
			</section>
			
		</div>
	)
}

export default About;