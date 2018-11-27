'use strict';
var AWS = require('aws-sdk');
AWS.config.update({
    region: process.env.REGION

});

console.log('Loading function');
exports.handler = (event, context, callback) => {
    let success = 0;
    let failure = 0;
    const output = event.records.map((record) => {
        /* Data is base64 encoded, so decode here */
        const recordData = Buffer.from(record.data, 'base64');
        let obj = JSON.parse(recordData.toString('utf8'));
        try {
            console.log(obj);
            var params = {
                Message: JSON.stringify(obj), /* required */
                TopicArn: process.env.TOPIC_ARN
            };
            var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
            publishTextPromise.then(
                function(data) {
                    console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
                    console.log("MessageID is " + data.MessageId);
                });
            success++;
            return {
                recordId: record.recordId,
                result: 'Ok',
            };
        } catch (err) {
            failure++;
            return {
                recordId: record.recordId,
                result: 'DeliveryFailed',
            };
        }
    });
    console.log(`Successful delivered records ${success}, Failed delivered records ${failure}.`);
    callback(null, {
        records: output,
    });
};