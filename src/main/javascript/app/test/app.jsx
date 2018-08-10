import React from "react";
import {I18nextProvider} from 'react-i18next';
import {ApolloProvider} from 'react-apollo';
import {DxContext} from "../DxContext.jsx";
import Test from './test';
import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

const client = (props => {
    const link = new HttpLink({
        uri: props.dxContext.servletContext + '/modules/graphql'
    });

    return new ApolloClient({
        link: link,
        cache: new InMemoryCache()
    });
});

class TestComp extends React.Component {

    render() {
        let {dxContext} = this.props;
        return <ApolloProvider client={client(this.props)}>
                        <DxContext.Provider value={dxContext}>
                            <Test dxContext={dxContext} />
                        </DxContext.Provider>
                </ApolloProvider>
    }

}

export default TestComp;