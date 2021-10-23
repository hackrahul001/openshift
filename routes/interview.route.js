
const interviewService = require('../services/interview.service')



exports.errorRoute = (app) => {
    app.get('/insert',interviewService.insert);
    app.get('/stat',interviewService.stat);
    app.get('/barChart',interviewService.barChart);
    app.get('/pieChart',interviewService.pieChart);
    app.get('/analytics',interviewService.analytics);
    
    
    
}


