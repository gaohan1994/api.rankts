import BaseServive from "../base";
import { PlayerType, MatchType } from "../types/index";
import Match from "../models/Match";

class MatchService extends BaseServive {

    public findAllMatchs = async (): Promise<object> => {
        const result = await Match.find({});
        return result;
    }

    public insertOneMatch = async (data: MatchType): Promise<Object> => {
        const match = new Match(data);
        const result = await match.save();
        return  result;
    }
}

export default new MatchService();