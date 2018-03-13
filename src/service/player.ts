import Match from "../models/Match";
import Base from "../base";

class Player extends Base {

    public getAllPlayers = async (): Promise<object> => {
        const query = {};
        const result = await Match.find();
        return result;
    }

    /**
     * findPlayerById
     */
    public findPlayerById = async(): Promise<object> => {
        return {};
    }
}

export default new Player();