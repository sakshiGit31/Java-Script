const coding = ["js", "ruby", "java", "python", "cpp"]

// "js" = val ;  "ruby" = val ; "java" = val ; "python" = val ; "cpp" = val ;

// array(coding) ke hr value ko hm => val bol rahe hain.

// call back function main function ka name nahi hota hain

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => { 
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) => yaha function ka sirf referance dena hain only printMe na ki yha pe usko execute kr dena hain printMe() => execute

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
} )