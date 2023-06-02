const app = require ("../app");
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{

        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
    
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image', async ()=>{
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
            
            })

        it('Si hay un error responde con status: 500',async ()=>{
            const response = await agent.get('/rickandmorty/character/14233')
            expect(response.statusCode).toBe(500)
        })

    describe("GET /rickandmorty/login", ()=>{
        it('La información del login es correcta', async ()=>{
            const response = (await agent.get('rickandmorty/login?email=lucas@gmail.com&password=soyhenry1')).body
            expect(response.access).toEqual(true)

        })

        it('La información del login es incorrecta', async ()=>{
            const response = (await agent.get('rickandmorty/login?email=pepito@gmail.com&password=soy15153')).body;
            expect(response.access).toEqual(false)
        })
    })

    describe('DELETE /rickandmorty/fav/:id',()=>{
        const character1 = {id: '1', name: 'Lucas'}
        const character2 = {id: '2', name: 'Maty'}
        it('Devuelve el elemento enviado por body', async ()=>{
            const response = (await agent.post('/rickandmorty/fav').send(character2)).body
            expect(response).toContainEqual(character1)
        })
        it('Devuelve el previo elemento enviado y el actual', ()=>{
            
        })
    })
    })

       
})

