
//moduele requirements
const Parse = require('parse/node');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
require('dotenv').config();

//imports 

//connecting to server
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";


//requiring queries
const FirstMovie = require('./queries/firstMovie').modules;
const MortalSpecies = require('./queries/mortalSpecies').modules;

(async () => {
  const firstMovie = await new FirstMovie().request();
  const mortalSpecies = await new MortalSpecies().request();
  console.log(mortalSpecies);
})();