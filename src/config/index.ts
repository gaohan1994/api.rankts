const config = process.env.NODE_ENV === "production"
?
{
    weixin: {
        appid: "wx3d75d4aff99c097a",
        appsecret: "1def0bcf9d27bcaf806bc105910254d1"
    }
}
:
{
    weixin: {
        appid: "wx3d75d4aff99c097a",
        appsecret: "1def0bcf9d27bcaf806bc105910254d1"
    }
};

export default config;