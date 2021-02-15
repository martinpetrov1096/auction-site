import { useMemo, useState } from 'react';
import { Container, Button, Form, Col } from 'react-bootstrap';

import auctions from '../config/auctions.json';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function filter() {
   const [curMake, setCurMake] = useState();
   const [curModel, setCurModel] = useState();

   const makeElements = useMemo(() => {
      const makes = auctions.map((a) => {
         return a.vehicleInfo.make;
      });
      const uniqueMakes = makes.filter((make, index) => {
         return makes.indexOf(make) === index;
      });
      return uniqueMakes.map((m) => {
         return <option key={m} className="text-capitalize">{m}</option>;
      });
   }, [auctions]);

   const modelElements = useMemo(() => {

      const models = auctions.reduce((curModels, auction) => {
         if (auction.vehicleInfo.make != curMake) {
            return curModels;
         }
         if (curModels.includes(auction.vehicleInfo.model)) {
            return curModels;
         } else {
            return [...curModels, auction.vehicleInfo.model];
         }
      }, []);

      return models.map((m) => {
         return <option key={m} className="text-capitalize">{m}</option>;
      });
   }, [auctions, curMake]);



   const filterLink = useMemo(() => {
      if (!curMake) {
         return '';
      }
      if (!curModel) {
         return ('/' + curMake);
      }
      return ('/' + curMake + '/' + curModel);

   }, [curMake, curModel]);

   return (
      <Container fluid className="mt-5 text-capitalize">
         <Form.Row>
            <Col>
               <Form.Control as="select" defaultValue="Make" value={curMake} onChange={() => setCurMake(event.target.value)}>
                  <option>Make</option>
                  {makeElements}
               </Form.Control>
            </Col>
            <Col>
               <Form.Control as="select" defaultValue="Model" value={curModel} onChange={() => setCurModel(event.target.value)}>
                  <option>Model</option>
                  {modelElements}
               </Form.Control>
            </Col>


    

            <Button variant="primary" type="submit" href={filterLink}>Filter</Button>
         </Form.Row>
      </Container>
   );
}