
export default ({
  _clinextType: 'validator',
  id: "isnumber",
  handler: async ({ input, params }) => {
    return {
      isValid: (input && Number.isInteger(parseInt(input))),
      message: 'Not a number'
    }
  }
})
