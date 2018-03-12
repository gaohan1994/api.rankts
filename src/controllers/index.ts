import BaseClass from "./base";
import { index } from "../types/index";

class IndexC extends BaseClass {

    public hello = async(ctx: any, next: any): Promise<void> => {
        ctx.body = `<h1>雷猴啊!</h1>`;
    };

    public index = async (ctx: any, next: any): Promise<void> => {
        ctx.body = `<h1>INDEX!</h1>`;
    };

}

export default new IndexC();