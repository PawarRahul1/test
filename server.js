let app = require('express')();
app.get('/',(req,res)=>{
    res.send('app is working');
})

app.listen(443,()=>{
    console.log('started listening on port 80')
})