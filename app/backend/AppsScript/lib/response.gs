function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function successResponse(message, data) {
  return jsonResponse({
    success: true,
    message,
    data
  });
}

function errorResponse(message, statusCode) {
  return jsonResponse({
    success: false,
    message,
    data: null,
    statusCode: statusCode || 400
  });
}
