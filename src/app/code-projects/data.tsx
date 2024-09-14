interface projectInfo {
    id: string;
    img: string;
    title: string;
    description: string;
}

export interface projectKeys {
    superluxland: projectInfo,
    tipsuwan: projectInfo,
    burgerbro: projectInfo,
    floridadatingsim: projectInfo
}

export const projectData: projectKeys = {
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