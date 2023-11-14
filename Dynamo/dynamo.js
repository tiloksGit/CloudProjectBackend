const AWS = require('aws-sdk');
require('dotenv').config()

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccesskey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'notes';

const getnotes = async() => {
    const params = {
        TableName: TABLE_NAME
    };
    const characters = await dynamoClient.scan(params).promise();
    console.log(characters);
    return characters;
}


const addNotes = async(item) => {
    const params = {
        TableName: TABLE_NAME,
        Item: item
    }
    const value = await dynamoClient.put(params).promise();
    console.log(value);
    return value;
}


module.exports = {addNotes, getnotes}