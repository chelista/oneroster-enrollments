import UserModel from './user';

class Teacher extends UserModel {
  $beforeValidate(jsonSchema, json, opt) {
    jsonSchema.required = [];

    return jsonSchema;
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);

    this.type = 'teacher';
  }
}

export default Teacher;
