import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
} from "graphql";

import mongoose from "mongoose";

const Match = mongoose.model("Match");

const match = {

};

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Queries",
        fields: {}
    })
});