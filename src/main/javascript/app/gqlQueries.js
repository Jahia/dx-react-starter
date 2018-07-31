import gql from 'graphql-tag';

const gqlQueries = {
    SITE_QUERY: gql`query Sites($path: String!){
        jcr {
            nodeByPath(path: $path) {
              displayName  
              name
              path
              children {
                nodes {
                  displayName
                  name
                }
              }
            }
          }
    }`
};

export default gqlQueries;