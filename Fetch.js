
async function makingRequest(url,gettingData){
  const response=await fetch(url,gettingData);
  if(!response.ok){
    const message=`Error :${response.status}`
    throw  message
  }else{
    const data=await response.json();
    return data;
  }
}


const gettingData1=()=>{
    makingRequest('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
     console.log(response)
    }).catch((err)=>{
      console.log(err)
    })
}



//
 const sendData=()=>{
    makingRequest('https://jsonplaceholder.typicode.com/posts',{
     method:"POST",
     body:JSON.stringify({
        name:"Abu Al Shahriar Rifat",
        id:2019005005,
        University:"University Of Sharda"
     })
    }).then((response)=>{
      console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
 }


 const updateingData=()=>{
    makingRequest('https://jsonplaceholder.typicode.com/posts/2',{
        method:"PUT",
        body:JSON.stringify({
           name:"Abu Al Shahriar Musrad",
           id:201900500535353,
           University:"University Of Chitagong"
        })
       }).then((response)=>{
         console.log(response)
       }).catch((err)=>{
           console.log(err)
       })
 }


 const SingleUpdatingData=()=>{
    makingRequest('https://jsonplaceholder.typicode.com/posts/2',{
        method:"PATCH",
        body:JSON.stringify({
          university:"University of OXford"
        })
       }).then((response)=>{
         console.log(response)
       }).catch((err)=>{
           console.log(err)
       })
    
 }
 
 const DeletingData=()=>{
    makingRequest('https://jsonplaceholder.typicode.com/posts/2',{
        method:"DELETE",
       }).then((response)=>{
         console.log(response)
       }).catch((err)=>{
           console.log(err)
       })
 }


gettingData1();
sendData();
updateingData();
SingleUpdatingData()
DeletingData();
