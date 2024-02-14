import isFolderFeatureSync from '../lib/lib/isFolderFeatureSync.js'

export default ({
  _clinextType: 'validator',
  id: "isFeature",
  handler: async ({ input, params }) => {
    return {
      isValid: input ? isFolderFeatureSync(input) : false,
      message: 'Not a feature folder'
    }
  }
})
