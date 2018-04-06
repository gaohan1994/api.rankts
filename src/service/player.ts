import Match from "../models/Match";
import Base from "../base";

class Player extends Base {

    constructor () {
        super();
        this.getAllPlayers = this.getAllPlayers.bind(this);
        this.findPlayerByName = this.findPlayerByName.bind(this);
    }

    public getAllPlayers = async (): Promise<object> => {
        const query = {};
        const result = await Match.find();
        return result;
    }

    /**
     * findPlayerByName
     */
    public findPlayerByName = async (name: string): Promise<object> => {
        if (!name) {
            return {
                type: "ERROR_PARAM",
                message: "玩家姓名参数错误"
            };
        }

        try {
            const result = await Match.find({"players.name": name});
            return result;
        } catch (err) {
            console.log("findPlayerByName err", err);
            return {
                status: 0,
                type: "ERROR_FINDPLAYER",
                message: "查询玩家错误"
            };
        }
    }
}

export default new Player();