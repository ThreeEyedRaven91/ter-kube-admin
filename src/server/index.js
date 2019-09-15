import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

const server = new ApolloServer(schema);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../client`));

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;

app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
