exports.initRoutes = (app) => {
    require('./error.route').errorRoute(app)
    require('./interview.route').errorRoute(app)
    
  }