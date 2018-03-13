import BaseControl from "../base";
import { index } from "../types/index";
import MatchService from "../service/match";

class MatchController extends BaseControl {

    public getAllMatchs = async(ctx: any, next: any): Promise<void> => {
        const result = await MatchService.findAllMatchs();
        ctx.body = { res: result };
    };

    public insertOneMatch = async(ctx: any, next: any): Promise<void> => {
        const data = ctx.request.body;
        console.log("data", data);
        const result = await MatchService.insertOneMatch(data);
        if (result) {
            ctx.response.body = {success: true, data: result};
        } else {
            ctx.response.body = {success: false};
        }
    }
}

export default new MatchController();