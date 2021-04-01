import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'



export default class Create_access_log {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const request = ctx.request;
    const response = ctx.response;
    const original = response.send.bind(response);
    ctx.response.send = function (body: any, generateEtag?: boolean) {

      if (!/\/doc/.test(request.url())! && !/swagger/.test(request.url())) {
        console.log('Send to access log ==> ', request.url(), request.ip(), request.method(), response.response.statusCode, body);
      }
      return original(body, generateEtag);
    };
    await next()
  }
}