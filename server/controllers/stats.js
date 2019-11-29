import School from '../models/school';
import Class from '../models/class';

const controller = {
    all: async (req, res) => {
        const schools = await School.query().count().first();
        const classes = await Class.query().count().first();

        const counts = {
            schools: schools['count(*)'],
            classes: classes['count(*)'],
        };
        res.status(200).send(counts);
    },
};

export default controller;
