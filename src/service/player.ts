import Match from "../models/Match";
import BaseService from "./base";

class Player extends BaseService {

    public getAllPlayers = async (): Promise<object> => {
        const query = "";
        const result = await Match.find();
        return {res: result};
    }
}

export default new Player();