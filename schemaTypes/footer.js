import { defineField, defineType } from "sanity";


export const footer = defineType({
  name: "rodape",
  title: "Rodape",
  type: "document",
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
      title: "Título"
    }),
    defineField({
      name: 'linkscontatos',
      type: 'array',
      title: "Links contatos",
      of: [
        {
          type: 'object',
          fields:[
            {name: 'name', type: 'string', title: 'Nome'},
            {name: 'url', type: 'url', title: 'URL'},
            {name: 'icon', type: 'image', title: 'Icone'}
          ]
        }
      ]
    }),
    defineField({
      name: 'subtitulo', // Nome único para o segundo campo
      type: 'object',
      title: 'Subtitulo com logo',
      fields:[
            {name: 'subtitulo', type: 'string', title: 'Subtitulo'},
            {name: 'logo', type: 'image', title: 'Logo'}
          ]
    }),
    defineField({
      name: 'subtitulolinks', // Nome único para o segundo campo
      type: 'string',
      title: 'Subtitulo links uteis'
    }),
    defineField({
      name: 'usefulLinks',
      type: 'array',
      title: 'Links Úteis',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Nome' },
            { name: 'url', type: 'url', title: 'URL' }
          ]
        }
      ]
    }),
    defineField({
      name: 'subtitulosociallinks', // Nome único para o segundo campo
      type: 'string',
      title: 'Subtitulo social links'
    }),
    defineField({
      name: 'sociallinks',
      type: 'array',
      title: "Links Sociais",
      of: [
        {
          type: 'object',
          fields:[
            {name: 'name', type: 'string', title: 'Nome'},
            {name: 'url', type: 'url', title: 'URL'},
          ]
        }
      ]
    }),
  ]
});
