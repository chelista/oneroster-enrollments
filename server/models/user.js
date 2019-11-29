import Model from '../core/model';

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['type'],
      properties: {
        id: {type: 'integer'},
        creation_id: {type: 'string', minLength: 8, maxLength: 16},
        username: {type: 'string', minLength: 8, maxLength: 16},
        password: {type: 'string', minLength: 8, maxLength: 16},
        first_name: {type: 'string', minLength: 3, maxLength: 24},
        last_name: {type: 'string', minLength: 3, maxLength: 24},
        type: {
          type: "string",
          enum: ["teacher", "student"]
        }
      }
    };
  }
}

module.exports = User;
