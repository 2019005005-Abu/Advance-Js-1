console.log('Starting...')
const taskOne=()=>{
    return new Promise((resolve,reject)=>{
       let taskOneCom=true;
        if(taskOneCom){
            resolve('Task one is completed')
        }else{
            reject('Task One is not completed')
        }
        
    })
}
const taskTwo=()=>{
    return new Promise((resolve,reject)=>{
     resolve('Task Two is  completed')
    })
}
const taskThree=()=>{
    return new Promise((resolve,reject)=>{
       resolve('Task three is completed');
    })
}

const taskFour=()=>{
    return new Promise((resolve,reject)=>{
        resolve('Task four is completed');
    })
}

const taskFive=()=>{
    return new Promise((resolve,reject)=>{
        resolve('Task Five is completed');
    })
}

// taskOne().
//  then((response)=>console.log(response))
// .then(taskTwo)
// .then((response)=>console.log(response))
// .then(taskThree)
// .then((response)=>console.log(response))
// .then(taskFour)
// .then((response)=>console.log(response))
// .then(taskFive)
// .then((response)=>console.log(response))
// .catch((err)=>{console.log(err.message)});

console.log('Ending...');
async function callAllTask(){
 try{
    const t1= await taskOne();
    console.log(t1);
    const t2=await taskTwo();
    console.log(t2);
    const t3=await taskThree();
    console.log(t3);
    const t4=await taskFour();
    console.log(t4);
    const t5=await taskFive();
    console.log(t5);
 }catch(err){
    console.log(err)
 }
 
}
callAllTask();

//Api  Calling-