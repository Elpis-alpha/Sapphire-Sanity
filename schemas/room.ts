// schemas/room.js
export default {
  name: 'room',
  type: 'document',
	title: 'Room',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'rate',
      type: 'string',
      title: 'Rate'
    },
    {
      name: 'image',
			type: "image",
      title: 'Image'
    },
  ]
}