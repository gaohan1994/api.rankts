import { Context } from "koa";
import Base from "../base";
import { index } from "../types/index";
import PlayerService from "../service/player";

class Player extends Base {

    public getAllPlayers = async(ctx: any, next: any): Promise<void> => {
        const result = await PlayerService.getAllPlayers();
        ctx.response.body = { res: result };
    };

    public getPlayerByName = async (ctx: Context, next: any): Promise<void> => {
        const name = ctx.params.name;
        const result = await PlayerService.findPlayerByName(name);
        ctx.response.body = result;
    };
}

export default new Player();