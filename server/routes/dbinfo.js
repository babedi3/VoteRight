const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");

const db = mongojs("mongodb+srv://voteright:vote123@cluster0.njbzf.mongodb.net/voteright?retryWrites=true&w=majority")
router.get("/dbinfo", function(req, res, next){

  //res.send("dbinfo");
  db.dbinfo.find(function(err,dbinfo){
    if(err){
      res.send(err);
    }
    res.json(dbinfo);
  })

});

router.post("/dbinfo", function(req,res,next){
  var dbinformation = req.body.data;

  if(!dbinformation.username){
    res.status(400);
    res.json({
      error: "Bad data"
    });
  } else {
    db.dbinfo.save(dbinformation, function(err, savedDbinformation){
      if(err){
        res.send(err);
      }
          res.json(savedDbinformation);
    });
  }

})
module.exports = router;