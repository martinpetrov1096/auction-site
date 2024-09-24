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
            <label htmlFor="make">Manufacturer</label>
            {/* When choosing a new make, reset curModel to be 'any' */}
            <Select name="Make" id="make" value={curMake} onChange={() => {setCurMake(event.target.value); setCurModel('any');}}>
               <option defaultValue>any</option>
               {makeElements}
            </Select>
         </SelectWrapper>
         <SelectWrapper  hidden={curMake === 'any'}>
            <label htmlFor="model">Model</label>
            <Select name="Model" id="model" value={curModel} onChange={() => setCurModel(event.target.value)}>
               <option defaultValue>any</option>
               {modelElements}
            </Select>
         </SelectWrapper>
         <SearchWrapper invisibleLabel={true}>
            <label htmlFor="model">a</label>
            <FilterButton onClick={(e) => {e.preventDefault(); filter();}}>Filter</FilterButton>

         </SearchWrapper>
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
   flex-flow: row wrap;
   justify-content: center;
   align-items: center;
`;
const SelectWrapper = styled.div`
   margin: 0 5px;
   width: min(300px, 95%);
   font-family: ${({theme}) => theme.font};
   display: flex;
   flex-flow: column nowrap;
   justify-content: stretch;
   & label {
      text-align: center;
      font-size: 12px;
      color: ${({invisibleLabel}) => invisibleLabel ? 'white' : 'auto'};
   }
`;
const SearchWrapper = styled(SelectWrapper)`
   width: 70px;
`;

const Select = styled.select`
   height: 40px;
   padding: 10px;
   border-radius: 5px;
   background-color: var(--bgColor);
   font-family: ${({theme}) => theme.font};
   text-transform: capitalize;
   text-align: center;
`;
const FilterButton = styled.button.attrs({
   ariaLabel: 'Filter'
})`
   height: 40px;
   border: none;
   border-radius: 5px;
   padding: 10px 20px;
   font-family: ${({theme}) => theme.font};
   letter-spacing: 1px;
   font-size: 12px;
   color: white;
   background-color: ${({theme}) => theme.grey};
   transition: background-color .2s ease-in-out;
   :hover {
      background-color: ${({theme}) => theme.accentColor};
   }
`;