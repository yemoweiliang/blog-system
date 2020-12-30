var AWS =require('aws-sdk')

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName='to_do_table'



putItem=async (req,res)=>{
    const params={
        TableName :tableName,
        Item:{...req.body,updateDate: (new Date()).valueOf()}
    }
    try{
        var result = await docClient.put(params).promise()
        return res.status(200).json({
            success:true,
            msg:result
        })
    }
    catch(err){
        //console.log(`Error:${err}`)
        return res.status(400).json({
            success:false,
            msg:err
        })
    }
    

}
updateItem=async (req,res)=>{
    let contentReq=req.body.UpdateContent
    let newDate=(new Date()).valueOf()
    let UpdateExpression=`set updateDate= :u`
    let updateContent={
        ":u": newDate
    }
    for (let i in contentReq){
        UpdateExpression+= `, ${i}=:${i}`
        updateContent[`:${i}`]=contentReq[i]
    }
    const params={
        TableName:tableName,
        Key:{
            ItemId: req.body.ItemId
        },
        UpdateExpression:UpdateExpression,
        ExpressionAttributeValues:updateContent,
        ReturnValues:"UPDATED_NEW"
    }
    //console.log(params)
    try{
        let item=docClient.update(params).promise();
        return res.status(200).json(
            {
                success:true,
                newItem:item
            }
        )
    }
    catch(err){
        console.log(err)
        return res.status(400).json(
            {
                success:false,
                msg:err
            }
        )
    }

}
deleteItem=async(req,res)=>{
    const params={
        TableName:tableName,
        Key:{
            ItemId:req.body.ItemId
        },
        ConditionExpression: "attribute_not_exists(Replies)",
        ReturnValues: "ALL_OLD"
    }
    try{
        await docClient.delete(params).promise()
        return res.status(200).json(
            {
                success:true,
            }
        )
    }
    catch(err){
        console.log(err)
        return res.status(400).json(
            {
                success:false,
                msg:err
            }
        )
    }
    

}
getItems=async(req,res)=>{
    const params={
        TableName:tableName
    }
    let results=[]
    let items=[]
    try{
        do{
            items =  await docClient.scan(params).promise();
            items.Items.forEach((item) => results.push(item));
            params.ExclusiveStartKey  = items.LastEvaluatedKey;
        }
        while(typeof items.LastEvaluatedKey !== "undefined")
        return res.status(200).json(
            {
                success:true,
                items:results
            }
        )
    }catch(err){
        console.log(err)
        return res.status(400).json(
            {
                success:false,
                msg:err
            }
        )
    }
}
module.exports.controller={
    putItem,getItems,updateItem,deleteItem
};