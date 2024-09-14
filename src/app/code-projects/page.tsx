"use client";
import Head from 'next/head';
import { useState } from 'react';
import Container from '../../components/container';
import useFetch from '../../helpers/useFetch';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Modal, Box, List, ListItem, ImageList, ImageListItem, Typography, Button } from '@mui/material';

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
   top: 0,
   right: 0,
   zIndex: 2000,
   color: "white"
};

const itemData: any = {
   // {
   //    id: "pokehelper",
   //    img: "/pokehelper/pokehelper.png",
   //    title: "Poke Helper"
   // },
   "superluxland": {
      id: "superluxland",
      img: "/superluxland/superluxland.png",
      title: "Superluxland",
      description: `Superluxland.com was a website advertising super luxury condominiums in Bangkok, Thailand.
      I had updated the website and added a VR/360 degree component. When viewing on a mobile device, users were able to enter VR mode and view the room if they owned a VR headset. The last picture depicts a boat, but would be replaced with photos of the condominium being sold.`
   },
   "tipsuwan": {
      id: "tipsuwan",
      img: "/tipsuwanice/tipsuwanice.png",
      title: "Tipsuwan Ice Factory",
      description: `Tipsuwan Ice Factory is an Ice Factory located in Bangkok, Thailand that was looking into a new POS system. Below are screenshots of a quick mock up that I created for them.
      For this, I used HTML, CSS, and Bootstrap.`
   },
   "burgerbro": {
      id: "burgerbro",
      img: "/burgerbro/burgerbro.jpg",
      title: "Burger Bro",
      description: `Burger Bro is a restaurant in Bangkok, Thailand that sells (what do you know?) Burgers! I helped create the website application to allow customers to order directly from their table. Customers would use the tablets on the tables to place orders, call for their server, or pay their bill.

      The orders would be sent to the manager’s tablet for the manager to receive the orders and have them fulfilled. From the manager’s tablet, the manager would be able to reset tables’ tablets and view the orders.
      
      A reporting feature was also added, where the manager would be able to view all of the orders within a set of dates that they provided. They would provide the input of dates and the system would bring up a list of orders that occurred during the dates. The orders placed are also able to be viewed and sorted by each category (order ID, Table Name, Amount, Status, and Order Date).
      
      Technology used:
      UI:

      HTML5
      Javascript
      Web Storage
      Web Socket
      HTTPS
      Server:

      Tomcat 8.0
      Java
      Servlet; Data passed between UI and Server through JSON
      DAO (Data access object; connecting to the database)
      Model (Classes)
      Database:

      MySQL`
   },
   "floridadatingsim": {
      id: "floridadatingsim",
      img: "/floridadatingsim/floridadatingsim.png",
      title: "Florida Dating Simulator",
      description: `“FLORIDA MAN EATS ALLIGATOR AND THEN PUKES IT BACK UP INTO THE MAILBOX OF GRANDMOTHER’S NEW BOYFRIEND”

      In my free time I’m currently creating a dating simulator for the Floridian headlines that you’ll randomly see on your typical Tuesday mornings. The player will be going around the Miami area and trying to find love where gators are found. This is currently still a work in progress but attached are a few screenshots.
      
      I’m currently using Unity and C# to write the game.
      
      What’s done:
      
      General text parser
      Text typing out
      Generic Point System to earn those love points
      Question system
      What I’d like to get done:
      
      Cleaner UI
      Saving progress feature
      Storyline/Dialogue script
      Everything else`
   },
}

export default function CodeProjects() {
   const { data, error } = useFetch('api/hello', { body: { 'color': "red" } })
   const [modalOpen, setModalOpen] = useState(false);
   const [activeModalData, setActiveModalData] = useState<any>(null);

   if (error) return (<Container><div>Failed to load</div></Container>)
   if (!data) return (<Container><div>Loading...</div></Container>)

   const handleOpen = (value: any) => {
      setModalOpen(true);
      setActiveModalData(itemData[value.target.id]);
   }

   const handleClose = () => {
      setModalOpen(false);
      setActiveModalData(null);
   }

   return (
      <Container style={{ 'padding': '5vw 10vw 5vw 10vw' }}>
         <Head><title>Coding Projects</title></Head>
         <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={225} gap={14}>
            {Object.entries(itemData).map(
               ([key, value], i) => (
                  <ImageListItem key={itemData[key].img}>
                     <img
                        srcSet={`${itemData[key].img}?w=225&h=225&fit=crop&auto=format&dpr=2 2x`}
                        src={`${itemData[key].img}?w=225&h=225&fit=crop&auto=format`}
                        alt={itemData[key].title}
                        id={itemData[key].id}
                        title={itemData[key].title}
                        loading="lazy"
                        onClick={handleOpen}
                        style={{ objectFit: "fill", maxHeight: "100%", maxWidth: "100%" }}
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
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  {activeModalData ? activeModalData.title : ""}
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {activeModalData ? activeModalData.description : ""}
               </Typography>
               <Button onClick={handleClose} sx={closeButton}><CloseIcon /></Button>
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