import { defineField, defineType } from 'sanity'

export const slogan = defineType({
  name: 'slogan',
  title: 'Slogan',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo1',
      title: 'Título 1',
      type: 'string',
    }),
    defineField({
      name: 'titulo2',
      title: 'Título 2',
      type: 'string',
    }),
    defineField({
      name: 'subtitulo1',
      title: 'Subtítulo 1',
      type: 'string',
    }),
    defineField({
      name: 'subtitulo2',
      title: 'Subtítulo 2',
      type: 'string',
    }),
    defineField({
      name: 'texto1',
      title: 'Texto 1',
      type: 'text',
    }),
    defineField({
      name: 'texto2',
      title: 'Texto 2',
      type: 'text',
    }),
    defineField({
      name: 'botao',
      title: 'Botão',
      type: 'object',
      fields: [
        { name: 'texto', title: 'Texto do Botão', type: 'string' },
        { name: 'link', title: 'Link do Botão', type: 'url' },
      ],
    }),
  ],
});
