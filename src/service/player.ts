import Match from "../models/Match";
import Base from "../base";

class Player extends Base {

    public getAllPlayers = async (): Promise<object> => {
        const query = {};
        const result = await Match.find();
        return result;
    }
}

export default new Player();