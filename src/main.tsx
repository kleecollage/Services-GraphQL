import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';

const client = new ApolloClient({
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
