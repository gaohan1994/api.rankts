import { Context } from "koa";
import BaseControl from "../base";
import { index } from "../types/index";
import MatchService from "../service/match";

class MatchController extends BaseControl {

    /**
     * getAllMatchs
     */
    public getAllMatchs = async(ctx: Context, next: any): Promise<void> => {
        const result = await MatchService.findAllMatchs();
        ctx.body = { res: result };
    };

    /**
     * getOneMatch
     * params: id 比赛场次的id
     */
    public getOneMatchById = async (ctx: Context, next: any): Promise<void> => {
        const id = ctx.params.id;
        const result = await MatchService.findMatchById(id);
        ctx.response.body = result;
    };

    /**
     * insertOneMatch
     */
    public insertOneMatch = async(ctx: Context, next: any): Promise<void> => {
        const data = ctx.request.body;
        const result = await MatchService.insertOneMatch(data);
        ctx.response.body = result;
    };

    /**
     * deleteOneMatch
     */
    public deleteOneMatchById = async(ctx: Context, next: any): Promise<void> => {
        const id = ctx.params.id;
        const result = await MatchService.deleteMatchById(id);
        ctx.response.body = result;
    };

    /**
     * updateMatch
     */
    public updateMatch = async(ctx: Context, next: any): Promise<void> => {
        const data = ctx.request.body;
        const result = await MatchService.updateMatch(data);
        ctx.response.body = result;
    };
}

export default new MatchController();