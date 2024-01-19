import Image from 'next/image'
import { Nav, Footer, Hero, News,Projects } from '@/components'
import { explore } from '@/constants'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      
      <Hero />

      <div className='bg-gray-100 p-6'>
        <section className='text-center mx-8 my-8'>
          <h4 className='text-2xl font-bold'>{explore.title}</h4>
          <p>{explore.details}</p>
        </section>
      </div>
      
      <Projects />

      <div className='bg-gray-100 p-6'>
        <section className='text-center mx-8 my-8'>
        <Link href="/portfolio"><button className="btn btn-primary">More Projects</button></Link>
        </section>
      </div>
      <News />
      
    </main>
  )
}
