import UserController from './user';

class TeacherController extends UserController {
    _queryAll = () => this.model.query().where({type: 'teacher'});

    _queryOne = req => this.model.query().findOne({id: req.params.id, type: 'teacher'});
}

export default TeacherController;
