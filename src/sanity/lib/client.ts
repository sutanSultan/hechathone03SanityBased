import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId , token } from '../env'
const query = `*[_type == "post" && slug.current == $slug] {
  title,
  body,
}`;
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
