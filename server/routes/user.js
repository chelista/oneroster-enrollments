import CrudRouter from '../core/router';
import Model from '../models/user';
import Controller from '../controllers/user';

export default CrudRouter(new Controller(Model))
