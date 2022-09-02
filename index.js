// console.log('Hi')
// var btn=document.querySelector('button');
// btn.addEventListener('click',()=>{
//     console.log('Button is Clicked'); 
// })

// console.log("Bye");
// const taskOne=(callbackforTaskOne)=>{
//     console.log('Task-1')
//     callbackforTaskOne();
// }

// const taskTwo=(callbackForTaskTwo)=>{
//    setTimeout(()=>{
//    console.log('Data is Loading  after 3seconds');
//    callbackForTaskTwo()
//    },3000)
// }

// const taskTree=(callTaskForThree)=>{
//     setTimeout(()=>{
//     console.log("Data is Loading after 4seconds");
//     callTaskForThree()
//     },4000)
   
// }

// const taskFour=(callBackForTaskFour)=>{
//     setTimeout(()=>{
//         console.log("Data is Loading after 5seconds");
//      callBackForTaskFour()
//     },5000);

// }

// const taskFive=()=>{
//     setTimeout(() => {
//     console.log("Data is Loading after 6 seconds");
//     }, 6000);
    
// }

// taskOne(()=>{
//   taskTwo(()=>{
//     taskTree(()=>{
//         taskFour(()=>{
//             taskFive();
//         });
//     });
//   })
// });

// // function square(x) {
// //  console.log(x*x);
// // }

// // function quebe(x){
// //     console.log(x*x*x);
// // }
// // function highorderFunction(num,callbackFunction){
// //    callbackFunction(num)
// // }
// // highorderFunction(6,square);

// // function calling1(num1,callbackback3){
// //   callbackback3(num1);
// // }
// // calling1(2,quebe);


// //promise handling
// console.log('Welcome');
// //how to create a promise
// const promise1=new Promise((resolve,reject)=>{
//      let completePromise=true;
//      if(completePromise){
//         resolve("The Promise is completed")
//      }else{
//         reject('The Promise is not complted');
//      }
// })


// const promise2=new Promise((resolve,reject)=>{
//    let isOk=true;
//    if(isOk){
//      resolve('The Promise has come');
//    }else{
//     reject('The Promise has not come');
//    }
// })



// Promise.all([promise1,promise2])
// .then(([response1,response2])=>{
//  console.log(response1,response2)
// }).catch((err)=>{
//   console.log(err.message)
// })

// console.log('End');


// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve('Promise-3 is calling')
//     },2000)
// })
// const promise4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promise-4 is calling');
//     })
// })

// Promise.race([promise3,promise4]).then(([response3,response4])=>{
//   console.log(response3,response4)
// }).then((err)=>{
//     console.log(err.message);
// })
