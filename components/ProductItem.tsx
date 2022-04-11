import { memo, useState, lazy } from "react"; //usar lazy no react ou dynamic no next
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import dynamic from "next/dynamic";
//import { AddProductToWishlist } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    // usando export default:
    //return import('./AddProductToWishlist')
    return import("./AddProductToWishlist").then(
      (mod) => mod.AddProductToWishlist
    );
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar à lista de desejos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

// se o componente não teve alteração, não cria nova versão para comparar
export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product); //comparação profunda do objeto todo
  }
);

/**
 * Quando usar MEMO:
 * 1. Componentes de funções puras (pure functions components)
 * 2. Componentes que renderizam muitas vezes
 * 3. Re-render com as mesmas props
 * 4. Componentes médios / grandes
 */
