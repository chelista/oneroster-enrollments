import Controller from '../core/controller';

class ClassController extends Controller {
  _queryAll = () => this.model.query().eager('[school]').orderBy('name');
}

export default ClassController;
