import graphene

import movies.schema
import profiles.schema
import watchlists.schema


class Query(movies.schema.Query,
            profiles.schema.Query,
            watchlists.schema.Query,
            graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)