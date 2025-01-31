
import Link from 'next/link'
import { Metadata } from 'next'
import Image from "next/image"
import Home from '@/app/Home'
import Container from '@/components/container';

export const metadata: Metadata = {
   title: 'Jed Siripun',
}

function HomePage() {
   return (
      <Container>
         <Home />
      </Container>
   )
}

export default HomePage