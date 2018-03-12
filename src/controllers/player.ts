import Base from "../base";
import { index } from "../types/index";
import { } from "../models";
import PlayerService from "../service/player";

class Player extends Base {

    public getAllPlayers = async(ctx: any, next: any): Promise<void> => {
        const result = await PlayerService.getAllPlayers();
        ctx.response.body = { res: result };
    };
}

export default new Player();