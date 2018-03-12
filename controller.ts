import * as Router from "koa-router";
import Index from "./src/controllers/index";
import Player from "./src/controllers/player";

const router = new Router();

router.get("/index", Index.index);
router.get("/hello", Index.hello);

router.get("/api/v1/player", Player.getAllPlayers);

export default router;