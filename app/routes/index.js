const ingredientsRoutes = require('./ingredients_routes');

module.exports = function(app, db) {
    ingredientsRoutes(app, db);
    
};