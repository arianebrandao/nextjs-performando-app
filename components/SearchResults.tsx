//import { useMemo } from "react";
import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishlist,
  totalPrice,
}: SearchResultsProps) {
  //   const totalPrice = useMemo(() => {
  //     return results.reduce((total, product) => {
  //       return total + product.price;
  //     }, 0);
  //   }, [results]);

  // List React Virtualized
  // const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
  //   return (
  //     <div key={key} style={style}>
  //       <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
  //     </div>
  //   );
  // };

  return (
    <div>
      <h2>{totalPrice}</h2>

      {/* <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      /> */}

      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        );
      })}
    </div>
  );
}

/**
 * useMemo() é usado:
 * 1. Calculos pesados
 * 2. Igualdade referencial (quando repassa a informação para um componente filho)
 */

/**
 * useCallback() é usado:
 * 1. Passar um função para componentes filhos
 */
