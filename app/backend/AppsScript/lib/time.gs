/**
 * Get current time in ISO string
 */
function nowISO() {
  return new Date().toISOString();
}

/**
 * Check if current time is past deadline
 */
function isExpired(deadlineISO) {
  return new Date().getTime() > new Date(deadlineISO).getTime();
}
