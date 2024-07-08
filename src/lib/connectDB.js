import { Rtt } from '@mui/icons-material';

const { MongoClient, ServerApiVersion } = require('mongodb');


let db
export const connectDB = async()=>{
  if(db)return db
  try {
  const uri = process.env.URI;
  console.log(uri);


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
  db = client.db('Poultry_FarmDB')
  return db
} catch (error) {
  console.log(error);
 return []
}
}