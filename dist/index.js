import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from 'node:http';
import { WebSocketServer } from 'ws';
import { resolvers } from './resolvers';
import { typeDefs } from './schemas';
dotenv.config();
const app = express();
const httpServer = createServer(app);
app.use(cors());
app.use(express.json());
const wsServerCleanup = new WebSocketServer({
    server: httpServer,
    path: '/graphql'
});
const schema = makeExecutableSchema({ typeDefs, resolvers });
const serverCleanup = useServer({ schema }, wsServerCleanup);
const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await serverCleanup.dispose();
                    },
                };
            },
        },
    ],
});
await server.start();
app.use('/graphql', expressMiddleware(server));
const port = process.env.PORT || 4000;
httpServer.listen(port, () => {
    console.log('App running on port: ', port);
});
