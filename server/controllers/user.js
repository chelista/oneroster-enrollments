import Controller from '../core/controller';

class UserController extends Controller {
    update = async (req, res) => {
        const user = await this._queryOne(req, res);

        if (typeof(user) === 'undefined') {
            res.status(404).send('User not found');
        }

        user.$query().patchAndFetchById(req.params.id, req.body).then(user => {
            res.send(user);
        });
    };
}

export default UserController;
