import express, { Application, Request, Response } from 'express';
import * as dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';

const app: Application = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
