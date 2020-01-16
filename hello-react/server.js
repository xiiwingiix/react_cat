const express=require("express")
const request=require("request")
const app=express();
const port=3355;

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.listen(port,()=>{
    console.log("Server Start...","http://localhost:3355")
})

app.get('/movie',(req,res)=>{
    var no=req.query.no;
    var site='';
    if(no==1)
        site="searchMainDailyBoxOffice.do";
    else if(no==2)
        site="searchMainRealTicket.do";
    else if(no==3)
        site="searchMainDailySeatTicket.do";
    else if(no==4)
        site="searchMainOnlineDailyBoxOffice.do";

    var url="http://www.kobis.or.kr/kobis/business/main/"+site;
    request({url:url},function (err,request,json) {
        console.log(json);
        res.json(JSON.parse(json))
    })
})

const Client=require("mongodb").MongoClient
app.get('/news',function (req,res) {
	var url="mongodb://211.238.142.181:27017"
	Client.connect(url,(err,client)=>{
		var db=client.db("mydb")
		 b.collection("news").find({}).toArray(function (err,docs) {
			console.log(docs)
			res.json(docs)
			client.close()
		 })
	 })
 })
 app.get('/news_pop',function (req,res) {
    var url="mongodb://211.238.142.181:27017"
    Client.connect(url,(err,client)=>{
        var db=client.db("mydb")
		db.collection("news_pop").find({}).toArray(function (err,docs) {
			console.log(docs)
			res.json(docs)
			client.close()
        })
    })
})