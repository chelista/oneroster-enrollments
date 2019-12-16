import RandomData from '../../core/random-data';

exports.seed = knex => {
    return knex('class').del().then(() => {
        return knex('class').insert([
            {
                id: 1,
                creation_id: RandomData.creationId(),
                school_id: 1,
                name: 'English 1',
            },
            {
                id: 2,
                creation_id: RandomData.creationId(),
                school_id: 1,
                name: 'Algebra 1',
            },
            {
                id: 3,
                creation_id: RandomData.creationId(),
                school_id: 2,
                name: 'Geometry',
            },
            {
                id: 4,
                creation_id: RandomData.creationId(),
                school_id: 2,
                name: 'Reading & Comprehension',
            },
            {
                id: 5,
                creation_id: RandomData.creationId(),
                school_id: 3,
                name: 'ELA (GSE)',
            },
            {
                id: 6,
                creation_id: RandomData.creationId(),
                school_id: 3,
                name: 'Science',
            },
            {
                id: 7,
                creation_id: RandomData.creationId(),
                school_id: 3,
                name: 'Social Studies (GSE)',
            },
            {
                id: 8,
                creation_id: RandomData.creationId(),
                school_id: 4,
                name: 'Writing',
            },
            {
                id: 9,
                creation_id: RandomData.creationId(),
                school_id: 4,
                name: 'Biology',
            },
            {
                id: 10,
                creation_id: RandomData.creationId(),
                school_id: 4,
                name: 'Pysical Science',
            },
            {
                id: 11,
                creation_id: RandomData.creationId(),
                school_id: 4,
                name: 'World Literature',
            },
            {
                id: 12,
                creation_id: RandomData.creationId(),
                school_id: 4,
                name: 'US History',
            },
        ]);
    });
};
