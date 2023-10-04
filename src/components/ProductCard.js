import Image from 'next/image';
import Link from 'next/link';

export default async function ProductCard({ product }) {
  const { id } = product;
  return (
    <Link
      href={`/products/${id}`}
      className="text-gray-700 w-1/4 h-96 flex flex-col items-center justify-start bg-slate-300 rounded-xl cursor-pointer hover:shadow-2xl"
    >
      <h2 className="font-bold py-5 max-w-6">{product.title}</h2>
      <Image
        className="max-h-40 w-auto"
        src={product.images[0]}
        width={200}
        height={200}
        alt="image of a product"
        priority
      />
      <p className="p-2 text-sm text-center">{product.description}</p>
    </Link>
  );
}
