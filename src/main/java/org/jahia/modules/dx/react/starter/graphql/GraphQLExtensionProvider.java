package org.jahia.modules.dx.react.starter.graphql;

import org.jahia.modules.graphql.provider.dxm.DXGraphQLExtensionsProvider;
import org.osgi.service.component.annotations.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Component(service = DXGraphQLExtensionsProvider.class, immediate = true)
public class GraphQLExtensionProvider implements DXGraphQLExtensionsProvider {

    @Override
    public Collection<Class<?>> getExtensions() {
        List<Class<?>> extensions = new ArrayList<>();
        //Add extensions as follows:
        //extensions.add(GraphQLExtension.class);
        extensions.add(org.jahia.modules.dx.react.starter.graphql.mutations.helloworld.QueryExtension.class);
        extensions.add(org.jahia.modules.dx.react.starter.graphql.queries.helloworld.QueryExtension.class);
        return extensions;
    }
}
