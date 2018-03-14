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

import { graphqlMatchType } from "../types";

import * as mongoose from "mongoose";

const Match = mongoose.model("Match");

export const match = {
    type: graphqlMatchType,
    args: {
        id: {
            name: "id",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root: any, params: any, options: any) {
        return Match.find({_id: params.id}).exec();
    }
};

export const matches = {
    type: new GraphQLList(graphqlMatchType),
    args: {},
    resolve (root: any, params: any, options: any) {
        return Match.find({}).exec();
    }
};
