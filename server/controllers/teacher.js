import UserController from './user';

class TeacherController extends UserController {
    _queryAll = () => this.model.query().eager('[school]')
        .where({type: 'teacher'}).orderBy('first_name');

    _queryOne = req => this.model.query().findOne({id: req.params.id, type: 'teacher'});
}

export default TeacherController;
