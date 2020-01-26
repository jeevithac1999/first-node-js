const url=require("url");


const getQueryString=urlString=>{
    try{
        return url.parse(urlString,true).query;
    }catch (e){
        console.error(e);
        return {};
    }
};
module.exports=getQueryString;
