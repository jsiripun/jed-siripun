
import Link from 'next/link'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Jed Siripun',
}

function HomePage() {
   return (
      <>
         <div>Jed Siripun</div>
         <Link href="/posts/about">First Post</Link>
      </>	    
   )
}

export default HomePage