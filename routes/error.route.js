
const errorService = require('../services/error.service')



exports.errorRoute = (app) => {
    app.get('/',errorService.Home);
    app.get('/admin',errorService.admin);
    app.get('/issues/:projectName',errorService.issues);
    app.post('/postIssue',errorService.postIssue);
    app.post('/updateIssueStatus',errorService.updateIssueStatus);

   
}


