import RandomData from '../../core/random-data';
import Faker from 'faker';

const word = function(length) {
    const word1 = Faker.random.word().replace(/[\W_]+/g, '');
    const word2 = Faker.random.word().replace(/[\W_]+/g, '');
    return (word1 + word2).toLowerCase().substr(0, length)
};

/**
 * To randomly select a user type
 *
 * @returns {string}
 */
const type = function(ratio) {
    const random = Math.floor(Math.random() * 100) + 1;

    return random % ratio ? 'student' : 'teacher'
};

/**
 * To generate random users
 *
 * TODO: fix undefined faker.internet.userName() or find something else
 *
 * @returns {[]}
 */
let users = () => {
    const row = [];
    const num = 100;

    for (let id = 1; id < num; ++id) {
        row.push({
            id: id,
            creation_id: RandomData.creationId(),
            school_id: Math.floor((Math.random() * 4) + 1),
            type: type(7),
            username: word(Math.random() > .5 ? 7 : 9),
            password: word(Math.random() > .5 ? 7 : 9),
            first_name: Faker.random.word(),
            last_name: Faker.random.word()
        });
    }

    return row;
};

exports.seed = function (knex) {
    return knex('user').del().then(function () {
        return knex('user').insert(users());
    });
};
