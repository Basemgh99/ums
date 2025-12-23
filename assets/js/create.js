

const createUserForm=document.forms['AddUserForm'];
console.log(createUserForm);

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
 console.log(response);

    
})
