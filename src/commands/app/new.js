import ChunkAppContent from '../../lib/chunks/app/content/index.js'

export default ({
  _clinextType: 'command',
  name: 'new',
  position: 0,
  description: `Generate a CliNext app 🚀`,
  questions: [
    {
      name: 'appID',
      type: 'string',
      promptType: 'input',
      alias: 'n',
      defaultValue: 'myappID',
      message: 'App ID',
      validators: [{
        id: 'nonempty',
        params: { maxParams: 50 }
      }]
    },
    {
      name: 'appDescription',
      type: 'string',
      promptType: 'input',
      defaultValue: 'A CliNext app',
      message: 'App description',
      validators: [{
        id: 'nonempty',
        params: { maxParams: 12 }
      }]
    },
    {
      name: 'installDependencies',
    },
    {
      name: 'license',
    },
    {
      name: 'packageManager',
    },
    {
      name: 'gitInit',
    },
    {
      name: 'destination',
      transformers: [{
        modes: ['out'],
        template: `<%= destination %>/<%= appID %>`
      }]
      // validators: [{ id: 'nonempty' }]
    },
  ],
  example: "$0 app new --appID='MyApp'",
  handler: async () => {
    const passed = await ChunkAppContent.ask()
    if (!passed) {
      return
    }

    await ChunkAppContent.write()
  },
})
