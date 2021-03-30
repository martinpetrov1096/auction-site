import PropTypes from 'prop-types';
import { useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';


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
            <PrevBtn  onClick={() => setCurImageIdx(modulo((curImageIdx-1), images.length))}/>
            { curImg }
            <NextBtn onClick={() => setCurImageIdx(modulo((curImageIdx+1), images.length))}/>
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
   height: 100%;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   border-radius: inherit;
   object-fit: cover;
`;
const Button = styled.button`
   position: absolute;
   height: 100%;
   width: 50%;
   border: none;
   padding: 0;
   opacity: 0;
   transition: background-color .2s ease-in-out;
   :hover {
      opacity: .2;
      background-color: ${({theme}) => theme.teal};
   }
`;
const NextBtn = styled(Button).attrs({
   ariaLabel: 'Next Image'
})`
   right: 0;
`;
const PrevBtn = styled(Button).attrs({
   ariaLabel: 'Previous Image'
})`
   left: 0;
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