
export function successResponse(
  res: any,
  message: string,
  data: any = {},
  statusCode = 200
) {
  return res.status(statusCode).json({
    statusCode: 'success',
    message,
    data,
  });
}

export function errorResponse(
  res: any,
  message: string,
  statusCode = 500
) {
  return res.status(statusCode).json({
    statusCode: 'error',
    message,
  });
}
