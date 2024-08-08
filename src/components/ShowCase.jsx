import React from 'react';
import style from './ShowCase.module.css';

const caseStudies = [
  {
    image: '/sprite_1.png', // Placeholder image 1
    title: 'UI/UX Design Project 1',
    description: 'A brief description of the first project.',
    link: '#', // Replace with your link
  },
  {
    image: 'https://via.placeholder.com/300', // Placeholder image 2
    title: 'UI/UX Design Project 2',
    description: 'A brief description of the second project.',
    link: '#', // Replace with your link
  },
  // Add more case studies as needed
];

function ShowCase() {
  return (
    <div className={style.showcaseContainer}>
      {caseStudies.map((caseStudy, index) => (
        <div key={index} className={style.caseStudyCard}>
          <img src={caseStudy.image} alt={caseStudy.title} className={style.caseStudyImage} />
          <div className={style.caseStudyContent}>
            <h2 className={style.caseStudyTitle}>{caseStudy.title}</h2>
            <p className={style.caseStudyDescription}>{caseStudy.description}</p>
            <a href={caseStudy.link} className={style.caseStudyLink} target="_blank" rel="noopener noreferrer">
              View Case Study
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowCase;
