import {shape, number, string, arrayOf } from 'prop-types';

export const conditionProp = shape({
   status: string,
   primaryDamage: string,
   secondaryDamage: string,
   estimatedRetailValue: number,
   estimatedRepairCost: number,
   keys: string
});

export const vehicleInfoProp = shape({
   make: string.isRequired,
   model: string.isRequired,
   year: number.isRequired,
   vin: string,
   mileage: string,
   engine: string,
   transmission: string,
   wheelsDriven: string,
   bodyColor: string,
   interiorColor: string,
   fuel: string
});

export const auctionProp = shape({
   id: number.isRequired,
   auctioneer: string.isRequired,
   lotNumber: number.isRequired,
   dateEnding: string.isRequired,
   seller: string.isRequired,
   location: string.isRequired,
   notes: arrayOf(string),
   images: arrayOf(string),
   condition: conditionProp,
   vehicleInfo: vehicleInfoProp
});

