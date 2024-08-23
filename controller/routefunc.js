import { v4 as uuidv4 } from 'uuid';

// users => userarray
// user => userreq

//MOCK DATABASE
// {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25
// }

let userarray = [];

export const getUsers = (req, res) => {
    console.log(userarray);
    // res.send("HELLO");
    res.send(userarray);
}

export const createUsers = (req, res) => {
    console.log('POST ROUTE REACHED');

    const userreq = req.body;
    const userId = uuidv4();
    const userWithId = { ...userreq, id: userId }
    // console.log(userreq);
    // userarray.push(userreq);
    console.log(userWithId);
    userarray.push(userWithId);
    res.send(`User with the name ${userreq.firstName} added to the database`);
}

export const singleUser = (req, res) => {
    const {id} = req.params;
    const foundUser = userarray.find((userreq) => userreq.id == id);
    // res.send(req.params);
    console.log("Single User");
    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    const {id} = req.params;
    // id to delete 123
    // John 123
    // Jane 321
    userarray = userarray.filter((userreq) => userreq.id != id);
    res.send(`User with the id ${id} deleted from the database`);
}

export const updateUser = (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const userToBeUpdated = userarray.find((userreq) => userreq.id == id);

    if(firstName)
    {
        userToBeUpdated.firstName = firstName;
    }
    if(lastName)
    {
        userToBeUpdated.lastName = lastName;
    }
    if(age)
    {
        userToBeUpdated.age = age;
    }

    res.send(`User with the id ${id} has been updated`);
}