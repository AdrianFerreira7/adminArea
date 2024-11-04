import {defineField, defineType} from 'sanity'

export const MissaoValoresType = defineType({
  name: 'Missao e Valores',
  title: 'Missao e Valoreaagitas',
  type: 'document',
  fields: [
    defineField({
      name: 'Missao',
      type: 'string',
    }),
  ],
})