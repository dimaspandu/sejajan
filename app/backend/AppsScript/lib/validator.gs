/**
 * Validate required fields in object
 */
function requireFields(obj, fields) {
  fields.forEach(function (field) {
    if (!obj[field]) {
      throw new Error("Missing required field: " + field);
    }
  });
}

/**
 * Validate positive number
 */
function requirePositiveNumber(value, fieldName) {
  if (typeof value !== "number" || value <= 0) {
    throw new Error(fieldName + " must be a positive number");
  }
}
