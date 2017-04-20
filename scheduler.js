var scheduler = require('node-schedule');
var latch = require('./latch');
var mg = require('./mongo');

var rule = new scheduler.RecurrenceRule();
rule.second = new scheduler.Range(0, 59, 2);

scheduler.scheduleJob(rule, function(){
  latch.status(latch.accountId, function(err, data) {
    if ((err) || (!data)) {
        console.log("Err");
    }

    if (data['data']['operations'][latch.appId]['status'] == "off") {
        mg.set_off();
    } else {
        mg.set_on();
    }
  });
});

module.exports = scheduler;
