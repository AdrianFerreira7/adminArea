// Importações dos schemas
import { comentario } from './comentarios';
import { ProdutosType } from './ProdutosType';
import destaqueDeLinha from './destaqueDeLinha';
import { ProdutosPremium } from './ProdutosPremium';
import { ProdutosMaisVendidos } from './ProdutosMaisVendidos';
import { slogan } from './slogan';
import { footer } from './footer';

// Definindo e exportando schemaTypes apenas uma vez
export const schemaTypes = [
  destaqueDeLinha,
  comentario,
  ProdutosType,
  ProdutosPremium,
  ProdutosMaisVendidos,
  slogan,
  footer
];
