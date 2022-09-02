console.clear();
const makeRequest= async (configation)=>{
    return  await axios(configation);
}
console.log('Calling from axios.....getting data......')
const gettingDatafromaxios=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/')
    .then((response)=>console.log(response.data))
    .catch((err)=>console.log(err))
}
gettingDatafromaxios();

console.log('Sending Data from axios....');
const sendingDataFrom =()=>{
 makeRequest('https://jsonplaceholder.typicode.com/posts/2',{
    method:"POST",
    body:JSON.stringify({
        name:"Abu Al Shahriar Rifat",
        System_Id:2019005005,
        university:"University Of Sharda"
    })
 }).then((response)=>{console.log(response.data)})
 .catch((err)=>{console.log(err)})
}
sendingDataFrom();
console.log("Updating Data from ............");

const updateDataforAxios=()=>{
 makeRequest('https://jsonplaceholder.typicode.com/posts/2',{
    method:"PUT",
    body:JSON.stringify({
        name:"Abu Al Musrad",
        university:"University of Cumilla"
    })
 }).then((response)=>{console.log(response.data)})
 .catch((err)=>{
   console.log(err);
 })
}

updateDataforAxios();

console.log('Update-Single is Updating........... ')
const SinglaUpdatingUsingAxios=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/2',{
        method:"PATCH",
        body:JSON.stringify({
            university:"University of Oxfoard"
        })
     }).then((response)=>{console.log(response.data)})
     .catch((err)=>{
       console.log(err);
     })
}

SinglaUpdatingUsingAxios();

console.log("Data is deleting....................")
const deletingUsingAxiosApi=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/2',{
        method:"DELETE",
     }).then((response)=>{console.log(response.data)})
     .catch((err)=>{
       console.log(err);
     })
}
deletingUsingAxiosApi();