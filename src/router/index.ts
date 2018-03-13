import * as Router from "koa-router";
import { graphiqlKoa, graphqlKoa } from "graphql-server-koa";
import Index from "../controllers/index";
import Player from "../controllers/player";
import Match from "../controllers/match";

const router = new Router();

router.get("/index", Index.index);
router.get("/hello", Index.hello);

router.get("/api/v1/player", Player.getAllPlayers);
router.get("/api/v1/match", Match.getAllMatchs);
router.get("/api/v1/match/:id", Match.getOneMatchById);

router.post("/api/v1/addmatch", Match.insertOneMatch);

router.post("/api/v1/updatematch", Match.updateMatchById);

router.get("/graphiql", async (ctx, next) => {
    await graphiqlKoa({endpointURL: "/graphql"});
});

export default router;