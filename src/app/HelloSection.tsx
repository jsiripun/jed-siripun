'use client';

import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from "next/image"
import { FadeInComponent } from '../components/fadeInComponent'
import { WaitToRenderComponent } from '@/components/waitToRenderComponent';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


function HelloSection() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'absolute', overflow: 'hidden' }}>
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
          <Grid item xs={12} md={6}>
            <FadeInComponent seconds={2}>
              <Box sx={item}>
                Hi, my name is Jed.
              </Box>
            </FadeInComponent>
            <WaitToRenderComponent seconds={1}>
              <FadeInComponent seconds={2}>
                <Box sx={item}>
                  I'm a software engineer.
                </Box>
              </FadeInComponent>
            </WaitToRenderComponent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HelloSection;