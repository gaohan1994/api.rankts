import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
} from "graphql";

import { match, matches } from "./match";
import { rank } from "./rank";

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Queries",
        fields: {
            match,
            matches,
            rank,
        }
    })
});