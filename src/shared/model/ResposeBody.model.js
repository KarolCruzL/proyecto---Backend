class ResponseBody{
    constructor(ok, status,result){
        this.ok = ok;
        this.status = status;
        this.result = result;
    }
}

module.exports = ResponseBody;