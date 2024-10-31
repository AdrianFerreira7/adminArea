import {defineField, defineType} from 'sanity'

export const MissaoValoresType = defineType({
  name: 'Missao e Valores',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'Missao',
      type: 'string',
    }),
  ],
})