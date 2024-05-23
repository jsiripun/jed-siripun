
import Link from 'next/link'
import { Metadata } from 'next'
import Image from 'next/image'
import HelloSection from '@/app/HelloSection'
 
export const metadata: Metadata = {
  title: 'Jed Siripun',
}

function HomePage() {
   return (
      <>
         {/* <Image src="/hello_surprise.jpg" alt="bg" width="64" height="64" /> */}
         <HelloSection/>
         {/* <div>Jed Siripun</div>
         <Link href="/about">First Post</Link>
         <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1> */}
      </>	    
   )
}

export default HomePage