import Image from "next/image";

const Portfolio = () => {
	return(
		<>
		<h4 className="text-2xl text-center">Portfolio Projects</h4>
		<div className="mx-8 flex flex-wrap gap-8 justify-center mt-8 mb-6 z-0">

		<div className="max-w-64">
			<Image src="/bed1.jpg" alt="Bed 1" width={250} height={300} className="rounded-xl" />
			<h4 className="">Carlifonia King</h4>
			<p className="flex flex-wrap">The California king mattress is 72 inches wide and 84 inches long. It's the longest mattress on the market, making it great for sleepers six feet and taller.</p>
		</div>

		<div className="max-w-64">
			<Image src="/bed1.jpg" alt="Bed 1" width={250} height={300} className="rounded-xl" />
			<h4 className="">Carlifonia King</h4>
			<p className="flex flex-wrap">The California king mattress is 72 inches wide and 84 inches long. It's the longest mattress on the market, making it great for sleepers six feet and taller.</p>
		</div>

		<div className="max-w-64">
			<Image src="/bed1.jpg" alt="Bed 1" width={250} height={300} className="rounded-xl" />
			<h4 className="">Carlifonia King</h4>
			<p className="flex flex-wrap">The California king mattress is 72 inches wide and 84 inches long. It's the longest mattress on the market, making it great for sleepers six feet and taller.</p>
		</div>
		<div className="max-w-64">
			<Image src="/bed1.jpg" alt="Bed 1" width={250} height={300} className="rounded-xl" />
			<h4 className="">Carlifonia King</h4>
			<p className="flex flex-wrap">The California king mattress is 72 inches wide and 84 inches long. It's the longest mattress on the market, making it great for sleepers six feet and taller.</p>
		</div>
		<div className="max-w-64">
			<Image src="/bed1.jpg" alt="Bed 1" width={250} height={300} className="rounded-xl" />
			<h4 className="">Carlifonia King</h4>
			<p className="flex flex-wrap">The California king mattress is 72 inches wide and 84 inches long. It's the longest mattress on the market, making it great for sleepers six feet and taller.</p>
		</div>
		<div className="max-w-64">
			<Image src="/bed1.jpg" alt="Bed 1" width={250} height={300} className="rounded-xl" />
			<h4 className="">Carlifonia King</h4>
			<p className="flex flex-wrap">The California king mattress is 72 inches wide and 84 inches long. It's the longest mattress on the market, making it great for sleepers six feet and taller.</p>
		</div>

		
		</div>
		</>
	)
}

export default Portfolio;