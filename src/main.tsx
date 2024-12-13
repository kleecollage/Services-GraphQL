import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
	split
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import * as ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';

import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
	uri: 'http://localhost:4000/graphql',
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: 'ws://localhost:4000/graphql',
	})
);

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
