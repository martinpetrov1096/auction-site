import info from '../config/site-info.json';
import styled from 'styled-components';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Footer() {

   return (
      <Wrapper>
         <Section>
            <h4>Contact</h4>
            <p>Phone Number: {info.contact.phone}</p>
            <p>Email: {info.contact.email}</p>
            <p>Address: {info.contact.address}</p>
         </Section>
         <Section>
            <h4>About</h4>
            <p>{info.about.description}</p>
         </Section>

      </Wrapper>
   );
}
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Wrapper = styled.div`
   position: relative;
   bottom: 0;
   padding: 20px;
   margin-top: 100px;
   width: calc(100% - 40px);
   background-color: ${({theme}) => theme.grey};
   color: white;
   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: baseline;
`;

const Section = styled.div`
   width: 400px;
   .section > h4 {
   margin-bottom: 10px;
}
.section > h6 {
   margin: 5px;
}
.section > p {
   font-size: 14px;
}
`;