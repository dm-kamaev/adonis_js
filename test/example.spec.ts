
import supertest from 'supertest'



describe('example', function () {

   it('test api', async function () {
    const tapi = supertest('http://127.0.0.1:3333');
    const { body } = await tapi.get('/wfm/api/v1/osa_task');
    console.log(body);
  });

});