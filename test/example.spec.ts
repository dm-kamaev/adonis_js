
// import Create_access_log from 'App/Middleware/Create_access_log';
import supertest from 'supertest'



describe('example', function () {
  // const tapi = new Test_mobile_api();
  // let TASK_ID;
  // const task = {
  //   name: 'Ручная задача',
  //   wfm_user_ids: null + '',
  //   priority: 2,
  //   required_text: true,
  //   required_photo: true,
  //   start: (time.get(time.format('YYYY-MM-DD 09:23')).new_Date) + '',
  //   end: (time.get(time.format('YYYY-MM-DD 20:23')).new_Date) + '',
  //   img1: Test_mobile_api.file(),
  //   img2: Test_mobile_api.file(),
  // };

  // beforeAll(async () => {
  //   await tapi.as_director();

  //   let { body } = await tapi.post('/wfm/api/v1/manual_task_in_shop', Test_mobile_api.form_data(task));

  //   TASK_ID = body.id;

  //   await tapi.as_employee();

  // });

  it('test api', async function () {
    const tapi = supertest('http://127.0.0.1:3333');
    const { body } = await tapi.get('/wfm/api/v1/osa_task');


    console.log(body);
  });

});