import CrudRouter from '../core/router';
import Model from '../models/teacher';
import Controller from '../controllers/teacher';

export default CrudRouter(new Controller(Model))
