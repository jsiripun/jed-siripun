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

   if (error) return <div>Failed to load</div>
   if (!data) return <div>Loading...</div>

   return (
      <Container>
         <Head><title>Fun Facts</title></Head>
         <p>I love to pick up hobbies, dive deep into them, learn all about them, and then immediately drop it for the next one. Here are some hobbies I've done such with:</p>
         <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={item}>Python</ListItem>
            <ListItem sx={item}>Javascript (React + Node)</ListItem>
            <ListItem sx={item}>Terraform</ListItem>
            <ListItem sx={item}>Snowflake</ListItem>
            <ListItem sx={item}>BigQuery</ListItem>
            <ListItem sx={item}>Postgres</ListItem>
         </List>
      </Container>
   )
}