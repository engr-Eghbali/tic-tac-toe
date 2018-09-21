function triger(){
   if(phone=document.getElementById("phoneNo").value){
	   console.log(phone);
	   window.plugins.CallNumber.callNumber(onSuccess, onError, phone, true);

	   function onSuccess(result){
		   alert(result);
		console.log("Success:"+result);
	  }
	  
	  function onError(result) {
		console.log("Error:"+result);
	  }
   }
}