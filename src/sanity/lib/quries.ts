import { groq } from "next-sanity";
export const allProductsGain =groq`*[_type=="product"]`
export const fourProducts = groq`*[_type=="product"][0..3]`