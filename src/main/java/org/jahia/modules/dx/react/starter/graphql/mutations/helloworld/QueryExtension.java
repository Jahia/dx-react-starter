package org.jahia.modules.dx.react.starter.graphql.mutations.helloworld;

import graphql.annotations.annotationTypes.*;
import org.jahia.modules.graphql.provider.dxm.DXGraphQLProvider;

@GraphQLTypeExtension(DXGraphQLProvider.Mutation.class)
@GraphQLMutation
@GraphQLDescription("Example of a GraphQL mutation extension")
public class QueryExtension {

    @GraphQLField
    public static String addUser(@GraphQLNonNull @GraphQLName("name") String name) {
        //Update nodes, open connections etc...
        return "Added user: " + name;
    }
}
