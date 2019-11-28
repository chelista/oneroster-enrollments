import School from '../models/school';
import RandomData from '../core/random-data'

const controller = {
  all: (req, res) => {
    School.query().orderBy('name').then(function(rows) {
      res.status(200).send(rows);
    }).catch(function(err) {
      res.status(401).send(err.message);
    });
  },

  one: (req, res) => {
    const {id} = req.params;

    return School.query().findOne({id}).then(function(school) {
      if (school) {
        res.status(200).send(school);
      } else {
        res.status(404).send('School not found');
      }
    }).catch(function(err) {
      res.status(401).send(err.message);
    });
  },

  create: (req, res) => {
    School.query().insert({
      creation_id: RandomData.creationId(),
      name: req.body.name
    }).then(school => {
      res.status(201).send(school);
    }).catch(err => {
        console.log(err.message);
        res.status(417).send('Unable to create school');
    });
  },

  update: (req, res) => {
    School.query().patchAndFetchById(req.body.id, {
      name: req.body.name
    }).then(school => {
      res.status(200).send(school);
    }).catch(err => {
      console.log(err.message);
      res.status(417).send('Unable to update school');
    });
  },

  delete: (req, res) => {
    School.query().findById(req.params.id).
        then(school => {
          School.query().deleteById(school.id).
              then(() => res.status(201).send(school));
    })
  }
};

export default controller;
