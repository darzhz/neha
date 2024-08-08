import React from 'react';
import style from './CardComponent.module.css';
import ButtonComponent from './ButtonComponent';
import ScrollingGallery from './ScrollingGallery'; // Import the scrolling gallery component

function CardComponent({ title, image,desc }) {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div className={style.content_group}>
            <h2 className={style.cardTitle}>{title}</h2>
            <p className={style.desc}>{desc}</p>
            <ButtonComponent figmaUrl="sss" prototypeUrl="sss"/>
        </div>
        <img src={image} alt={title} className={style.cardImage} />
      </div>
      <div className={style.cardContent}>
        <ScrollingGallery /> {/* Integrate the scrolling gallery component */}
      </div>
    </div>
  );
}

export default CardComponent;
