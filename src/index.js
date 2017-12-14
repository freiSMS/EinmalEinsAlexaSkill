var Alexa = require('alexa-sdk');

var handlers = {

    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    },
    
    'Zweieralphabet': function ()   {
        this.emit(':tell', 'Dann sag mal das Zweieralphabet');
    }

};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
