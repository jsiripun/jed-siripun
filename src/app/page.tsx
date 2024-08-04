
import Link from 'next/link'
import { Metadata } from 'next'
import Image from "next/image"
import HelloSection from '@/app/HelloSection'
import Container from '@/components/container';

export const metadata: Metadata = {
   title: 'Jed Siripun',
}

function HomePage() {
   return (
      <Container>
         <HelloSection />
      </Container>
   )
}

export default HomePage