module.exports = {
    apps:[
        {
            name: "EMERGINGPROJECT",
            script: "npm ",
            args: "run dev",
            env: {
                NODE_ENV: "development",
                ENV_VAR1: "enviroment-variable",
            },

        },

    ], 
};