export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public statusText: string,
    public responseBody: unknown,
    public response: Response,
  ) {
    super(`Http error ${statusCode}: ${statusText}`);
  }
}
