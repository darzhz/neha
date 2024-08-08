import React from 'react';
import { FaFigma, FaEye } from 'react-icons/fa';
import style from './ButtonComponent.module.css';

function ButtonComponent({ figmaUrl, prototypeUrl }) {
  return (
    <div className={style.buttonContainer}>
      <a href={figmaUrl} target="_blank" rel="noopener noreferrer" className={style.button}>
        <FaFigma className={style.icon} />
        <span className={style.buttonText}>Figma</span>
      </a>
      <a href={prototypeUrl} target="_blank" rel="noopener noreferrer" className={style.button}>
        <FaEye className={style.icon} />
        <span className={style.buttonText}>View</span>
      </a>
    </div>
  );
}

export default ButtonComponent;
