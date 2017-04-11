var db;

function connect(){
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://webhooks-test:webhooks-test@ds111771.mlab.com:11771/webhooks-test', function(err, d) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    db = d;
  });
}

function set_on(){
  db.collection('latchstatus').update({"id" : "1"}, {"$set": {"status" : "on"}}, {upsert: true});
}

function set_off(){
  db.collection('latchstatus').update({"id" : "1"}, {"$set": {"status" : "off"}}, {upsert: true});
}

function isAllowed(callback){
  var obj = db.collection('latchstatus').findOne({"id" : "1"}, function(err, result){
    callback(result.status);
  });
}

module.exports =  {
  connect: connect,
  set_on : set_on,
  set_off : set_off,
  isAllowed : isAllowed
};
