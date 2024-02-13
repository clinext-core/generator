import ChunkShell from '../../lib/chunks/extension/shell/index.js'

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
      name: 'destination',
      message: "Where to create",
      transformers: {
        out: [{
          template: `<%= destination %>/<%= extensionId %>`
        }]
      }
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

    await CliNext.prompt.ask([
      {
        name: 'extensionId',
      },
    ])

    await CliNext.prompt.ask([
      {
        name: 'destination',

      },
    ])

    // CliNext.payload.destination = `${CliNext.payload.destination}/${CliNext.payload.extensionId}`


    let pass = await ChunkShell.ask({ askIndex: true })

    if (!pass) {
      return
    }

    await ChunkShell.write({ askIndex: true })
  },
})
