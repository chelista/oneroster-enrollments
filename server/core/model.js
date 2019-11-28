import DbConfig from '../config/db';
import RandomData from './random-data';
import {ValidationError} from 'objection';

class Model extends DbConfig {

  /**
   * To generate a creation id before insert
   */
  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);

    if (this.id) {
      throw new ValidationError({
        message: 'ID should not be defined before insert',
        type: 'ModelValidation',
      });
    }

    this.creation_id = await RandomData.creationId();
  }
}

export default Model;
