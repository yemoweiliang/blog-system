const AWS= require('aws-sdk')
aws_config={
    region: process.env.DB_Region,
    // The endpoint should point to the local or remote computer where DynamoDB (downloadable) is running.
    endpoint: process.env.DB_Endpoint,
    /*
      accessKeyId and secretAccessKey defaults can be used while using the downloadable version of DynamoDB. 
      For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
    */
    accessKeyId: process.env.AWS_Access_Key,
    secretAccessKey: process.env.AWS_Secret_Access_Key
  }

AWS.config.update(aws_config);
var dynamodb = new AWS.DynamoDB();
async function createTableIfNotExist(){

    dynamodb.listTables({})
            .promise()
            .then(
                (data)=>{
                    const exist=data.TableNames.filter(
                        name=> name === 'to_do_table'
                    ).length>0
                    
                    if (exist){
                        console.log('Conncet to DB')
                        return Promise.resolve()
                    }
                    else {
                        console.log(`Table not exist: to_do_table, Creating table`)
                        const params = {
                            TableName: 'to_do_table',
                            // more params
                            KeySchema:[
                                {
                                    AttributeName: "ItemId",
                                    KeyType: "HASH",
                                }
                            ],
                            AttributeDefinitions:[
                                {
                                    AttributeName: "ItemId",
                                    AttributeType: "S"
                                },
                            ],
                            ProvisionedThroughput: {       
                                ReadCapacityUnits: 5,
                                WriteCapacityUnits: 5
                            }
                            
                        };
                        return dynamodb.createTable(params).promise().then(
                            result=>{
                                console.log('Creating the table successful')
                            }
                        ).catch(
                            (err)=>{
                                console.log(`DB_err: ${err}`)
                            }
                        );
                    }
                }
            ).catch(
                (err)=>{
                    console.log(`DB_err: ${err}`)
                }
            )
} 
createTableIfNotExist()
module.exports.AWS;