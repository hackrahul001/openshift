var event = {};

$(document).ready(function() {
    

   $(".resolved").click(function (e) {
       console.log(this.id)
       var id = this.id;
       var r = confirm("Are you confident ?");
        if (r == true) {
          
        } else {
            return;
        } 
       axios.post('/updateIssueStatus', {id:id ,resolved:1})
      .then(function (response) {
        console.log(response);
        if(response.data.status == "ok"){
            alert("Error resolved status updated!")
            window.location.reload(true);
        }else{
            alert("Error resolved status updatedation failed!")
        }
      })
      .catch(function (error) {
       alert("Error resolved status updatedation failed!")
      });
      
   })
    

})




