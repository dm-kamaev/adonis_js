// Context

export default class Context <T_context>{
  private _ctx: T_context
  constructor(ctx: T_context) {
    this._ctx = ctx;
  }

  /**
   * set
   * @param {string} key [description]
   * @param {*} val
   * @return {*} return after set
   * @throws {Error}
   */
  set<K extends keyof T_context>(key: K, val: T_context[K]) {
    let ctx = this._ctx;
    if (ctx[key]) {
      throw new Error(`context.set already exist value by key '${key}'`);
    } else {
      ctx[key] = val;
      return val;
    }
  }

  /**
   * get
   * @param  {string} key
   * @return {*}
   * @throws {NotExistKeyError} If not exist key
   */
  get<K extends keyof T_context>(key: K): T_context[K] {
    let val = this._ctx[key];
    if (val || (val as any) === '' || (val as any) === 0 || (val as any) === false) {
      return val;
    } else {
      throw new Not_exist_key_error(`context.get not exist value by key '${key}'`);
    }
  }

  /**
   * exist
   * @param  {string} key
   * @return {boolean}
   * @throws {Error}
   */
  exist<K extends keyof T_context>(key: K): boolean {
    try {
      this.get(key);
      return true;
    } catch (err) {
      if (err instanceof Not_exist_key_error) {
        return false;
      } else {
        throw err;
      }
    }
  }
};


class Not_exist_key_error extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
