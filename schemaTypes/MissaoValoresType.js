import { defineField, defineType } from 'sanity'

export const MissaoValoresType = defineType({
  name: 'missaoValores', // Removido espaço em 'Missao e Valores'
  title: 'Missão e Valores', // Este é o título visível, pode conter espaços
  type: 'document',
  fields: [
    defineField({
      name: 'missao', // Removido espaço em 'Missao'
      title: 'Missão', // Título visível, pode conter acentos e espaços
      type: 'string',
    }),
  ],
})
