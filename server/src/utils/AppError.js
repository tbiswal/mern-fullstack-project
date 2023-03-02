class AppError extends Error {
  constructor(message, httpCode) {
    super();

    this.status = 200;
    this.message = message;
    this.httpCode = httpCode;
  }
}

export default AppError;
