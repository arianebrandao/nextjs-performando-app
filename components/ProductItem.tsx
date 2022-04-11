import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>R${product.price}</strong>
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
