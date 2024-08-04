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
      <Container style={{ 'font-family': 'Courier New', 'padding': '5vw 10vw 5vw 10vw' }}>
         <Head><title>Coding Projects</title></Head>
         <p>Here are some projects I've done:</p>
         <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={item}>Watercolors</ListItem>
            <ListItem sx={item}>Snowboarding</ListItem>
            <ListItem sx={item}>Home Improvement</ListItem>
            <ListItem sx={item}>Tattooing</ListItem>
         </List>
      </Container>
   )
}