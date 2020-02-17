let app = require('express')();
app.get('/',(req,res)=>{
    console.log('abcd 1234')
    res.send('app is working');
    console.log('asdf');

})

app.listen(443,()=>{
    console.log('started listening on port 80')
})