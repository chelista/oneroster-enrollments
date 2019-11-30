import UserModel from './user';

class Student extends UserModel {
  $beforeValidate(jsonSchema, json, opt) {
    jsonSchema.required = [];

    return jsonSchema;
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);

    this.type = 'student';
  }
}

export default Student;
