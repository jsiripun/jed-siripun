'use client';

import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Container from '../components/container';
import Image from "next/image"
import { FadeInComponent } from '../components/fadeInComponent'
import { WaitToRenderComponent } from '@/components/waitToRenderComponent';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: "Courier New",
  paddingRight: '10vw'
};


function HelloSection() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', pt: 15 }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box sx={item}>
            <Image
              src="/hello_surprise.jpg"
              alt="bg"
              width={200}
              height={200}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center"
              }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={{ paddingTop: "7vw" }}>
          <FadeInComponent seconds={2}>
            <Box sx={item}>
              Hi, my name is Jed.
            </Box>
          </FadeInComponent>
          <WaitToRenderComponent seconds={2}>
            <FadeInComponent seconds={2}>
              <Box sx={item}>
                I'm a software engineer.
              </Box>
            </FadeInComponent>
          </WaitToRenderComponent>
          <WaitToRenderComponent seconds={4}>
            <FadeInComponent seconds={2}>
              <Box sx={item}>
                I enjoy building things that make the world better.
              </Box>
            </FadeInComponent>
          </WaitToRenderComponent>
          <WaitToRenderComponent seconds={6}>
            <FadeInComponent seconds={2}>
              <Box sx={item}>
                👍
              </Box>
            </FadeInComponent>
          </WaitToRenderComponent>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HelloSection;