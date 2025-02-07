import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface ProductPageProps {
    params: { slug: string }
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type=="product" && slug.current == $slug][0]{
            _id,
            productName,
            _type,
            image,
            price,
        }`,
        { slug }
    );
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = params;
    const product = await getProduct(slug);
    return (
        <div className="max-w-7xl mx-auto px">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="aspect-square">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md"
                        />
                    )}
                    <h1 className="text-4xl font-bold">
                        {product.name}
                    </h1>
                    <p className="text-2xl font-serif">
                        {product.price}
                    </p>
                </div>
            </div>
        </div>
    );
}