
import enum_http_error_codes from "./enum_http_error_codes";

export default class Http_error extends Error {
  public error_code: number;
  public http_code: number;

  constructor(msg) {
    super(msg);
    this.message = msg || 'Internal server error';
    this.error_code = this.error_code || enum_http_error_codes.DEFAULT;
    this.http_code = this.http_code || 400;
  }

  get_http_code() {
    return this.http_code;
  }

  toJSON() {
    let res = {
      error_code: this.error_code,
      // TODO: replace to error_text
      errorText: this.message
    };
    return res;
  }
}
