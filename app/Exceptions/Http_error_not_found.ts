
import Http_error from "./Http_error";
import enum_http_error_codes from "./enum_http_error_codes";



export default class Http_error_not_found extends Http_error {
  constructor(msg) {
    super(msg);
    this.error_code = enum_http_error_codes.VALIDATE;
  }

};
