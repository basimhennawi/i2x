export default class ApiError {
  constructor(err) {
    this.err = this.formatError(err);
  }

  formatError(err) {
    if (typeof err === 'string') {
      err = { // eslint-disable-line no-param-reassign
        statusCode: 404,
        message: err,
      };
    }

    if (!err.statusCode) {
      err.statusCode = 404; // eslint-disable-line no-param-reassign
    }

    return err;
  }

  getStatusCode() {
    return this.err.statusCode;
  }

  getMessage() {
    return this.err.message;
  }
}
