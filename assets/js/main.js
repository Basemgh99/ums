const getUsers=async()=>{
    const response= await axios.get(`https://ums12.runasp.net/api/users?limit=1000`)
    
    return response.data;
    
}

const displayUsers=async ()=>{
    try{
const result=await getUsers();

    
    const users=result.users.map((user)=>{
        return `
        <tr>

        <td>${user.name}</td>
        <td><img src='${user.imageUrl}' width='200px'/></td>
        <td>
        <button class='btn btn-danger' onclick=deleteUser(${user.id})>Delete</button>
        <a href='./details.html?userId=${user.id}' class='btn btn-outline-info'>Details</a>
        
        </td>
        
        </tr>
        
        
        
        `
    }).join(' ');
    
    document.querySelector(".users .users_data").innerHTML=users;
   
    }catch(error){
        document.querySelector(".errorClass").classList.remove('d-none');
    

    }finally{

            document.querySelector(".loader").classList.add("d-none");
    }
    


    

    
    
}

displayUsers();

const deleteUser= async(id)=>{
const response=await axios.delete(`http://ums12.runasp.net/api/users/${id}`)

    console.log(response);
    
}