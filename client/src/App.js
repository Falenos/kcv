import React, { Component } from 'react';
import Header from './components/core/Header/Header';
import Footer from './components/core/Footer/Footer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Addresses from './components/molecules/Address/Addresses';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Header/>

                <main>
                    <Addresses></Addresses>
                </main>

                <Footer/>
            </ApolloProvider>
        );
    }
}

export default App;
