import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Context from '../../base/Context'

type T_context = {
  wfm_user: { id: number, name: string };
};

declare module '@ioc:Adonis/Core/HttpContext' {
  export interface HttpContextContract {
    CONTEXT: Context<T_context>
  }
}


export default class  Create_context {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>, properties) {
    let CONTEXT = new Context<T_context>({
      wfm_user: { id: 123, name: 'Vasya' }
    });
    console.log({ properties })
    ctx.CONTEXT = CONTEXT;
    await next()
  }
}