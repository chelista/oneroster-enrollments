import CrudRouter from '../core/router';
import Model from '../models/school';
import Controller from '../controllers/school';

const controller = new Controller(Model);

export default CrudRouter(controller)
