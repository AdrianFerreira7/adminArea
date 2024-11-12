import { defineField, defineType } from 'sanity';

export const ProdutosMaisVendidos= defineType({
  name: 'secaoProdutosMaisVendidos',
  title: 'Produtos Mais Vendidos',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título da Seção',
      type: 'string',
      description: 'Ex: Mais Vendidos',
    }),
    defineField({
      name: 'tituloimg1',
      title: 'Titulo Imagem 1',
      type: 'string',
      description: 'Ex: Oh, Happy Day',
    }),
    defineField({
      name: 'imagem1',
      title: 'Primeira Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'tituloimg2',
        title: 'Titulo Imagem 2',
        type: 'string',
        description: 'Ex: Aroma desjardins',
      }),
      defineField({
        name: 'imagem2',
        title: 'Segunda Imagem',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'tituloimg3',
        title: 'Titulo Imagem 3',
        type: 'string',
        description: 'Ex: Aroma Unique',
      }),
      defineField({
        name: 'imagem3',
        title: 'Terceira Imagem',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),  
      defineField({
        name: 'tituloimg4',
        title: 'Titulo Imagem 4',
        type: 'string',
        description: 'Ex: Vinho & especiarias',
      }),
      defineField({
        name: 'imagem4',
        title: 'Quarta Imagem',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
  ],
});
