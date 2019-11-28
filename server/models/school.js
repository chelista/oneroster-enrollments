import Model from '../core/model';

class School extends Model {
  static get tableName() {
    return 'school';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: {type: 'integer'},
        creation_id: {type: 'string', minLength: 8, maxLength: 16},
        name: {type: 'string', minLength: 4, maxLength: 32},
      }
    };
  }

  static relationMappings = {
    classes: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/class`,
      join: {
        from: 'school.id',
        to: 'class.school_id'
      }
    }
  };
}

module.exports = School;
