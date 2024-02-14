import ChunkExtensionShell from '../../lib/chunks/extension/shell/index.js'
import ChunkExtensionContent from '../../lib/chunks/extension/content/index.js'

export default ({
  _clinextType: "command",
  name: 'new',
  description: 'Create an extension module',
  questions: [
    {
      name: 'extensionId',
      message: 'Extension ID',
      validators: [{
        id: 'nonEmpty'
      }]
    },
    {
      name: 'extensionDescription',
      message: 'Extension description',
      validators: [{
        id: 'nonEmpty'
      }]
    },
    {
      name: 'destination',
      message: "Where to create",
      transformers: [{
        modes: ['out'],
        template: `<%= destination %>/<%= extensionId %>`
      }]
      // validators: [{ id: 'nonempty' }]
    },
    {
      name: 'packageManager',
    },
    {
      name: 'installDependencies',
    },
    {
      name: 'license',
    },
    {
      name: 'gitInit',
    },
    {
      name: 'extensionDescription',
    },

    // {
    //   name: 'homepageUrl',
    // },
    // {
    //   name: 'authorName',
    // },
    // {
    //   name: 'authorEmail',
    // },
    // {
    //   name: 'authorUrl',
    // },
    // {
    //   name: 'authorGithubUrl',
    // },
    {
      name: 'releaseType',
    },

  ],
  example: "$0 extension new",
  handler: async () => {
    let pass = await ChunkExtensionContent.ask()
    pass = await ChunkExtensionShell.ask({
      askIndex: false
    })

    if (!pass) {
      return
    }

    await ChunkExtensionShell.write({ askIndex: true })
    await ChunkExtensionContent.write()
  },
})
