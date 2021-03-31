import PropTypes from 'prop-types';
import { useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import SVGButton from '../svg-button';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function ImageGallery({ images, className }) {

   const [curImageIdx, setCurImageIdx] = useState(0);
   const curImg = useMemo(() => 
      <CurImage src={images[curImageIdx]} alt="Current Image for vehicle"/>
   , [curImageIdx]);

   const thumbnails = useMemo(() =>
      images.map((i, idx) =>
         <Thumbnail 
            alt={`Image #${i} for vehicle`}
            key={i}
            src={i}
            id={i}
            selected={curImageIdx === idx}
            onClick={() => setCurImageIdx(idx)}
         />
      )
   , [curImageIdx]);

   useEffect(() => {
      document.getElementById(images[curImageIdx]).scrollIntoView({block: 'nearest', inline: 'center'});
   }, [curImageIdx]);

   return (
      <Wrapper className={className}>
         <CurImageWrapper>
            <PrevBtn  onClick={() => setCurImageIdx(modulo((curImageIdx-1), images.length))}>
               <SVGButton width="50" height="50" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="60" className="fill"/>
                  <path d="M59.5 47.125L37.7537 70L36 67.75L59.5 43L83 67.75L80.8955 70L59.5 47.125Z" fill="white" strokeWidth="4"/>
               </SVGButton>
            </PrevBtn>
            { curImg }
            <NextBtn onClick={() => setCurImageIdx(modulo((curImageIdx+1), images.length))}>
               <SVGButton width="50" height="50" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="60" className="fill"/>
                  <path d="M59.5 47.125L37.7537 70L36 67.75L59.5 43L83 67.75L80.8955 70L59.5 47.125Z" fill="white" strokeWidth="4"/>
               </SVGButton>
            </NextBtn>
         </CurImageWrapper>
         <ThumbnailWrapper>
            {thumbnails}
         </ThumbnailWrapper>
      </Wrapper>
   );
}

function modulo(a, n) {
   return ((a % n ) + n ) % n;
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

ImageGallery.propTypes = {
   images: PropTypes.arrayOf(PropTypes.string),
   className: PropTypes.string
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const Wrapper = styled.div`
   width: 100%;
   padding: min(30px, 5%);
   overflow-x: hidden;
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-between;
`;
const CurImageWrapper = styled.div`
   position: relative;
   width: 100%;
   height: min(600px, 60vw);
   margin: 0;
   border-radius: 20px;
   padding: 0;
   display: flex;
   flex-flow: row nowrap;
`;
const CurImage = styled.img`
   width: 100%;
   border-radius: inherit;
   object-fit: cover;
`;
const Button = styled.button`
   position: absolute;
   top: 50%;
   margin: 0 10px;
   border: none;
   border-radius: 100%;
   padding: 0;
   opacity: .8;
   transition: background-color .2s ease-in-out;
   background-color: transparent;
   :focus {
      outline: none;
      box-shadow: none;
   }
`;
const NextBtn = styled(Button).attrs({
   ariaLabel: 'Next Image'
})`
   right: 0;
   transform: rotate(90deg);
`;
const PrevBtn = styled(Button).attrs({
   ariaLabel: 'Previous Image'
})`
   left: 0;
   transform: rotate(-90deg);
`;
const ThumbnailWrapper = styled.div`
   margin-top: 10px;
   height: 100px;
   width: 100%;
   overflow-x: scroll;
   display: flex;
   flex-flow: row nowrap;
`;
const Thumbnail = styled.img`
   height: 75px;
   width: 75px;
   margin: 0 5px;
   border: ${({selected, theme}) => selected ? '2px solid' + theme.teal : 'none'};
   border-radius: 5px;
   object-fit: cover;
   box-sizing: border-box;
`;