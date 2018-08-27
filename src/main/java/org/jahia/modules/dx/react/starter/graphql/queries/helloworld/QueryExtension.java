package org.jahia.modules.dx.react.starter.graphql.queries.helloworld;

import graphql.annotations.annotationTypes.*;
import org.jahia.modules.graphql.provider.dxm.DXGraphQLProvider;

@GraphQLTypeExtension(DXGraphQLProvider.Query.class)
@GraphQLDescription("Example of a GraphQL query extension")
public class QueryExtension {

    @GraphQLField
    public static String getUserLastLogin(@GraphQLNonNull @GraphQLName("name") String name) {
        //Use provided information to retrieve some data from the server.
        return "Hello " + name + ", the last name you logged in is...";
    }
}
