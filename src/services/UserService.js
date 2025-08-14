const UserRepository = require('../repositors/UserRepository');

class UserService {

    async createUser(userData) {
        if (!userData.name || !userData.email) {
            throw new Error('Name and email are required');
        }
        const user = await new UserRepository().save(userData);
        return user;
    }
}