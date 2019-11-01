export const errors = {
  UNKNOWN_ERROR: 0,
  NETWORK_UNAVAILABLE: -100,
  NETWORK_TIMEOUT: -200,
  AUTHENTICATION_REQUIRED: -300,
  ACCESS_FORBIDDEN: -400,
  NOT_FOUND: -500,
  BAD_REQUEST: -600,
  INTERNAL_SERVER_ERROR: -700,
  PRECONDITION_FAILED: -800,

  NO_FILE_PASSED: -2000
}

export function errorMessage(errorCode) {
  switch (errorCode) {
    case errors.NETWORK_UNAVAILABLE:
    case errors.NETWORK_TIMEOUT:
      return 'Network error'
    case errors.AUTHENTICATION_REQUIRED: return 'Authentication is required'
    case errors.ACCESS_FORBIDDEN: return 'Access is forbidden'
    case errors.NOT_FOUND: return 'Resource not found'
    case errors.BAD_REQUEST: return 'Invalid input'
    case errors.INTERNAL_SERVER_ERROR: return 'Server error'
    case errors.UNKNOWN_ERROR:
    default:
      return 'Unknown error'
  }
}
