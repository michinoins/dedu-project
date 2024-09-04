// This is an open gateway. It exposes any IPFS content, not just the content we pin.
// Use when fetching public content (like images).
export const OPEN_IPFS_GATEWAY_HOSTNAME = 'gateway.pinata.cloud'

// Pinata API base URL
export const PINATA_API_BASE_URL = 'https://api.pinata.cloud'

// Gets strings that start with 'ipfs'
export const IPFS_LINK_REGEX = new RegExp(
  /((?:ipfs?):\/\/(?:\w+:?\w*)?(?:\S+)(:\d+)?(?:\/|\/([\w#!:.?+=&%!\-/]))?)/gi,
)
