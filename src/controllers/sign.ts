import { Context } from "koa";
import SignService from "../service/sign";

class Sign {

    /**
     * getWeixinSign
     */
    public getWeixinSign = async (ctx: Context, next: any): Promise <void> => {
        const result = await SignService.getSignToken();
        ctx.body = result;
    }
}

export default new Sign();