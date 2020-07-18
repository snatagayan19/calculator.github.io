  
   function takeInput(e){
       console.log(e);
       if( e=='%'){
        document.getElementById("screen").value+="*0.01";
       }
       else{
        document.getElementById("screen").value+=e;

       }
     
    

   }
   function resultValue(){
       
       let x=document.getElementById('screen').value;
       let y=eval(x)
       document.getElementById('history').innerHTML=x;
       document.getElementById('screen').value=y;

   }
   function clearAll(){
       document.getElementById('screen').value="";
       document.getElementById('history').innerHTML="";


   }