import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt,
} from "graphql";

import { graphqlRankType } from "../types";

import * as mongoose from "mongoose";

const Match = mongoose.model("Match");

export const rank = {
    type: new GraphQLList(graphqlRankType),
    args: {
        month: {
            name: "month",
            type: GraphQLInt
        }
    },
    resolve (root: any, params: any, options: any) {
        return Match.find();
    }
};

