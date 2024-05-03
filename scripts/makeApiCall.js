function sendMessage(callBack = null)
{

    let params = {
        "organization": "mantisSoftware",
        "token": "c616bd12db4faa3a28b14cdf510311915b16d9c46117f194d496c0a0edead934",
        "name" : document.getElementById("clientName").value,
        "companyName" : document.getElementById("clientCompanyName").value,
        "email" : document.getElementById("clientEmail").value,
        "message": document.getElementById("clientMessage").value
    };
    
    endpointCall("sendMessage", params, function(data)
                                {
                                    //Store id and name in cookies for later use
                                    if(data["status"] == "success")
                                    {
                                        callBack('Successfully sent message!');
                                    }else if(data["status"] == "failed")
                                    {
                                        callBack("Failed to send message. Please try again!");
                                    }
                                });
}

function sendMessageOnClick()
{
    document.getElementById("sendMessageButton").disabled = true;
    sendMessage( function(responseMessage)
        {
            alert(responseMessage);

            if(responseMessage == "Successfully sent message!")
            {
                location.reload();
            }else
            {
                document.getElementById("sendMessageButton").disabled = false;
            }
        });
}
