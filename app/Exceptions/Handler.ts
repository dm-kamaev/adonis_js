/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Http_error from './Http_error';

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  async handle(error: any, ctx: HttpContextContract) {
    if (error instanceof Http_error) {
      console.log(error);
      return ctx.response.status(error.get_http_code()).json(error);
    } else {
      console.log(error);
      let err = new Http_error('Internal error');
      return ctx.response.status(err.get_http_code()).json(err);
    }
  }
}
