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
    return value;
}

const updateNotes = async(noteId) => {
    const params = {
        TableName: TABLE_NAME,
        Key : {
            noteId
        }
    }
    const value = await dynamoClient.update(params).promise();
    return value;
}

const deleteNotes = async(noteId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            noteId : noteId
        }
    }
    const value = await dynamoClient.scan(params).promise();
    return value;
}

const getnotesById = async(uId) => {
    const params = {
        TableName: TABLE_NAME,
        Key : {uId}
    }
    const value = await dynamoClient.scan(params).promise();
    return value;
}

const getNotebyId = async(noteId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            noteId
        }
    }
    const value = await dynamoClient.scan(params).promise();
    return value;
}


module.exports = {addNotes, getnotes, updateNotes, deleteNotes, getNotebyId, getnotesById}