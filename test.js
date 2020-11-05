const axios = require('axios')
const BASE_URL = 'http://localhost:4021'

async function test_create(resource) {
    const result = await axios.post(`${BASE_URL}/api/resources`, resource)
    return result.data
}

async function test_get(id) {
    const result = await axios.get(`${BASE_URL}/api/resources/${id}`)
    return result.data
}

async function test_delete(id) {
    const result = await axios.post(`${BASE_URL}/api/resources/${id}`)
    return result.data
}

async function tests() {
    const newResource = {
        name: 'It is a real resource ?',
        answer: 'maybe !'
    }

    const createResult = await test_create(newResource)
    console.log({createResult})
    const getResult1 = await test_get(createResult.id)
    console.log({getResult1})

}


