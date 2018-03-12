import BaseControl from "./base";
import { index } from "../types/index";
import { } from "../models";
import PlayerService from "../service/player";

class Player extends BaseControl {

    public getAllPlayers = async(ctx: any, next: any): Promise<void> => {
        const result = await PlayerService.getAllPlayers();
        ctx.response.body = result;
    };
}

export default new Player();