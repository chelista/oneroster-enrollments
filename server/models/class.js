import Model from '../core/model';

class Class extends Model {
    static get tableName() {
        return 'class';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['school_id', 'name'],
            properties: {
                id: {type: 'integer'},
                school_id: {type: 'integer'},
                creation_id: {type: 'string', minLength: 8, maxLength: 16},
                name: {type: 'string', minLength: 4, maxLength: 32},
            }
        };
    }

    static relationMappings = {
        school: {
            relation: Model.BelongsToOneRelation,
            modelClass: `${__dirname}/school`,
            join: {
                from: 'class.school_id',
                to: 'school.id'
            }
        }
    }
}

module.exports = Class;
