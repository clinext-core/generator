import capitalizeFirstLetter from '../../lib/newlib/capitalizeFirstLetter.js'

export default ({
  _clinextType: 'tranformer',
  type: "tranformer",
  modes: ["out"],
  id: "capitalizeFirstLetter",
  handler: ({ input, }) => {
    return capitalizeFirstLetter(input)
  }
})
