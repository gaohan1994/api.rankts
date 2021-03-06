import * as Router from "koa-router";
import { graphiqlKoa, graphqlKoa } from "graphql-server-koa";
import Player from "../controllers/player";
import Match from "../controllers/match";
import { Context } from "koa";
import schema from "../graphql/index";
import Sign from "../controllers/sign";

const router = new Router();

// router.get("/api/v1/players", Player.getAllPlayers);

// router.get("/api/v1/player/:name", Player.getPlayerByName);

// router.get("/api/v1/matches", Match.getAllMatchs);

// router.get("/api/v1/match/:id", Match.getOneMatchById);

// router.post("/api/v1/addmatch", Match.insertOneMatch);

// router.post("/api/v1/updatematch", Match.updateMatch);

// router.post("/api/v1/deletematch/:id", Match.deleteOneMatchById);

router.get("/wxsign", Sign.getWeixinSign);

// router
//     .post("/api/v1/graphql", async (ctx: Context, next: any): Promise<void> => {
//         await graphqlKoa({schema: schema})(ctx, next); // 使用schema
//     })
//     .get("/api/v1/graphql", async (ctx: Context, next: any): Promise<void> => {
//         await graphqlKoa({schema: schema})(ctx, next); // 使用schema
//     })
//     .get("/api/v1/graphiql", async (ctx: Context, next: any): Promise<void> => {
//         await graphiqlKoa({endpointURL: "/api/v1/graphql"})(ctx); // 重定向到graphiql路由
//     });

export default router;