"use client";
import Head from 'next/head';
import { CarouselImages } from '../../components/Carousel'
import { useState } from 'react';
import Container from '../../components/container';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Modal, Box, List, ListItem, ImageList, ImageListItem, Typography, Button } from '@mui/material';
import { projectKeys, projectData } from './data';

const item: SxProps<Theme> = {
   display: 'list-item',
   marginLeft: 4,
   padding: 0
};

const modal: SxProps<Theme> = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 800,
   bgcolor: 'grey',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

const closeButton: SxProps<Theme> = {
   position: "fixed",
   top: "5%",
   right: 0,
   zIndex: 2000,
   color: "white"
};


export default function CodeProjects() {
   const [modalOpen, setModalOpen] = useState(false);
   const [activeModalData, setActiveModalData] = useState<any>(null);

   const handleOpen = (value: any) => {
      setModalOpen(true);
      setActiveModalData(projectData[value.target.id as keyof projectKeys]);
   }

   const handleClose = () => {
      setModalOpen(false);
      setActiveModalData(null);
   }

   return (
      <Container style={{ 'padding': '5vw 10vw 5vw 10vw' }}>
         <Head><title>Coding Projects</title></Head>
         <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={225} gap={14}>
            {Object.entries(projectData).map(
               ([key, value], i) => (
                  <ImageListItem key={projectData[key as keyof projectKeys].img}>
                     <img
                        srcSet={`${projectData[key as keyof projectKeys].img}?w=225&h=225&fit=crop&auto=format&dpr=2 2x`}
                        src={`${projectData[key as keyof projectKeys].img}?w=225&h=225&fit=crop&auto=format`}
                        alt={projectData[key as keyof projectKeys].title}
                        id={projectData[key as keyof projectKeys].id}
                        title={projectData[key as keyof projectKeys].title}
                        loading="lazy"
                        onClick={handleOpen}
                        style={{ objectFit: "fill", maxHeight: "100%", maxWidth: "100%", cursor: "pointer" }}
                     />
                  </ImageListItem>
               )
            )}
         </ImageList>
         <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={modal}>
               {activeModalData ? (
                  <div>
                     <CarouselImages project={activeModalData.id} />
                     <Typography id="modal-modal-title" variant="h6" component="h2">
                        {activeModalData.title}
                     </Typography>
                     <Button onClick={handleClose} sx={closeButton}><CloseIcon /></Button>
                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {activeModalData.description}
                     </Typography>
                  </div>
               ) : null}
            </Box>
         </Modal>

         <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={item}>This website</ListItem>
            <ListItem sx={item}>Pokemon Helper</ListItem>
            <ListItem sx={item}>Tipsuwan Ice Factory Mock Up</ListItem>
            <ListItem sx={item}>Superluxland</ListItem>
            <ListItem sx={item}>BurgerBro</ListItem>
            <ListItem sx={item}>Shape Academy</ListItem>
            <ListItem sx={item}>Florida Dating Simulator</ListItem>
            <ListItem sx={item}>Gender Fluidity</ListItem>
         </List>
      </Container>
   )
}