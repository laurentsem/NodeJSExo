const Router = require('express').Router
const router = Router()

const store = {
    resources: {
        'id_1': {
            name: 'xx'
        },
        'id_2': {
            name: 'yy'
        }
    }
}


// Get all resources
router.get('/resources/', (req, res) => {
    res.json(store.resources)
})

// Get resources by res_id
router.get('/resources/:id', (req, res) => {
    res.json(store.resources[req.params.id])
})

// Add new resource
router.post('/resources/', (req, res) => {
    const resource = req.body
    // Génère un id
    resource.id = Object.keys(store.resources).length + 1
    store.resources[resource.id] = resource
    res.send('Resources added !')
})

// Modify one resource
router.put('/resources/:id', (req, res) => {
    if (req.params.id === req.body.id) {
        store.resources[req.params.id] = req.body
        res.json(req.body);
    } else {
        res.status(400).end();
    }

})

// Patch one resource
router.patch('/resources/:id', (req, res) => {
    const id = req.params.id
    const resource = { ...store.resources[id], ...req.body }
    store.resources[id] = resource
    res.json(resource)
})

// Delete resources by res_id
router.delete('/resources/:id/', ((req, res) => {
    // Par destructuration
    const { id } = req.params
    if(store.resources[id]) {
        delete store.resources[id]
        res.json({ success: true })
    }
    else {
        res.status(404).end();
    }

}))

module.exports = router
