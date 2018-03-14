import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
} from "graphql";

import { match, matches } from "./match";

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Queries",
        fields: {
            match,
            matches,
        }
    })
});