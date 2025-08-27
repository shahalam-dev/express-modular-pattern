import dotenv, { config } from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });



export default {
  port: process.env.PORT,
  mongodb_url: process.env.MONGO_URL,
};
