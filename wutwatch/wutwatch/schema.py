import graphene
import profiles.schema


class Query(profiles.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)