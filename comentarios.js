import {defineField, defineType} from 'sanity'

export const comentario = defineType({
  name: 'Comentario',
  title: 'Comentarios',
  type: 'document',
  fields: [
    defineField({
      name: 'Missao',
      type: 'string',
    }),
  ],
})