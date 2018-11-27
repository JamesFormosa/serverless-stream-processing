'use strict';
console.log('Loading function');

var convert = (patient) => {
    let buff = new Buffer(patient,'base64');
    let obj = JSON.parse(buff.toString('utf8'));
    obj.LastName = 'Doe';
    obj.FirstName = 'John';
    console.log(JSON.stringify(obj));
    let retBuff = new Buffer(JSON.stringify(obj));
    return retBuff.toString('base64');
};

exports.handler = (event, context, callback) => {
    /* Process the list of records */

    const output = event.records.map((record) => ({
        recordId: record.recordId,
        result: 'Ok',
        data: convert(record.data),
    }));

    console.log(`Processing completed.  Successful records ${output.length}.`);
    callback(null, { records: output });
};