import Image from 'next/image'
import { Nav, Footer, Hero, News,Projects } from '@/components'

export default function Home() {
  return (
    <main className="">
      
      <Hero />
      <Projects />
      <News />
      
    </main>
  )
}
