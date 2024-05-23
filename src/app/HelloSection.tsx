import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from "next/image"

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function HelloSection() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'blue' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Image
          src="/hello_surprise.jpg"
          alt="bg"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }} />

        {/* <Image src="/hello_surprise.jpg" alt="bg" width="64" height="64" /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* <Box
                component="img"
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              /> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* <Box
                component="img"
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              /> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
                rip rip rip
              {/* <Box
                component="img"
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HelloSection;