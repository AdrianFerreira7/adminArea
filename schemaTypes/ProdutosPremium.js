import { defineField, defineType } from 'sanity';

export const ProdutosPremium = defineType({
  name: 'secaoProdutosPremium',
  title: 'Produtos Premium',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título da Seção',
      type: 'string',
      description: 'Ex: Alguns dos nossos produtos',
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo',
      type: 'string',
      description: 'Ex: Aroma Desjardins',
    }),
    defineField({
      name: 'produto1',
      title: 'Primeira Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'produto2',
      title: 'Segunda Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'produto3',
      title: 'Terceira Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
