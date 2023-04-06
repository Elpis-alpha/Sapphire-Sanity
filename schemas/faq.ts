// schemas/faq.js
export default {
  name: 'faq',
  type: 'document',
	title: 'FAQs',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question'
    },
    {
      name: 'answer',
      type: 'string',
      title: 'Answer'
    },
  ]
}