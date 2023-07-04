import React, { useEffect, useState } from 'react';
import styles from '../styles/Intro.module.css';
import animations from '../styles/Animations.module.css';

export type TextTurningProps = {
    sequence: Array<string>,
    holdingTime: number, 
    animationTime: number, 
    fontSize: string, 
    fontColor: string, 
    fontFamily: string
}

const TextTurning = (props: TextTurningProps) => {

    const {
        sequence,
        holdingTime, 
        animationTime, 
        fontSize, 
        fontColor, 
        fontFamily
    } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const animationInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sequence.length);
        }, (animationTime + holdingTime) * 1000);

        return () => clearInterval(animationInterval);
    }, [sequence, holdingTime, animationTime]);

    return (
        <ul style={{
            position: 'absolute',
            listStyleType: 'none', 
            padding: 0, 
            margin: 0, 
            fontFamily, 
            fontSize, 
            color: fontColor 
        }}>
            {sequence.map((string, index) => (
                <li
                    key={index}
                    style={{
                        display: currentIndex === index ? 'block' : 'none',
                        animation: currentIndex === index ? `${animations.fadein_b2t} ${animationTime}s` : 'none',
                    }}
                >
                    {string}
                </li>
            ))}
        </ul>
    );
};

export default TextTurning;

// // Example usage:
// const ExampleComponent = () => {
//   const sequence = ['String 1', 'String 2', 'String 3'];
//   const holdingTime = 3; // seconds
//   const animationTime = 1; // seconds
//   const fontSize = 16; // pixels
//   const fontColor = 'black';
//   const fontFamily = 'Arial';

//   return (
//     <TextTurning
//       sequence={sequence}
//       holdingTime={holdingTime}
//       animationTime={animationTime}
//       fontSize={fontSize}
//       fontColor={fontColor}
//       fontFamily={fontFamily}
//     />
//   );
// };
