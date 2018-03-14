export type base = {
    test: () => void;
};

export type index = {
    hello: () => void;
    index: () => void;
};


/**
 * name : 用户姓名
 * class: 用户身份
 * 0    : 平民
 * 10   : 狼人
 * 11   : 狼王
 * 20   : 预言家
 * 21   : 女巫
 * 22   : 猎人
 * 23   : 白痴
 * 24   : 守卫
 * score: 总分
 * win: 该局游戏是否胜利
 * 0    : 胜利
 * 1    : 失败
 * @type {Array<Player>}
 */


export type PlayerType = {
    name    : string,
    class   : number,
    win     : boolean,
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

export type MatchType = {
    date    : any,
    players : Array<PlayerType>,
    winner  : number
};