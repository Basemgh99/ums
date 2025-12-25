

const createUserForm=document.forms['AddUserForm'];
createUserForm.addEventListener("change",()=>{
   
    const file=createUserForm.image.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(e){
        console.log(e.target.result);
        document.querySelector(".preview").setAttribute("src",e.target.result)
        
    }
    
})



createUserForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const formData=new FormData(createUserForm);
   
    
    formData.forEach((value)=>{
        console.log(value);
        
    })
 console.log(formData);
    // var user={
    //     name:inputs[0].value,
    //     email:inputs[1].value,
    //     age:inputs[2].value
    // }
 const response=await axios.post(`http://ums12.runasp.net/api/users`,formData);

 if(response.status==200){
    location.href='./index.html';
 }
 console.log(response);

    
})
