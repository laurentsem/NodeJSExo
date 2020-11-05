const Router = require('express').Router
const router = Router()

const store = {
    resources: {
        res_id: {
            name: 'xx'
        },
    }
}

/*
get /api/resources/res_id -> renvoi la resource store.resources['res_id']
*/
/*
Exercice:

4 Routes
- 1) recuperer un objet avec son ID
- 2) creer un objet 
- 3) replace une resource avec son ID
- 4) patch une resource avec son ID
- 5) delete une resource son ID
----------------------------------------

Contraintes:
- Le plus RESTful possible (methodes, json)
- Un fichier de test:
    _> ajoute, get, modifie, get, et supprime la ressource.
*/

// Get resources by res_id
router.get('/resources/:id', (req, res) => {
    res.json(store.resources[req.params.id])
})

// Delete resources by res_id
router.delete('/resources/:id/', ((req, res) => {
    if(!store.resources[req.params.id]) {
        res.send('Resources not found ')
    } else {
        delete store.resources[req.params.id]
        res.send('Resources delete')
    }

}))

router.post('/resources/', (req, res) => {
    console.log(req.body)
    res.send('Resources added !')
})

router.put('/resources/:id', ((req, res) => {

}))


module.exports = router
