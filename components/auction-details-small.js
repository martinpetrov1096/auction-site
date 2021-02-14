import { useMemo } from 'react';
import { auctionProp } from '../utils/prop-types';
import { Card, Button } from 'react-bootstrap';

/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// COMPONENT /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

export default function AuctionDetailsSmall({ auction }) {

   const link = useMemo(() => {
      return auction.vehicleInfo.make + '/'
           + auction.vehicleInfo.model + '/'
           + auction.id; 
   });

   return (
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={auction.images[0]} />
         <Card.Body>
            <Card.Title>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</Card.Title>
            <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the cards content.
            </Card.Text>
            <Button href={link} variant="primary">More Details</Button>
         </Card.Body>
      </Card>
   );
}
///////////////////////////////////////////
////////// COMPONENT PROP TYPES ///////////
///////////////////////////////////////////

AuctionDetailsSmall.propTypes = {
   auction: auctionProp
};