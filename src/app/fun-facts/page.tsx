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

export default function About() {
   const { data, error } = useFetch('api/hello', { body: { 'color': "red" } })

   if (error) return (<Container><div>Failed to load</div></Container>)
   if (!data) return (<Container><div>Loading...</div></Container>)

   return (
      <Container style={{ 'padding': '5vw 10vw 5vw 10vw' }}>
         <Head><title>Fun Facts</title></Head>
         <p>I love to pick up hobbies, dive deep into them, learn all about them, and then immediately drop it for the next one. Here are some hobbies I've done such with:</p>
         <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={item}>Watercolors</ListItem>
            <ListItem sx={item}>Snowboarding</ListItem>
            <ListItem sx={item}>Home Improvement</ListItem>
            <ListItem sx={item}>Tattooing</ListItem>
         </List>
      </Container>
   )
}