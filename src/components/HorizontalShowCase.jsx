import React from 'react';
import style from './HorizontalShowCase.module.css';

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

function HorizontalShowCase() {
  return (
    <div className={style.horizontalShowcaseContainer}>
      {caseStudies.map((caseStudy, index) => (
        <div key={index} className={style.horizontalCaseStudyCard}>
          <img src={caseStudy.image} alt={caseStudy.title} className={style.horizontalCaseStudyImage} />
          <div className={style.horizontalCaseStudyContent}>
            <h2 className={style.horizontalCaseStudyTitle}>{caseStudy.title}</h2>
            <p className={style.horizontalCaseStudyDescription}>{caseStudy.description}</p>
            <a href={caseStudy.link} className={style.horizontalCaseStudyLink} target="_blank" rel="noopener noreferrer">
              View Case Study
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HorizontalShowCase;
