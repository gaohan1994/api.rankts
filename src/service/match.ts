import BaseServive from "../base";
import { PlayerType, MatchType } from "../types/index";
import Match from "../models/Match";

class MatchService extends BaseServive {

    /**
     * findAllMatchs
     */
    public findAllMatchs = async (): Promise<object> => {
        const result = await Match.find({});
        return result;
    }

    /**
     * findOneMatch
     */
    public findOneMatch = async (id: string): Promise<object> => {
        const match = await Match.find({_id: id});
        return match;
    }

    /**
     * insertOneMatch
     */
    public insertOneMatch = async (data: MatchType): Promise<Object> => {
        const match = new Match(data);
        const result = await match.save();
        return result;
    }

    /**
     * updateOneMatchById
     */
    public updateOneMatchById = async (id: string, data: MatchType): Promise<Object> => {
        const result = await Match.findByIdAndUpdate(id, { $set: data });
        if (result) {
            return { code: "updateSuccess" };
        } else {
            return { code: "updateFail" };
        }
    }

    /**
     * deleteOneMatch
     */
    public deleteOneMatch = async (id: string): Promise<Object> => {
        const match = await Match.deleteOne(id);
        return match;
    }
}

export default new MatchService();