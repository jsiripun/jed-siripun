import Link from 'next/link';
import Head from 'next/head';
import Container from '../components/container';
import useFetch from './helpers/useFetch';

export default function About() {
   const { data, error } = useFetch('api/hello', {body: {'color': "red"}})
 
   if (error) return <div>Failed to load</div>
   if (!data) return <div>Loading...</div>

   return (
      <Container>
         <Head><title>About Me</title></Head>
         <h1>About Me</h1>
         <h2>{data.text}</h2>
         <h2>
            <Link href="/">
               Home
            </Link>
         </h2>
         </Container>
   )
}