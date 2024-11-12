  import { defineField, defineType } from 'sanity';

  export const ProdutosType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required().min(3).max(100).warning('O título deve ter entre 3 e 100 caracteres.')
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.max(500).warning('A descrição deve ter no máximo 500 caracteres.')
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) => Rule.required().positive().precision(2).warning('O preço deve ser positivo e ter até 2 casas decimais.')
      }),
      defineField({
        name: 'image_princ',
        title: 'Imagem Principal',
        type: 'image',
        options: {
          hotspot: true, // permite selecionar uma área principal da imagem
        },
        validation: (Rule) => Rule.required().error('A imagem principal é obrigatória.')
      }),
      defineField({
        name: 'image_secund_1',
        title: 'Imagem Secundária 1',
        type: 'image',
        options: {
          hotspot: true // permite selecionar uma área principal da imagem
        },
        validation: (Rule) => Rule.required().error('A primeira imagem secundária é obrigatória.')
      }),
      defineField({
        name: 'image_secund_2',
        title: 'Imagem Secundária 2',
        type: 'image',
        options: {
          hotspot: true // permite selecionar uma área principal da imagem
        },
        validation: (Rule) => Rule.required().error('A segunda imagem secundária é obrigatória.')
      }),
      defineField({
        name: 'image_secund_3',
        title: 'Imagem Secundária 3',
        type: 'image',
        options: {
          hotspot: true // permite selecionar uma área principal da imagem
        },
        validation: (Rule) => Rule.required().error('A terceira imagem secundária é obrigatória.')
      }),
      defineField({
        name: 'image_secund_4',
        title: 'Imagem Secundária 4',
        type: 'image',
        options: {
          hotspot: true // permite selecionar uma área principal da imagem
        },
        validation: (Rule) => Rule.required().error('A quarta imagem secundária é obrigatória.')
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', // gera o slug automaticamente com base no título
          maxLength: 96
        },
        validation: (Rule) => Rule.required().error('O slug é obrigatório.')
      })
    ]
  });
