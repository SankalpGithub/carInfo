class ApiResponse<T = any> {
  public statusCode: number;
  public data: T;
  public message: string;
  public success: boolean;

  constructor(statusCode: number, data: T, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400; // true for 2xx and 3xx, false for 4xx and 5xx
  }
}

export { ApiResponse };
