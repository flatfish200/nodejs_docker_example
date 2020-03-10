module.exports=()=>{

    switch (process.env.NODE_ENV){
        case "docker":
            return {
                redis:{
                    host: "simple-redis",
                }
            }
        case "dev":
        default :
            return {
                redis:{
                    host: "simple-redis",
                    port:6379
                }
            }
    }
}