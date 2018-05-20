module.exports = function(app, db) {
    
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    app.post('/ingredients', (req, res) => {
        var reqList = req.body.list,
            resList = [];
        for (i = 0; i < reqList.length; i++) {
            resList[i] = {
                ingredient: reqList[i],
                status: 'To be implemented.',
                comment: 'To be implemented.'
            };
        }
        res.send(resList); 
    });
    
};