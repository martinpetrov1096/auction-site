import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import styled from 'styled-components';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function ImageGallery({ images, className }) {

   const [curImageIdx, setCurImageIdx] = useState(0);

   const thumbnails = useMemo(() => {
      return images.map((i, idx) => {
         return (
            <Thumbnail 
               alt={`Image #${i} for vehicle`}
               key={i}
               src={i}
               selected={curImageIdx === idx}
               onClick={() => setCurImageIdx(idx)}
            />);
      });
   });

   return (
      <Wrapper className={className}>
         <CurImageWrapper>
            <button aria-label="Previous Image" onClick={() => setCurImageIdx(modulo((curImageIdx-1), images.length))}></button>
            <CurImage src={images[curImageIdx]} alt="Main Image for vehicle"/>
            <button aria-label="Next Image" onClick={() => setCurImageIdx(modulo((curImageIdx+1), images.length))}></button>
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
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-between;
`;
const CurImageWrapper = styled.div`
   position: relative;
   height: 100%;
   display: flex;
   flex-flow: row nowrap;
`;
const CurImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;
const Button = styled.button`

`;
const NextBtn = styled(Button)`

`;
const PrevBtn = styled(Button)`

`;
const ThumbnailWrapper = styled.div`
   display: flex;
   flex-flow: row wrap;

`;
const Thumbnail = styled.img`
   border: ${({selected, theme}) => selected ? '2px solid' + theme.teal : 'none'};
   width: 75px;
   height: 75px;
   object-fit: cover;
   box-sizing: border-box;
`;