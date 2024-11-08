import { defineField, defineType } from 'sanity'

export const comentario = defineType({
  name: 'comentario', 
  title: 'Comentários',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string', 
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image', 
    }),
    defineField({
      name: 'avaliacao',
      title: 'Avaliação 1-5',
      type: 'number',
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'text', 
    }),
  ],
})
