/*firebase*/
function submitForm(e){
    e.preventDefault()
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var birthday=document.getElementById('birthday').value;
    var male=document.getElementById('male').value;
    var female=document.getElementById('female').value;
    var myfile=document.getElementById('myfile').value;
    var mytext=document.getElementById('mytext').value;
  
    console.log(fname,lname,email,birthday,male,female,myfile,mytext);
    saveMessage(fname,lname,email,birthday,male,female,myfile,mytext);   
   }
   
   document.getElementById('form-group').addEventListener('submit',submitForm);
   
   function saveMessage(fname,lname,email,birthday,male,female,myfile,mytext){
   
       var messagesRef= firebase.database().ref('visitors/'+fname);
   
       // var newmessageRef=messagesRef.push();
       messagesRef.set({
           fname:fname,
           lname:lname,
           email:email,
           birthday:birthday,
           male:male,
           female:female,
           myfile:myfile,
           mytext:mytext,
           
          
       });
   }
  