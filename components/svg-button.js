import PropTypes from 'prop-types';
import styled from 'styled-components';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function SVGButton({ width, height, viewBox, children}) {


   return (
      <Wrapper type="submit">
         <SVG width={width} height={height} viewBox={viewBox} fill="none" >
            {children}
         </SVG>
      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

SVGButton.propTypes = {
   children: PropTypes.node.isRequired,
   width: PropTypes.string,
   height: PropTypes.string,
   viewBox: PropTypes.string
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Wrapper = styled.button`
   box-shadow: none;
   border: none;
   border-radius: 100%;
   background-color: transparent;
   cursor: pointer;
   :focus {
      outline: none;
   }
`;
const SVG = styled.svg`
   > .stroke {
      transition: ${(props) => props.theme.transition};
      stroke: ${({theme}) => theme.grey};
   }
   > .fill {
      transition: ${(props) => props.theme.transition};
      fill: ${({theme}) => theme.grey};
   }
   :hover {
      > .stroke {
         stroke: ${(props) => props.theme.accentColor};
      }
      > .fill {
         fill: ${(props) => props.theme.accentColor};
      }
   }
`;