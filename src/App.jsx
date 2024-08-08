import './App.css';
import CardComponent from './components/CardComponent';
import Hero from './components/Hero';
import HorizontalShowCase from './components/HorizontalShowCase';
import Navbar from './components/Navbar';
import ScrollingGallery from './components/ScrollingGallery';
import ShowCase from './components/ShowCase';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <CardComponent title="Sprite Concept App" image="/sprite_0.png" desc="Imagine an app for Sprite, The Sprite Refresh app combines interactive experiences with personalized features to enhance user engagement and brand loyalty."/>
    </>
  )
}

export default App
