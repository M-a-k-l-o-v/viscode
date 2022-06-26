// string, numbers, boolean,  null, undefined:
const name = "Marvellous";
const age = 15;
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof z);

//concatenation:
console.log('My name is ' + name + ' and i am ' + age);

//templete string:
const hello = `My name is ${name} and i am ${age}`;
console.log(hello);


//string property: 
const s = "technology, impact, no. users, rating"
console.log(s.toUpperCase())
console.log(s.substring(0, 4).toUpperCase())
console.log(s.split(", "))

//Arrays
const fruits = ["banana", "apple", "peaches"];

fruits[3] = "pear"

fruits.push("mango");
fruits.unshift("strawberry");
fruits.pop();

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('banana'))

console.log(fruits);

//object literals:
const person = {
    firstname: "Marvellous",
    lastname: "Olushola",
    age: 15,
    hobbies: ["coding", "reading manga/manhwa/manhua", "eating", "music"],
    school: {
        name: "Gems Metropole ",
        location: "Motor city, Dubai, UAE",
        class: 11 + "E"
    }
}
console.log(person.firstname);
const { firstname, lastname } = person
person.email = "marvellousolushola@gmail.com ";
console.log(person);

//this next console.log is annoying:
console.log(firstname + " " + lastname);
console.log(firstname, lastname);

//Arrays of objects:
const to_do_list = [{
        id: 1,
        text: "read for GCSE",
        isCompleted: false

    },
    {
        id: 2,
        text: "read for GCSE mock",
        isCompleted: false

    },
    {
        id: 3,
        text: "practice math functions and finish english reading commentary",
        isCompleted: false

    }
];
console.log(to_do_list[2].text);
//JSON STRING- how data is sent to a server:
const to_do_listJSON = JSON.stringify(to_do_list);
console.log(to_do_listJSON)