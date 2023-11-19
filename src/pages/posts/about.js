import Link from 'next/link';
import Head from 'next/head';
import Container from '../../components/container';


export default function About() {
   return (
      <>
      <Container>
         <Head><title>About Me</title></Head>
         <h1>About Me</h1>
         <h2>
            <Link href="/">
               Home
            </Link>
         </h2>
         </Container>
      </>	  
   )
}