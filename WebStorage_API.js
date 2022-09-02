//Web starage API-allows us to store & read date in browser
//web storage api-localStarage,sessionStorage
//localStorage-store,read,update and remove data
//no expiry date:data never gets lost even if you close the browser

//setItem()
//local storage data as key  value pair---- string


//setItem(key,value)
const countriesName=["USA","UK","CANADA","BANGLADESH"];
localStorage.setItem("userName","Abu Al Shahriar Rifat");
localStorage.setItem("password","653353635353");
localStorage.setItem("userEmail","rifatdiu2686@gmail.com");
localStorage.setItem("countries",JSON.stringify(countriesName));

//getItem
const userName= localStorage.getItem("userName");
const userPassword=localStorage.getItem("password");
const countriesList=JSON.parse(localStorage.getItem("countries"))
console.log(countriesList);
//update
const updatingPassword=localStorage.setItem("password","201900");


//remove item
const removeItem=localStorage.removeItem('userEmail');


//SessionStorage

localStorage.clear()

