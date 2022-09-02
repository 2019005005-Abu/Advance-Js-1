// localstorage vs sessionStorage
// 10mb vs 5mb
// permanent vs session (tab)
const userName=sessionStorage.setItem("userName","Abu Al Shahriar Rifat");
const userpassword=sessionStorage.setItem("userPassword","2019005005");
const userEmail=sessionStorage.setItem("userEmail","rifatdiu2686@gmail.com");

console.log(userName,userpassword,userEmail)

//update
const updatingPassword=sessionStorage.getItem('userPassword','12345678910');
console.log(updatingPassword);

const removingUserName=sessionStorage.removeItem('userName');
console.log(removingUserName);



const user11={
    id:101,
    name:"Abu Al shahriar Rifat",
    University:"University Of Sharda",
    Address:"Uttar-Pradesh,India"
}
sessionStorage.setItem("user",JSON.stringify(user));
const user_info=JSON.parse(sessionStorage.getItem("user11"))
console.log(user_info)



