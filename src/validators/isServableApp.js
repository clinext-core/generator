import isFolderCliNextAppSync from '../lib/lib/isFolderCliNextAppSync.js'

export default ({
  id: "isCliNextApp",
  handler: async ({ input, params }) => {
    return {
      isValid: input ? isFolderCliNextAppSync(input) : false,
      message: 'Not a feature folder'
    }
  }
})
