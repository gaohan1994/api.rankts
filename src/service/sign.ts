require("es6-promise").polyfill();
import * as fetch from "isomorphic-fetch";
import * as jsSHA from "jssha";
import config from "../config/index";

class Sign {

    private lastDate?: Date;

    private wxAccessToken?: string;

    private wxJsApiTickeet?: string;

    constructor () {
        this.createNonceStr = this.createNonceStr.bind(this);
        this.createTimestamp = this.createTimestamp.bind(this);
        this.raw = this.raw.bind(this);
        this.sign = this.sign.bind(this);
    }

    public checkOutTime = () => {
        if (this.lastDate) {
            

            // return fals;
        } else {
            return true;
        }
    }

    public getAccessToken = async () => {
        const result = await fetch(
            `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&` +
            `appid=${config.weixin.appid}` +
            `&secret=${config.weixin.appsecret}`
        )
        .then(res => res.json());
        // console.log("getAccessToken", result);
        return result;
    }

    public getJsApiTicket = async () => {
        const accessToken = await this.getAccessToken();

        try {
            if (accessToken) {
                const result = await fetch(
                    `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken.access_token}&type=jsapi`
                )
                .then(res => res.json());
                return {
                    success: true,
                    result : result
                };
            } else {
                throw new Error("未获取ACCESSTOKEN");
            }
        } catch (err) {
            return {
                success: false,
                message: err.message ? err.message : "获取JSAPITICKET出错"
            };
        }
    }

    public createNonceStr = () => {
        return Math.random().toString(36).substr(2, 15);
    };
    public createTimestamp = () => {
        return parseInt((new Date().getTime() / 1000).toString()) + "";
    };

    public raw = (args: any) => {
        let keys = Object.keys(args);
        keys = keys.sort();
        const newArgs: any = {};
        keys.forEach(function (key) {
          newArgs[key.toLowerCase()] = args[key];
        });

        let string = "";
        for (const k in newArgs) {
          string += "&" + k + "=" + newArgs[k];
        }
        string = string.substr(1);
        return string;
    };

    /**
     * @synopsis 签名算法
     *
     * @param jsapi_ticket 用于签名的 jsapi_ticket
     * @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
     *
     * @returns
     */
    public sign = async (jsapi_ticket: string, url: string) => {
        try {
            let ret = {
                jsapi_ticket: jsapi_ticket,
                nonceStr: this.createNonceStr(),
                timestamp: this.createTimestamp(),
                url: url
            };
            const
                string = this.raw(ret),
                // shaObj = new jsSHA(string, "TEXT");
                shaObj = new jsSHA("SHA-1", "TEXT");

            console.log("string", string);
            shaObj.update(string);
            const signature = shaObj.getHash("HEX");
            console.log("signature", signature);
            return {
                success : true,
                result  : {
                    ...ret,
                    signature: signature
                }
            };
        } catch (err) {
            return {
                type    : "ERROR_WEIXIN_SIGN",
                message : err.message ? err.message : "获取数据失败"
            };
        }
    };

    public getSignToken = async () => {
        const jsApiTicket = await this.getJsApiTicket();
        try {
            if (jsApiTicket.success === true) {
                const result = await this.sign(jsApiTicket.result.ticket, "http://localhost:3000/");
                console.log("result", result);
                if (result.success === true) {
                    return {
                        success : true,
                        result  : result.result
                    };
                } else {
                    throw new Error("签名出错");
                }
            } else {
                throw new Error("JSAPITICKET 获取出错");
            }
        } catch (err) {
            return {
                type    : "ERROR_WEIXIN_SIGN",
                message : err.message ? err.message : "获取数据失败"
            };
        }
    }
}

export default new Sign();