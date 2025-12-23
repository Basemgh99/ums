const getUsers=async()=>{
    const response= await axios.get(`http://ums12.runasp.net/api/users?limit=1000`)
    
    return response.data;
    
}

const displayUsers=async ()=>{
    const result=await getUsers();
    console.log(result);
    const users=result.users.map((user)=>{
        return `
        <tr>

        <td>${user.name}</td>
        <td>${user.imageurl}</td>
        <td>
        <button class='btn btn-danger' onclick=deleteUser(${user.id})>Delete</button>
        
        </td>
        
        </tr>
        
        
        
        `
    }).join(' ');

    console.log(users);

    document.querySelector(".users .users_data").innerHTML=users;
    
    
}

displayUsers();

const deleteUser= async(id)=>{
const response=await axios.delete(`http://ums12.runasp.net/api/users/${id}`)

    console.log(response);
    
}