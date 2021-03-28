import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import auctions from '../config/auctions.json';

import styled from 'styled-components';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function filter() {
   const router = useRouter();
   const [curMake, setCurMake] = useState('any');
   const [curModel, setCurModel] = useState('any');

   useEffect(() => {
      const { make, model } = router.query;
      setCurMake(make ?? 'any');
      setCurModel(model ?? 'any');
   }, []);

   const makeElements = useMemo(() => {
      const makes = auctions.map((a) => {
         return a.vehicleInfo.make;
      });
      const uniqueMakes = makes.filter((make, index) => {
         return makes.indexOf(make) === index;
      });
      return uniqueMakes.map((m) => {
         return <option key={m}>{m}</option>;
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
         return <option key={m}>{m}</option>;
      });
   }, [auctions, curMake]);

   const filter = useCallback(() => {
      if (curMake === 'any' && curModel === 'any') {
         router.push('/');
         return;
      }
      if (!curMake || curMake === 'any') {
         return;
      }
      if (!curModel || curModel === 'any') {
         router.push('/' + curMake);
         return;
      }
      router.push('/' + curMake + '/' + curModel);
   }, [curMake, curModel]);


   return (
      <Form>
         <SelectWrapper>
            <Label for="make">Filter By Car Manufacturers</Label>
            {/* When choosing a new make, reset curModel to be 'any' */}
            <Select name="Make" id="make" value={curMake} onChange={() => {setCurMake(event.target.value); setCurModel('any');}}>
               <option defaultValue>any</option>
               {makeElements}
            </Select>
         </SelectWrapper>
         <SelectWrapper  hidden={curMake === 'any'}>
            <Label for="model">Filter By Car Models</Label>
            <Select name="Model" id="model" value={curModel} onChange={() => setCurModel(event.target.value)}>
               <option defaultValue>any</option>
               {modelElements}
            </Select>
         </SelectWrapper>
         <FilterButton onClick={(e) => {e.preventDefault(); filter();}}>Filter</FilterButton>
      </Form>
   );
}
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const Form = styled.form`
   margin: 20px;
   width: calc(100% - 20px);
   display: flex;
   flex-flow: column nowrap;
   justify-content: stretch;
   align-items: center;
`;
const SelectWrapper = styled.div`
   width: min(400px, 95%);
   font-family: 'Jura', sans-serif;
   display: ${({hidden}) => hidden ? 'none' : 'flex'};
   flex-flow: column nowrap;
   justify-content: stretch;
`;
const Label = styled.label`
   text-align: center;
`;
const Select = styled.select`
   height: 40px;
   margin: 10px 0;
   padding: 10px;
   border-radius: 15px;
   background-color: var(--bgColor);
   font-family: 'Jura', sans-serif;
   text-transform: capitalize;
   text-align: center;
`;
const FilterButton = styled.button.attrs({
   ariaLabel: 'Filter'
})`
   border: none;
   border-radius: 10px;
   padding: 10px 20px;
   font-family: 'Michroma', sans-serif;
   letter-spacing: 1px;
   font-size: 12px;
   color: white;
   background-color: ${({theme}) => theme.grey};
   transition: background-color .2s ease-in-out;
   :hover {
      background-color: ${({theme}) => theme.teal};
   }
`;