import BaseControl from "../base";
import { index } from "../types/index";
import { } from "../service/demo";

class Demo extends BaseControl {

    public demoPublic = async(ctx: any, next: any): Promise<void> => {
        ctx.body = `<h1>demoPublic!</h1>`;
    };
}

export default new Demo();