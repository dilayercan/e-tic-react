import {createContext} from "react";

//Context yapısının temelini oluşturma
export const ProductContext = createContext();

//Bir sağlayıcı bileşeni tanımla -HOC
export const ProductProvider = ({children}) =>{

//context yapısının içinde tutulan state
const [products, setProducts] = useState(null);

// context yapısında tuttuğumuz state/methodları uygulamaya sağla

return(
    <ProductContext.Provider value={{products}}>
      {children}  

    </ProductContext.Provider>
);

};

