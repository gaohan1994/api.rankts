require("es6-promise").polyfill();
import * as fetch from "isomorphic-fetch";
import config from "../config/index";
import BaseServive, { NormalReturnObject } from "../base";
import { index } from "../types/index";

export interface InterfaceWebAccessToken { 
    access_token: string;
    expires_in: number;
    refresh_token: string;
    openid: string;
    scope: string;
}

class Weixin extends BaseServive {

    public getToken = async () => {
        try {
            const token = await fetch(
                `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&` +
                `appid=${config.weixin.appid}&` + 
                `secret=${config.weixin.appsecret}`
            )
            .then(res => res.json());

            if (token) {
                return {
                    success : true,
                    result  : token
                };
            } else {
                throw new Error("FETCH_ERROR");
            }
        } catch (err) {
            return {
                type    : "ERROR_FETCH_TOKEN",
                message : err.message ? err.message : "获取token失败"
            };
        }
    }

    public getWebAccessToken = async (code: string): Promise <NormalReturnObject> => {
        try {

            if (!code) {
                throw new Error("code");
            }

            const token: InterfaceWebAccessToken = await fetch(
                `https://api.weixin.qq.com/sns/oauth2/access_token?` + 
                `appid=${config.weixin.appid}&` + 
                `secret=${config.weixin.appsecret}&` + 
                `code=${code}` + 
                `&grant_type=authorization_code`
            )
            .then(res => res.json());

            if (token) {
                return {
                    success : true,
                    result  : token
                };
            } else {
                throw new Error("FETCH_ERROR");
            }
        } catch (err) {
            return {
                type    : "ERROR_FETCH_WEB_ACCESSTOKEN",
                message : err.message ? err.message : "获取token失败"
            };
        }
    }

    // public get
}

export default new Weixin();