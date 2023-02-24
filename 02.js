//string concatination
// let string1="23"
// let string2="43"
// let firstname="anshu"
// let newstring= +string1 + +string2;
// console.log(typeof(newstring));
// console.log("hello my name is "+ firstname+" and time is "+newstring);

// //template string
// let desc=`hello my name is ${firstname} and time is ${newstring}`
// console.log(desc)
// //undefined 
// //null

// let myname;

// console.log(typeof myname)
// myname="anshu";
// console.log(typeof myname ,myname);

// var myvar="45";
// console.log(myvar)
// myvar="123"
// console.log(typeof myvar,myvar)
let hide=()=>{
    document.getElementsByTagName('P')[0].style.display='none'
}
let Unhide=()=>{
    document.getElementsByTagName('P')[0].style.display='block'
}