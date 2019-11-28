import CrudRouter from '../core/router';
import Model from '../models/class';
import Controller from '../controllers/class';

export default CrudRouter(new Controller(Model))
