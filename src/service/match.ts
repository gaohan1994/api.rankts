import BaseServive from "../base";
import { PlayerType, MatchType } from "../types/index";
import Match from "../models/Match";

class MatchService extends BaseServive {

    /**
     * findAllMatchs
     */
    public findAllMatchs = async (): Promise<object> => {
        try {
            const result = await Match.find();
            return result;
        } catch (err) {
            console.log("findAllMatchs error", err);
            return {
                type: "ERROR_FIND_MATCHES",
                message: "获取数据失败"
            };
        }
    }

    /**
     * findMatchById
     */
    public findMatchById = async (id: string): Promise<object> => {
        if (!id) {
            return {
                type: "ERROR_PARAM",
                message: "参数错误",
            };
        }

        try {
            const match = await Match.find({_id: id});
            return match;
        } catch (err) {
            console.log("findMatchById error", err);
            return {
                type: "ERROR_FIND_MATCH",
                message: "获取数据失败"
            };
        }
    }

    /**
     * insertOneMatch
     */
    public insertOneMatch = async (data: MatchType): Promise<Object> => {
        const { date, players, winner } = data;
        try {
            if (!date) {
                throw new Error("日期错误");
            } else if (!players) {
                throw new Error("玩家错误");
            } else if (!winner) {
                throw new Error("获胜方错误");
            }
        } catch (err) {
            console.log(err.message);
            return {
                status: 0,
                type: "GET_WRONG_PARAM",
                message: err.message
            };
        }

        try {
            const match = new Match(data);
            const result = await match.save();
            return {
                status: 1,
                success: "添加游戏成功"
            };
        } catch (err) {
            console.log("添加游戏失败", err);
            return {
                status: 0,
                type: "ERROR_ADD_MATCH",
                message: "添加游戏失败"
            };
        }
    }

    /**
     * updateMatch
     */
    public updateMatch = async (data: MatchType): Promise<Object> => {
        try {
            const { _id, date, players, winner } = data;
            if (!_id) {
                throw new Error("游戏ID错误");
            } else if (!date) {
                throw new Error("游戏时间错误");
            } else if (!players) {
                throw new Error("游戏玩家错误");
            }

            const newData = {date, players, winner};
            const result = await Match.findOneAndUpdate({_id}, {$set: newData});
            return {
                status: 1,
                success: "成功修改游戏信息"
            };
        } catch (err) {
            console.log("updateMatch error", err);
            return {
                status: 0,
                type: "ERROR_UPDATE_MATCH",
                message: "修改游戏信息失败"
            };
        }
    }

    /**
     * deleteMatchById
     */
    public deleteMatchById = async (id: string): Promise<Object> => {
        if (!id) {
            return {
                type: "ERROR_PARAM",
                message: "参数错误"
            };
        }

        try {
            await Match.findOneAndRemove({_id: id});
            return {
                status: 1,
                success: "删除游戏成功"
            };
        } catch (err) {
            console.log("删除游戏失败", err);
            return {
                type: "ERROR_DELETE_MATCH",
                message: "删除游戏失败"
            };
        }
    }
}

export default new MatchService();