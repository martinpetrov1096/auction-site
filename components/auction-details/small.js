import { useMemo } from 'react';
import { auctionProp } from '../../utils/prop-types';
import { Card, Button, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionDetailsSmall({ auction }) {

   const link = useMemo(() => {
      return '/' + auction.vehicleInfo.make + '/'
           + auction.vehicleInfo.model + '/'
           + auction.id; 
   });

   return (
      <Card className="p-3 m-5 text-capitalize">
         <Container >
            <Row>
               <Col sm={12} md={6} lg={6}>
                  <Image src={auction.images[0]} thumbnail/>
                  <Button href={link}>More Details</Button>
               </Col>
               <Col>
                  <ListGroup>
                     <ListGroup.Item>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</ListGroup.Item>
                     <ListGroup.Item>Auction: {auction.auctioneer}</ListGroup.Item>
                     <ListGroup.Item>Lot Number: {auction.lotNumber}</ListGroup.Item>
                     <ListGroup.Item>Condition: {auction.condition.status}</ListGroup.Item>
                     <ListGroup.Item>Damage: {auction.condition.primaryDamage}</ListGroup.Item>
                     <ListGroup.Item>Mileage: {auction.vehicleInfo.mileage}</ListGroup.Item>
                  </ListGroup>
               </Col>
            </Row>
         </Container>
      </Card>

   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionDetailsSmall.propTypes = {
   auction: auctionProp
}; 