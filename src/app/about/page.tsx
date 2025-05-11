"use client";
import Head from 'next/head';
import Container from '../../components/container';
import useFetch from '../../helpers/useFetch';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import React, { useState } from 'react';
import WorkHistory from './WorkHistory';
import { Work } from '@mui/icons-material';

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
      <Container>
         <Head><title>About Me</title></Head>
         <div className='bg-emerald-700/80'>
         <p  style={{ 'padding': '5vw 10vw 5vw 10vw' }}>
            Per the website name, my name is also Jed Siripun. 
            <br />
            I'm originally from Chicago but am currently based out of Seattle, WA.
         </p>
         </div>
         
      </Container>
   )
}