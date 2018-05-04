import graphene

import movies.schema
import profiles.schema


class Query(movies.schema.Query,
            profiles.schema.Query,
            graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)