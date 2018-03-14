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

import * as mongoose from "mongoose";

const Match = mongoose.model("Match");

const PlayerType = new GraphQLObjectType({
    name: "Player",
    fields: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        class: { type: GraphQLInt },
    }
});

const MatchType = new GraphQLObjectType({
    name: "Match",
    fields: {
        _id: { type: GraphQLString },
        date: { type: GraphQLString },
        players: { type:  new GraphQLList(PlayerType) },
        winner: { type: GraphQLInt },
    }
});

const match = {
    type: MatchType,
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

const matchs = {
    type: new GraphQLList(MatchType),
    args: {},
    resolve (root: any, params: any, options: any) {
        return Match.find({}).exec();
    }
};

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Queries",
        fields: {
            match,
            matchs,
        }
    })
});