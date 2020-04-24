import * as React from 'react';
const london = require( '../../assets/london.JPG');
const showa = require( '../../assets/showa2.JPG');
const paris = require( '../../assets/paris.JPG');
const sapporo = require( '../../assets/sapporo.JPG');

const images = [london, showa, paris, sapporo];

export const ChangingImage = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(((currentImageIndex + 1) < (images.length)) ? currentImageIndex + 1 : 0);
        }, 10000);    
        return () => clearInterval(intervalId);
      }, [currentImageIndex]);

    return (
        <img src={images[currentImageIndex]} alt={'Maggie Traveling'} className={'changing-image'} />
    );
}