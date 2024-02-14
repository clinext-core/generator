import isFolderClassSync from "../lib/newlib/isFolderClassSync.js"

export default ({
  _clinextType: 'validator',
  id: "isClass",
  handler: async ({ input, params }) => {
    return {
      isValid: input ? isFolderClassSync(input) : false,
      message: 'Not a class folder'
    }
  }
})
