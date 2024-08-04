"use client";
import Head from 'next/head';
import Container from '../../components/container';
import useFetch from '../../helpers/useFetch';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { Tooltip, Link, List, ListItem } from '@mui/material';

const item: SxProps<Theme> = {
   display: 'list-item',
   marginLeft: 4,
   padding: 0
};

const full: SxProps<Theme> = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontFamily: "Courier New",
   paddingRight: '10vw'
};

export default function About() {
   const { data, error } = useFetch('api/hello', { body: { 'color': "red" } })

   if (error) return (<Container><div>Failed to load</div></Container>)
   if (!data) return (<Container><div>Loading...</div></Container>)

   return (
      <Container style={{ 'font-family': 'Courier New', 'padding': '5vw 10vw 5vw 10vw' }}>
         <Head><title>About Me</title></Head>
         <p>
            Hello! My name is Jed and I find fulfillment in solving problems that have a positive impact on the world and its inhabitants.
         </p>
         <br />
         <p>I'm currently a software engineer at the Democratic Data Exchange.</p>
         <br />
         <p>
            I have experience working with large volumes of data, web development, and cloud infrastructure.
            The most recent tech stack I've been working in includes:
            <List sx={{ listStyleType: 'disc' }}>
               <ListItem sx={item}>Python</ListItem>
               <ListItem sx={item}>Javascript (React + Node)</ListItem>
               <ListItem sx={item}>Terraform</ListItem>
               <ListItem sx={item}>Snowflake</ListItem>
               <ListItem sx={item}>BigQuery</ListItem>
               <ListItem sx={item}>Postgres</ListItem>
            </List>
            <br />
            No matter the technology, I'm great at picking things up and running with them.
            Check out some of my <Link href="/fun-facts" underline="hover" color="tan">hobbies</Link> to see random things I've learned.
         </p>
         <br />
         I <Tooltip title="(not so recently, 2015)"><span>graduated</span></Tooltip> from the University of Illinois at Chicago with a Computer Science degree and a minor in Art. I'm currently based out of Seattle, WA.

         {/* <h2>{data.text}</h2> */}
      </Container>
   )
}