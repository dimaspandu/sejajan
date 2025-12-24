/**
 * Generate unique ID using timestamp + random
 */
function generateId() {
  return (
    "id_" +
    Date.now().toString(36) +
    "_" +
    Math.random().toString(36).substr(2, 5)
  );
}
