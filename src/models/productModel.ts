export interface ProductContextType {
    product: Product
    products: Product[]
    featuredProducts: Product[]
    twoForProducts: Product[]
    topProducts: Product[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeaturedProducts: (take?: number) => void
    getTwoForProducts: (take?: number) => void
    getTopProducts: (take?: number) => void
}

export interface ProductFormType {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    productRequest: ProductRequest
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    createProduct: (e: React.FormEvent) => void
    updateProduct: (e: React.FormEvent) => void
    removeProduct: (articleNumber: string) => void
}

export interface Product {
    articleNumber: string;
    tag: string
    imageName: string;
    description: string
    name: string;
    category: string;
    price: number;
}

export interface ProductRequest {
    tag: string
    imageName: string
    description: string
    name: string
    category: string
    price: number
}

export interface ProductConfigType {
    tag: string
    imageName: string;
    description: string
    name: string;
    category: string;
    price: number;
    rating: number;
}



export interface CartItem {
    imageName: string;
    name: string;
    articleNumber: string;
    category: string;
    price: number;
    quantity: number;
}