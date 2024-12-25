module.exports = {
    apps:[
        {
            name: "EMERGINGPROJECT",
            script: "npm ",
            args: "run dev",
            instances:1,
            autorestart:true,
            watch:false,
            env: {
                NODE_ENV: "development",
                ENV_VAR1: "enviroment-variable",
            },

        },

    ], 
};