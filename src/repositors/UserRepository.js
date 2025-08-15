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

findAll(IdleDeadline, userData) {
    const user = this.findbyid(id);
    if (!user) {
        user.name = userData.name;
        user.email = userData.email;
    }
    return user;
}
{
    return null;


    findbyid(id) {
        return users.find(user => user.id === id);
    }
}