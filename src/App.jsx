import { animate, easeIn, motion } from "framer-motion";
import "./App.css";
import CardComponent from "./components/CardComponent";
import Hero from "./components/Hero";
import HorizontalShowCase from "./components/HorizontalShowCase";
import Navbar from "./components/Navbar";
import ScrollingGallery from "./components/ScrollingGallery";
import ShowCase from "./components/ShowCase";
import About from "./components/About";
import { projects } from "@/data";
import { ProjectShowcase } from "./components/ProjectShowcase";
import Footer from "./components/Footer";

function App() {
  const Sprite = [
    {
      image: "/sprite_1.png", // Placeholder image 1
      title: "Sprite Concept",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/sprite_2.png", // Placeholder image 2
      title: "Sprite Concept",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/sprite_3.png", // Placeholder image 2
      title: "Sprite Concept",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/sprite_4.png", // Placeholder image 2
      title: "Sprite Concept",
      description: "",
      link: "#", // Replace with your link
    },
  ];
  const camper = [
    {
      image: "/camper1.png", // Placeholder image 1
      title: "CamperQuest",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/camper2.png", // Placeholder image 2
      title: "CamperQuest",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/camper3.png", // Placeholder image 2
      title: "CamperQuest",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/camper4.png", // Placeholder image 2
      title: "CamperQuest",
      description: "",
      link: "#", // Replace with your link
    },
  ];
  const bookStream = [
    {
      image: "/BookStream/1.png", // Placeholder image 1
      title: "Libary",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/BookStream/2.png", // Placeholder image 2
      title: "Fine Tuning",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/BookStream/3.png", // Placeholder image 2
      title: "Video Generation",
      description: "",
      link: "#", // Replace with your link
    },
    {
      image: "/BookStream/4.png", // Placeholder image 2
      title: "Final output",
      description: "",
      link: "#", // Replace with your link
    },
  ];
  const dashboard = [
    {
      image: "/dashboard/overview.png", // Placeholder image 1
      title: "SEO Insites",
      description: "Shows all the seo metrics of the site and sidebar",
      link: "#", // Replace with your link
    },
    {
      image: "/dashboard/overview-1.png", // Placeholder image 2
      title: "Realtime updates",
      description: "Indicates metrics with colorful visualization",
      link: "#", // Replace with your link
    },
    {
      image: "/dashboard/Report.png", // Placeholder image 2
      title: "Course Enrollment Insites",
      description:
        "Indicates all the metrics associated with enrollment and retention rates",
      link: "#", // Replace with your link
    },
    {
      image: "/dashboard/ReportAnalytics-1.png", // Placeholder image 2
      title: "Graphs and Filters",
      description: "Filteration of graphs and simple pastel colors",
      link: "#", // Replace with your link
    },
    {
      image: "/dashboard/UserManagement.png", // Placeholder image 2
      title: "User Management",
      description: "Add and manage users with ease",
      link: "#", // Replace with your link
    },
  ];
  const healthcare = [
    {
      image: "/healthcare/ad1.png",
      title: "Your Health, Your Way!",
      description:
        "Find the right doctor, book appointments effortlessly, and manage your health all in one place!",
      link: "#", // Replace with your link
    },
    {
      image: "/healthcare/ad2.png",
      title: "Expert Care, Just a Tap Away!",
      description:
        "View doctor profiles, check expertise, clinic hours, and book your appointment in seconds.",
      link: "#", // Replace with your link
    },
    {
      image: "/healthcare/ad3.png",
      title: "Stay on Top of Your Health Reports!",
      description:
        "Track and manage your health records effortlessly with our secure medical report storage",
      link: "#", // Replace with your link
    },
    {
      image: "/healthcare/ad4.png",
      title: "Seamless Scheduling for a Healthier You!",
      description:
        "Choose a convenient time slot, confirm your appointment, and never miss a checkup!",
      link: "#", // Replace with your link
    },
    {
      image: "/healthcare/ad5.png",
      title: "UI/UX",
      description:
        "This UI/UX project aims to enhance digital healthcare accessibility, making medical consultations more convenient and efficient for users",
      link: "#", // Replace with your link
    },
  ];
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        <Hero />
      </motion.div>
      <About />
      <div id="projects">
        <h2 className="text-3xl font-bold pt-8 pl-8 text-left text-primary drop-shadow-sm md:text-4xl">
          Case Studies
        </h2>{" "}
        {projects.map((project) => (
          <ProjectShowcase key={project.id} project={project} />
        ))}
        <h2 className="text-3xl font-bold pt-8 pl-8 text-left text-primary drop-shadow-sm md:text-4xl">
          Mini Projects
        </h2>
        <CardComponent
          title="HealthCare App"
          image="/healthcare/preview.png"
          desc="This healthcare app is designed to provide a seamless and user-friendly experience for patients seeking medical consultations. The app allows users to search for doctors, book appointments, track health reports, and manage medical records effortlessly. With an intuitive interface, users can explore doctor profiles, check availability, and schedule consultations in just a few taps. The design prioritizes accessibility, efficiency, and a calming aesthetic to ensure a stress-free healthcare journey."
          prototypeUrl="https://www.figma.com/proto/COhAAH7VYbWN9ESPIH0AjB/HealthCare--Neha?node-id=0-1&t=vMx78r7wG3aDpmbU-1"
          figmaUrl="https://www.figma.com/design/COhAAH7VYbWN9ESPIH0AjB/HealthCare--Neha?node-id=0-1&t=vMx78r7wG3aDpmbU-1"
          galleryItems={healthcare}
        />
        <CardComponent
          title="EdTech SEO Dashboard"
          image="/dashboard/preview.png"
          desc="The EdTech SEO Dashboard is a comprehensive data visualization tool designed to help administrators track student engagement, course performance, instructor effectiveness, and revenue trends. It consists of three key dashboards—Overview, Report & Analysis, and User Management—each providing actionable insights through interactive charts and real-time data. By streamlining decision-making and optimizing learning experiences, this dashboard empowers institutions to improve course offerings, enhance user engagement, and drive growth efficiently."
          prototypeUrl="https://www.figma.com/proto/CrbXhRByTHvdxHJSHevinP/Dashboard--Neha?node-id=0-1&t=g8qAxbPL9kEHR6Xb-1"
          figmaUrl="https://www.figma.com/design/CrbXhRByTHvdxHJSHevinP/Dashboard--Neha?node-id=0-1&t=g8qAxbPL9kEHR6Xb-1"
          galleryItems={dashboard}
        />
        <CardComponent
          title="BookStream"
          image="/bookstream.png"
          desc="Book Stream is an elegantly designed desktop application that combines modern aesthetics with sophisticated functionality. Its warm, inviting color palette and premium typography create a luxurious, minimalist interface, while its streamlined user flow enhances usability. Users start by browsing their book collection, proceed through a customizable video creation process with intuitive tab-based settings, and finally view and download high-quality videos through a sleek player. The Figma file supporting the application is meticulously organized, ensuring consistency and ease of updates with dedicated pages for each major screen and reusable components for efficient design management."
          prototypeUrl="https://www.figma.com/proto/KXZLv5XOQTaUHKvWqQVPDj/BookStream?node-id=51-1269&t=IrAb8V2saaCqDhwZ-1"
          figmaUrl="https://www.figma.com/design/KXZLv5XOQTaUHKvWqQVPDj/BookStream?node-id=51-1269&t=IrAb8V2saaCqDhwZ-1"
          galleryItems={bookStream}
        />
        <CardComponent
          title="Sprite Concept App"
          image="/sprite_0.png"
          desc="Imagine an app for Sprite, The Sprite Refresh app combines interactive experiences with personalized features to enhance user engagement and brand loyalty."
          prototypeUrl="https://www.figma.com/proto/UXTPCnf8lCXkhilzvz0Muz/Untitled?node-id=11-272&t=RxViDiYfbyJ31aMr-1"
          figmaUrl="https://www.figma.com/design/UXTPCnf8lCXkhilzvz0Muz/Untitled?node-id=11-272&t=RxViDiYfbyJ31aMr-1"
          galleryItems={Sprite}
        />
        <CardComponent
          title="CamperQuest"
          image="/camperalt.png"
          desc="CamperQuest an innovative app designed for booking fully equipped camper vans and packaged vacation experiences and provide  users with an unparalleled travel experience, combining convenience, community, and adventure."
          prototypeUrl="https://www.figma.com/proto/sF7ovqM4uypoMrXbiwCxvp/showcase?node-id=2-77&t=vZj0xfsn5h33sdyW-1"
          figmaUrl="https://www.figma.com/design/sF7ovqM4uypoMrXbiwCxvp/showcase?node-id=2-77&t=vZj0xfsn5h33sdyW-1"
          galleryItems={camper}
        />
      </div>
      <Footer/>
    </>
  );
}

export default App;
