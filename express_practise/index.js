const dotenv = require("dotenv").config();
const {Client} = require("@notionhq/client");

const notion = new Client ({
    auth: process.env.NOTION_API_KEY
});

/*
LEARNING TIME

FUNCTION 
function function_name(arguemnts and for no arguemts leave it blank like ()){ NOTE: here function can also act as variable to agar console.log(function_name(arguemnts)) kaaru toh answer aa jayega

}

Another way is

const function_name = (arguemnts and for no arguemts leave it blank like ()) => {

}
same as above function_name value can be acessed like variable

*/

const list = async () => {
    const {results} = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID }); // gives array

    const data = results.map((page) => { // yaha map ki help se object banarahe and woh results se liya, also to note that page use as agar console.log(results) kiya toh object mein page ara matlab page is object and usse target karke array of object bana rahe taaki woh object(data in the database) se data nikal paye
        console.log(page.properties.Learning_Task.title[0].plain_text); // yaha object ka property ko view karre, so page object property is properties, properies object ka property is Learning_task, etc and yeh sab object console.log se dekh le, ye saara task ka name de deta hain
        //hello world
        //Learn about .h file and how to create mine
        // see two lines matlab line by line map function deta hain

        console.log(page.properties.Learning_Task.title[0].plain_text[0]);
        // will give
        //h
        //L

    });

    console.log(data);

    // map function takes array and create a new array, also it iterates matlab for loop ki tarah haar element leta array ka, then uss element pe function chalata then final ouput new array mein daalta
}

list(); // this will give 
//hello world
//h
//Learn about .h file and how to create mine
//L
// if 
/*
const list = async () => {
    const {results} = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID }); // gives array

    const data = results.map((page) => { // yaha map ki help se object banarahe and woh results se liya, also to note that page use as agar console.log(results) kiya toh object mein page ara matlab page is object and usse target karke array of object bana rahe taaki woh object(data in the database) se data nikal paye
        console.log(page.properties.Learning_Task.title[0].plain_text); // yaha object ka property ko view karre, so page object property is properties, properies object ka property is Learning_task, etc and yeh sab object console.log se dekh le, ye saara task ka name de deta hain
        //hello world
        //Learn about .h file and how to create mine
        // see two lines matlab line by line map function deta hain

        console.log(page.properties.Learning_Task.title[0].plain_text[0]);
        // will give
        //h
        //L

    });
}
*/