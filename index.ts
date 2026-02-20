type Product = {
    id: number,
    nome: string,
    preco: number,
    categoria: string;
    emEstoque: boolean;
};

const products: Product[] = [
  {
    id: 1,
    nome: "iPhone 15",
    preco: 5999.0,
    categoria: "Eletrônicos",
    emEstoque: true,
  },
  {
    id: 2,
    nome: "Cabo HDMI",
    preco: 39.9,
    categoria: "Eletrônicos",
    emEstoque: false,
  },
  {
    id: 3,
    nome: "Tênis Running Pro",
    preco: 349.9,
    categoria: "Esportes",
    emEstoque: true,
  },
  {
    id: 4,
    nome: "Mochila Urbana",
    preco: 189.9,
    categoria: "Acessórios",
    emEstoque: false,
  },
  {
    id: 5,
    nome: "Fone Bluetooth",
    preco: 229.9,
    categoria: "Eletrônicos",
    emEstoque: true,
  },
];

function showProduct(product: Product): string {
    const options: any = {
        style: "currency",
        currency: "BRL"
    } 
    const formattedPrice: string = product.preco.toLocaleString("pt-BR", options);
    const status = product.emEstoque ? "✅ disponível" : "❌ indisponível";

    return `[${product.categoria}] ${product.nome} -> ${formattedPrice} : ${status}`;
}

console.log("=== Catálogo de Produtos ===")
for (const product of products){
  const formattedProduct: string = showProduct(product);
  console.log(formattedProduct);
}