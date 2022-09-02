console.clear();

const MakingRequest=(method,url,gettingData)=>{
  return new Promise((resolve,reject)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onload=()=>{
      const data=xhr.response;
      console.log(JSON.parse(data));
    }
    xhr.onerror=()=>{
      console.log("Here is a error");
    }
    xhr.send(JSON.stringify(gettingData));
  })
  
}

function gettingData() {
  MakingRequest('GET','https://jsonplaceholder.typicode.com/posts').then((response)=>{
     console.log(response)
  }).catch((err)=>{
    console.log(err);
  })
  }

  
function sendingData(){
  MakingRequest('POST','https://jsonplaceholder.typicode.com/posts/2',{
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then((response)=>{
    console.log(response)
  }).catch((err)=>{
    console.log(err)
  })
}


function updateData(){
  MakingRequest('PUT','https://jsonplaceholder.typicode.com/posts/2',{
   body:JSON.stringify({
     name:"Abu Al shahriar Rifat",
     id:2019005005
   }),
   headers:{
     'Content-Type':'application/json; charset=UTF-8 ',
   }
  }).then((response)=>{
      console.log(response)
  }).catch((err)=>{
    console.log(err)
  })
}



function SingleData(){
 MakingRequest('PATCH','https://jsonplaceholder.typicode.com/posts/2',{
    body:JSON.stringify({
      id:20193735353
    }),
    headers:{
      'Content-Type':'application/json; charset=UTF-8 ',
    }
 }).then((response)=>{
  console.log(response)
 }).catch((err)=>{
  console.log(err)
 })
}


function DeletetingData() { 
  MakingRequest('DELETE','https://jsonplaceholder.typicode.com/posts/2',{
    body:JSON.stringify({
      id:20193735353
    })
  }).then((response)=>{
     console.log(response)
  }).catch((err)=>{
     console.log(err)
  })
 }

 DeletetingData();