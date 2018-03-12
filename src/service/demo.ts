import BaseServive from "./base";
import { index } from "../types/index";
import { } from "../models";
import { } from "../service/demo";

class DemoService extends BaseServive {

    public demoPublicService = async (): Promise<object> => {
        const sql = "";

        return {code: 123};
    }
}

export default new DemoService();