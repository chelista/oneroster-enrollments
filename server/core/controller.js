import chalk from 'chalk';

/**
 * Controller class to define simple CRUD operations
 */
export class Controller {
    /**
     * To define the model used for all queries
     *
     * The model must implement the following methods:
     *
     * _queryAll(req, res)
     * _queryOne(req, res)
     *
     * @param Model
     */
    constructor(Model) {
        this.model = Model;
    }

    /**
     * To fetch all records of the page
     *
     * @param req
     * @param res
     */
    all = (req, res) => {
        this._queryAll(req, res).then(records => {
            res.status(200).send(records);
        }).catch(err => {
            console.log(chalk.red(err.message));
            res.status(401).send('Record not found');
        });
    };

    /**
     * To allow children classes to query all records
     *
     * The request will have parameters for filtering or pagination.
     *
     * @param req
     * @param res
     * @returns {*}
     * @private
     */
    _queryAll = (req, res) => this.model.query();

    /**
     * To retrieve a single record
     *
     * @param req
     * @param res
     * @returns {Promise<QM | undefined>}
     */
    one = (req, res) => {
        return this._queryOne(req, res)
            .then(record => {
                if (typeof (record) === 'undefined') {
                    res.status(404).send('Record not found');
                } else {
                    res.status(200).send(record);
                }
            })
            .catch(function (err) {
                console.log(chalk.red(err.message));
                res.status(401).send('Record not found');
            });
    };

    /**
     * To allow children classes to select single items
     * @param req
     * @param res
     * @returns {Objection.QueryBuilderYieldingOneOrNone<QM>}
     * @pro
     */
    _queryOne = (req, res) => this.model.query().findOne({id: req.params.id});

    /**
     * To create a record
     *
     * @param req
     * @param res
     */
    create = (req, res) => {
        this.model.query()
            .insert(req.body)
            .then(record => {
                res.status(201).send(record);
            })
            .catch(err => {
                console.log(chalk.red(err.message));
                res.status(417).send('Unable to create record');
            });
    };

    /**
     * To update a record
     *
     * The route accepts PUT and PATCH. The body of the the request
     * to handle at will.
     *
     * @param req
     * @param res
     */
    update = (req, res) => {
        this._queryOne(req, res)
            .patchAndFetchById(req.params.id, req.body)
            .then(record => {
                if (typeof(record) === 'undefined') {
                    res.status(401).send('Record not found');
                } else {
                    res.status(200).send(record)
                }
            })
            .catch(err => {
                console.log(chalk.red(err.message));
                res.status(417).send('Unable to update record');
            });
    };

    /**
     * To delete a single record
     *
     * @param req
     * @param res
     */
    delete = (req, res) => {
        this.model.query()
            .findById(req.params.id)
            .then(record => {
                if (typeof (record) === 'undefined') {
                    res.status(404).send('Record not found');
                } else {
                    this._delete(res, req, record);
                }
            });
    };

    /**
     * To delete and return the deleted record
     *
     * @param res
     * @param req
     * @param record
     * @private
     */
    _delete = (res, req, record) => {
        this.model.query()
            .deleteById(record.id)
            .then(() => res.status(201).send(record))
            .catch(err => {
                console.log(chalk.red(err.message));
                res.status(417).send('Unable to delete record');
            });
    }
}

export default Controller;
