import React from "react";
import {client} from '@jahia/apollo-dx';
import {getI18n} from '@jahia/i18next';
import {I18nextProvider} from 'react-i18next';
import {ApolloProvider} from 'react-apollo';
import {DxContext} from "../DxContext.jsx";
import Test from './test';

class TestComp extends React.Component {

    render() {
        let {dxContext} = this.props;
        return <ApolloProvider client={client({contextPath: dxContext.contextPath})}>
                    <I18nextProvider i18n={getI18n({
                        lng: dxContext.uilang,
                        contextPath: dxContext.contextPath,
                        ns: ['dx-react-starter'],
                        defaultNS: 'dx-react-starter',
                    })}>
                            <DxContext.Provider value={dxContext}>
                                <Test dxContext={dxContext} />
                            </DxContext.Provider>
                    </I18nextProvider>
                </ApolloProvider>
    }

}

export default TestComp;