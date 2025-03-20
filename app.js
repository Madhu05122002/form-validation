const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const confirmpassword=document.querySelector('#confirmpassword');

//form la iruka button
form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
    e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const confirmpasswordVal=confirmpassword.value.trim();
 
 //username validation
    if(usernameVal===''){
        success=false;
        //seterror(element,message)
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }
//email validation
if(emailVal===''){
    success=false;
    setError(email,'Email is required')
}
else if(!ValidateEmail(emailVal)){
    success=false;
    setError(email,'please enter a validate email')
}
else{
    setSuccess(email)
}
   
//password validation
if(passwordVal===''){
    success=false;
    //seterror(element,message)
    setError(password,'password is required')
}
else if(passwordVal.length<8){
    setError(password,'password must be in atleast 8 characters')
}
else{
    setSuccess(password)
}
//confirmpassword validation
if(confirmpasswordVal===''){
    success=false;
    //seterror(element,message)
    setError(confirmpassword,'confirmpassword is required')
    
   }
else if(confirmpasswordVal!==passwordVal){
    setError(confirmpassword,'confirmpassword does not matched')
    
}
else{
    setSuccess(confirmpassword)
    
}
}

function setError(element,message){
    
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const ValidateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}

