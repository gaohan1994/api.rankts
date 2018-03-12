// import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import mongoose from "mongoose";

/**
 * name : 用户姓名
 * class: 用户身份
 * 0  : 平民
 * 10 : 狼人
 * 11 : 狼王
 * 20 : 预言家
 * 21 : 女巫
 * 22 : 猎人
 * 23 : 白痴
 * 24 : 守卫
 * @type {Array<Player>}
 */
export type Player = {
    name  : string,
    class : number
};

/**
 * Date   : 比赛日期
 * players: 参加比赛的用户
 * winner : 获胜方
 * 0: 好人获胜
 * 1: 狼人获胜
 * 2: 第三方获胜
 * @type {Array<Player>}
 */
export type MatchModel = mongoose.Document & {
    date    : Date,
    players : Array<Player>,
    winner  : number
};

const MatchSchema = new mongoose.Schema({
  date    : Date,
  players : Array,
  winner  : Number
});

const Match = mongoose.model("Match", MatchSchema);
export default Match;