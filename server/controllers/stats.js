import School from '../models/school';
import Class from '../models/class';
import User from '../models/user';

const controller = {
    all: async (req, res) => {
        const schools = await School.query().count().first();
        const classes = await Class.query().count().first();
        const teachers = await User.query().column('type').count().
            where('type', '=', 'teacher').first();
        const students = await User.query().column('type').count().
            where('type', '=', 'student').first();

        const counts = {
            schools: schools['count(*)'],
            classes: classes['count(*)'],
            teachers: teachers['count(*)'],
            students: students['count(*)'],
        };
        res.status(200).send(counts);
    },
};

export default controller;
