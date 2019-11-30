import CrudRouter from '../core/router';
import Model from '../models/student';
import Controller from '../controllers/student';

export default CrudRouter(new Controller(Model))
