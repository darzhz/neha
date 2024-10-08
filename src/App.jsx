import { animate,easeIn, motion } from "framer-motion"
import './App.css';
import CardComponent from './components/CardComponent';
import Hero from './components/Hero';
import HorizontalShowCase from './components/HorizontalShowCase';
import Navbar from './components/Navbar';
import ScrollingGallery from './components/ScrollingGallery';
import ShowCase from './components/ShowCase';
import About from "./components/About";

function App() {
  const Sprite = [
    {
      image: '/sprite_1.png', // Placeholder image 1
      title: 'Sprite Concept',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/sprite_2.png', // Placeholder image 2
      title: 'Sprite Concept',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/sprite_3.png', // Placeholder image 2
      title: 'Sprite Concept',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/sprite_4.png', // Placeholder image 2
      title: 'Sprite Concept',
      description: '',
      link: '#', // Replace with your link
    }
  ];
  const camper = [
    {
      image: '/camper1.png', // Placeholder image 1
      title: 'CamperQuest',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/camper2.png', // Placeholder image 2
      title: 'CamperQuest',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/camper3.png', // Placeholder image 2
      title: 'CamperQuest',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/camper4.png', // Placeholder image 2
      title: 'CamperQuest',
      description: '',
      link: '#', // Replace with your link
    }
  ];
  const bookStream = [
    {
      image: '/BookStream/1.png', // Placeholder image 1
      title: 'Libary',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/BookStream/2.png', // Placeholder image 2
      title: 'Fine Tuning',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/BookStream/3.png', // Placeholder image 2
      title: 'Video Generation',
      description: '',
      link: '#', // Replace with your link
    },
    {
      image: '/BookStream/4.png', // Placeholder image 2
      title: 'Final output',
      description: '',
      link: '#', // Replace with your link
    }
  ];
  return (
    <>
    <motion.div initial={{y:-100}} animate={{y:0}} transition={{ ease: "easeOut", duration: 0.3 }}>
    <Navbar/>
    </motion.div>
    <motion.div initial={{ scale: 0,opacity:0 }} animate={{scale:1,opacity:1}}
  transition={{ ease: "easeOut", duration: 0.4 }}>
    <Hero/>
    </motion.div>
    <About/>
    <div id="projects">
    <CardComponent title="BookStream" image="/bookstream.png" desc="Book Stream is an elegantly designed desktop application that combines modern aesthetics with sophisticated functionality. Its warm, inviting color palette and premium typography create a luxurious, minimalist interface, while its streamlined user flow enhances usability. Users start by browsing their book collection, proceed through a customizable video creation process with intuitive tab-based settings, and finally view and download high-quality videos through a sleek player. The Figma file supporting the application is meticulously organized, ensuring consistency and ease of updates with dedicated pages for each major screen and reusable components for efficient design management." prototypeUrl="https://www.figma.com/proto/KXZLv5XOQTaUHKvWqQVPDj/BookStream?node-id=51-1269&t=IrAb8V2saaCqDhwZ-1" figmaUrl="https://www.figma.com/design/KXZLv5XOQTaUHKvWqQVPDj/BookStream?node-id=51-1269&t=IrAb8V2saaCqDhwZ-1" galleryItems={bookStream}/>
    <CardComponent title="Sprite Concept App" image="/sprite_0.png" desc="Imagine an app for Sprite, The Sprite Refresh app combines interactive experiences with personalized features to enhance user engagement and brand loyalty." prototypeUrl="https://www.figma.com/proto/UXTPCnf8lCXkhilzvz0Muz/Untitled?node-id=11-272&t=RxViDiYfbyJ31aMr-1" figmaUrl="https://www.figma.com/design/UXTPCnf8lCXkhilzvz0Muz/Untitled?node-id=11-272&t=RxViDiYfbyJ31aMr-1" galleryItems={Sprite}/>
    <CardComponent title="CamperQuest" image="/camperalt.png" desc="CamperQuest an innovative app designed for booking fully equipped camper vans and packaged vacation experiences and provide  users with an unparalleled travel experience, combining convenience, community, and adventure." prototypeUrl="https://www.figma.com/proto/sF7ovqM4uypoMrXbiwCxvp/showcase?node-id=2-77&t=vZj0xfsn5h33sdyW-1" figmaUrl="https://www.figma.com/design/sF7ovqM4uypoMrXbiwCxvp/showcase?node-id=2-77&t=vZj0xfsn5h33sdyW-1" galleryItems={camper}/>
    </div>
    </>
  )
}

export default App
