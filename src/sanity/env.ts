export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skMFceKwD2bV9c3GdxrmWekGUgppYRp1UJaxGIEedAzPmBN7bsbYrsSTtT83WGCCJSwHXKXLURrPXDPJwXRcArXyJ9T0et45AZWpCwfiFW3NykpPbqXHTqmudB5UVSGYcMBDi23FiNk7XbfOHQZJKDHBQ5u2X8TzQHOUFGyfMQNp1wnSwchy",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
