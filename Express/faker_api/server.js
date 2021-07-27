const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );



class User {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.address = {a:faker.address.streetName(),c:faker.address.city(), d: faker.address.state(),e:faker.address.zipCode(),f:faker.address.country()}
    }

}
app.get("/api/users/new", (req, res) => {
    res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user : new User() , company  :new Company()
    } );
});