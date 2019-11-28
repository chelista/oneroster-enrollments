import Knex from 'knex';
import {Model} from 'objection';
import config from '../knexfile';

const knex = Knex(config.development);

Model.knex(knex);

export default Model;
