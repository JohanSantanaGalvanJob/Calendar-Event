import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './Carrousel.css'

// const fadeImages = [
//   {
//   url: 'img/evento1.png',
//   caption: 'Conciertos'
//   },
//   {
//   url: 'img/evento2.jpg',
//   caption: 'Cine'
//   },
//   {
//   url: 'img/evento3.jpg',
//   caption: 'Womad'
//   },
// ];

//   export const Carrousel = () => {
//   return (
//     <div className="slide-container">
//       <Fade>
//         {fadeImages.map((fadeImage, index) => (
//           <div className="each-fade" key={index} >
//             <div className="image-container">
//               <img className='image-sizes' src={fadeImage.url} />
//             </div>
//           </div>
//         ))}
//       </Fade>
//     </div>
//   )
// }

export const Carrousel = () => {
  const images = [
      "/img/evento1.png",
      "/img/evento2.jpg",
      "/img/evento3.jpg",
  ];

  return (
    <div className='carrousel'>
      <Slide>
       
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                  <span>Conciertos</span>
              </div>
          </div>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                  <span>Cine</span>
              </div>
          </div>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                  <span>Y más!</span>
              </div>
          </div>
        
      </Slide>
      </div>
  );
};