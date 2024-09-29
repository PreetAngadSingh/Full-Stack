const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

let users = [{
    name:"John",
    kidneys:[{
        healthy: false
    }]
}];

app.get('/', (req, res)=>{
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i=0;i<numberofKidneys;i++){
        if(johnKidneys[i].healthy){
            numberofHealthyKidneys++;
        }
    }
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;

    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })
})

app.use(express.json());
app.post('/', (req, res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
});

app.put('/', (req, res) => {
    if(isThereAtLeastOneBadKidney()){
        for(let i=0;i<users[0].kidneys.length;i++){
            if(!users[0].kidneys[i].healthy){
                users[0].kidneys[i].healthy = true;
            }
        }
        res.send("Health Updated")
    } else {
        res.status(411).send("All kidneys are healthy already.")
    }
});

function isThereAtLeastOneBadKidney(){
    let atLeaseOneBadKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atLeaseOneBadKidney = true;
        }
    }
    return atLeaseOneBadKidney
}

app.delete('/', (req, res) => {
    if(isThereAtLeastOneBadKidney()){
        const newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                });
            }
        }
        users[0].kidneys = newKidneys;
        res.send("All bad kidneys removed");
    } else{
        res.status(411).send("No Bad Kidneys Found")
    }
})

app.listen(PORT, ()=>{
    console.log("Hospital App is running");
});