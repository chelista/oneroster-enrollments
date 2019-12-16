import Controller from '../core/controller';

class StudentController extends Controller {
    _queryAll = () => this.model.query().eager('[school]')
        .where({type: 'student'}).orderBy('first_name');

    _queryOne = req => this.model.query().findOne({id: req.params.id, type: 'student'});
}

export default StudentController;
