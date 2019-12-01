import RandomData from '../../core/random-data';

exports.seed = function (knex) {
    return knex('school').del().then(function () {
        return knex('school').insert([
            {
                id: 1,
                creation_id: RandomData.creationId(),
                name: 'ClassLink High',
            },
            {
                id: 2,
                creation_id: RandomData.creationId(),
                name: 'ClassLink Middle',
            },
            {
                id: 3,
                creation_id: RandomData.creationId(),
                name: 'ClassLink Elementary',
            },
            {
                id: 4,
                creation_id: RandomData.creationId(),
                name: 'ClassLink Academy',
            },
        ]);
    });
};
