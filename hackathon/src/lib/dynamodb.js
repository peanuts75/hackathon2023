import AWS from 'aws-sdk';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

export const testDB = () => {
  const dynamodb = new AWS.DynamoDB({accessKeyId: 'HERE', secretAccessKey: 'HERE', region: 'eu-west-1'})

  try {
    const results = dynamodb.scan({TableName: 'management-hackathon-hackathon-db-table'}, function(err, data){
      if (err) console.log(err, err.stack);
      else{
        console.log(data); 
        return data;
      }     
    });

    const items = results.Items;
    return { items };

  } catch (err) {
    console.log("Error" + err)
    return {
      Items: '',
      error: err,
    };
  }
};

function Fetch_db(){
  const Items = testDB();
  return Items;
}

export default Fetch_db;