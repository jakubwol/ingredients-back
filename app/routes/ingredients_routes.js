module.exports = function(app, db) {
    
    app.get('/ingredients', (req, res) => {
        res.send([]); 
    });
    
    app.post('/ingredients', (req, res) => {
        var reqList = req.body.list,
            resList = [];
        console.log(reqList);
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