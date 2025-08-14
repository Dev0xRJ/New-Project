const User = require( '../models/usermodel' );

const users = [];

class UserRepository {

    save(userData) {
        const user = new User(currentID, userData.name, userData.email);
        users.push(user);
        return user;
    }
}

findAll() {
    return users;
}