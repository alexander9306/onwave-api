const SiteController = require('../controllers/SiteController');
const CondominiumController = require('../controllers/CondominiumController');
const routes = [
    {
        method: 'GET',
        url: '/users',
        handler: SiteController.getAll
    },
    {
        method: 'GET',
        url: '/users/:id',
        handler: SiteController.getSingleUser
    },
    {
        method: 'POST',
        url: '/users',
        handler: SiteController.createUser
    },
    {
        method: 'PUT',
        url: '/users/:id',
        handler: SiteController.updateUser
    },
    {
        method: 'DELETE',
        url: '/users/:id',
        handler: SiteController.deleteUser
    },
    {
        method: 'GET',
        url: '/condominiums',
        handler: CondominiumController.getCondos
    },
    {
        method: 'GET',
        url: '/condominiums/:id',
        handler: CondominiumController.getSingleCondo
    },
    {
        method: 'POST',
        url: '/condominiums',
        handler: CondominiumController.createCondo
    },
    {
        method: 'PUT',
        url: '/condominiums/:id',
        handler: CondominiumController.updateCondo
    },
    {
        method: 'DELETE',
        url: '/condominiums/:id',
        handler: CondominiumController.deleteCondo
    },
    {
        method: 'GET',
        url: '/deletall',
        handler: SiteController.deleteAll
    }

]

module.exports = routes;