import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Http_error_not_found from '../../../Exceptions/Http_error_not_found';

export default class Osa_task {
  public async get_all (ctx: HttpContextContract) {
    const CONTEXT = ctx.CONTEXT;
    console.log('wfm_user =', CONTEXT.get('wfm_user'));
    // throw new Http_error_not_found('Не нашли задач');
    return [
      { id: 1, name: 'Coca Cola 0.5', stock: 35 },
      { id: 2, name: 'Творожок Домик в деревне ', stock: 25 },
    ]
  }

  // store({ request }: HttpContextContract) {
    // let request.file();
    // request
  // }
}