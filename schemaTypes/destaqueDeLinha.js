export default {
    name: 'menuProduto',
    title: 'Menu de Produto',
    type: 'document',
    fields: [
      {
        name: 'imagemProduto',
        title: 'Imagem do Produto',
        type: 'image',
        options: {
          hotspot: true 
        },
        validation: Rule => Rule.required().error('A imagem do produto é obrigatória.')
      },
      {
        name: 'nomeProduto',
        title: 'Nome do Produto',
        type: 'string',
        validation: Rule => Rule.required().min(2).error('O nome do produto deve ter pelo menos 2 caracteres.')
      },
      {
        name: 'descricaoProduto',
        title: 'Descrição do Produto',
        type: 'text',
        rows: 4,
        validation: Rule => Rule.required().min(10).error('A descrição deve ter pelo menos 10 caracteres.')
      }
    ]
  };