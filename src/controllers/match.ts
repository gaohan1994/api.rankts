import BaseControl from "../base";
import { index } from "../types/index";
import MatchService from "../service/match";

class MatchController extends BaseControl {

    /**
     * getAllMatchs
     */
    public getAllMatchs = async(ctx: any, next: any): Promise<void> => {
        const result = await MatchService.findAllMatchs();
        ctx.body = { res: result };
    };

    /**
     * getOneMatch
     * params: id 比赛场次的id
     */
    public getOneMatch = async (ctx: any, next: any): Promise<void> => {
        const id = ctx.params.id;
        const result = await MatchService.findOneMatch(id);
        ctx.response.body = { res: result };
    }

    /**
     * insertOneMatch
     */
    public insertOneMatch = async(ctx: any, next: any): Promise<void> => {
        const data = ctx.request.body;
        console.log("data", data);
        const result = await MatchService.insertOneMatch(data);
        if (result) {
            ctx.response.body = {code: "insertSuccess", res: result};
        } else {
            ctx.response.body = {code: "insertFail"};
        }
    }

    /**
     * deleteOneMatch
     */
    public deleteOneMatch = async(ctx: any, next: any): Promise<void> => {
        const id = ctx.params.id;
        const result = await MatchService.deleteOneMatch(id);
        if (result) {
            ctx.response.body = {code: "deleteSuccess", res: result};
        } else {
            ctx.response.body = {code: "deleteFail"};
        }
    }
}

export default new MatchController();