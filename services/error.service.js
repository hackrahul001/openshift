
const errors = require('../schemas/error.schema')
var ObjectId = require('mongoose').Types.ObjectId; 


// /
exports.Home = async function (req, res) {
    errors.find({resolved:0}, function(err, result) {
        if (err) throw err;
        var data = []
        // console.log(result)
        result.forEach((e)=>{data.push({projectName : e.projectName,aboutProject : e.aboutProject})})

           jsonObject = data.map(JSON.stringify); 
            uniqueSet = new Set(jsonObject); 
            uniqueArray = Array.from(uniqueSet).map(JSON.parse);
            // console.log(uniqueArray);
            res.render('index.ejs',{"data":uniqueArray})
      });
}


// /admin
exports.admin = async function (req, res) {
            
    errors.find({}, function(err, result) {
        if (err) throw err;
        var data = []
        result.forEach((e)=>{data.push({projectName : e.projectName,aboutProject : e.aboutProject})})

        jsonObject = data.map(JSON.stringify); 
            uniqueSet = new Set(jsonObject); 
            uniqueArray = Array.from(uniqueSet).map(JSON.parse);
            
            res.render('admin.ejs',{"data":uniqueArray})
      });
}

// /issues/:projectName
exports.issues = async function (req, res) {
    var uri='' ;

    var d = req.params.projectName
    d.split('|').forEach((e)=>{
    if(uri == '')
    {uri = uri+e}
    else{uri = uri+' '+e}
   })
   errors.find({projectName:uri,resolved:0},function(err, result) {
    if (err) throw err;
        res.render('issuesLists.ejs',{"data":result})
  });
}



exports.postIssue = async function (req, res) {
    const body = req.body;
    var object = {
         userId :body.userId,    //ObjectId("611cfd2d7f7869243afa0c05"),
         url:body.url,
         urlparameter : body.urlparameter,
         projectName : body.projectName,
         aboutProject: body.aboutProject,
         errormessage: body.errormessage, //error title like Cannot read property 'replace' of undefined
         sectionname:body.sectionname, // like unhandle rejection
         error:body.error,
    }
    console.log(object)
     var data =  new errors(object);
     
     data.save(function(err, result) {
        if (err) throw err;
        
            // console.log(uniqueArray);
            res.send({status:"Ok"})
      });
}


exports.updateIssueStatus = async function(req,res){
    const {id ,resolved} = req.body
    try{
          if(id && resolved){
       
            errors.updateOne({_id:ObjectId(id)},{resolved:resolved},function(er,result){
                if(er){
                    res.send({status:"failed"});
                }else{
                    res.send({status:"ok"});
                }
            })
            }else{
                res.send({status:"failed"});
            }
     }catch(e){
         console.log(e)
         res.send({status:"failed"});
     }
}