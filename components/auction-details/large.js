import { useMemo } from 'react';
import { Card, Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { auctionProp } from '../../utils/prop-types';
import VehicleInfo from './vehicle-info';
////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionDetailsLarge({ auction }) {

   const imageElements = useMemo(() => {

      return auction.images.map((img) => {
         return (
            <Carousel.Item key={img}>
               <img src={img} alt="Vehicle Pictures" className="w-100" style={{overflow: 'hidden'}}>
               </img>
            </Carousel.Item>
         );
      });

   });


   return (

      <Container fluid className="p-3 m-5 w-100 text-capitalize">
         <h2 className="text-center">{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</h2>
         <Row>
            <Carousel className="w-100" style={{height: '600px'}}>
               {imageElements}
            </Carousel>
         </Row>
         <Row>
            <Col>
               <ListGroup>
                  <ListGroup.Item ></ListGroup.Item>
                  <ListGroup.Item>Auction: {auction.auctioneer}</ListGroup.Item>
                  <ListGroup.Item>Lot Number: {auction.lotNumber}</ListGroup.Item>
                  <ListGroup.Item>Date of Sale: {auction.dateEnding}</ListGroup.Item>
                  <ListGroup.Item>Lot Number: {auction.lotNumber}</ListGroup.Item>
                  <ListGroup.Item>Condition: {auction.condition.status}</ListGroup.Item>
                  <ListGroup.Item>Damage: {auction.condition.primaryDamage}</ListGroup.Item>
                  <ListGroup.Item>Mileage: {auction.vehicleInfo.mileage}</ListGroup.Item>
               </ListGroup>

            </Col>
            <Col>
               <VehicleInfo vehicleInfo={auction.vehicleInfo}/>
            </Col>
         </Row>
      </Container>

   );

}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionDetailsLarge.propTypes = {
   auction: auctionProp
};
