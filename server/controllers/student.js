import Controller from '../core/controller';

class StudentController extends Controller {
  _queryAll = () => this.model.query().where({type: 'student'});

  _queryOne = req => this.model.query().
      findOne({id: req.params.id, type: 'student'});
}

export default StudentController;
