import ChunkAppContent from '../../lib/chunks/app/content/index.js'

export default ({
  _clinextType: 'command',
  name: 'new',
  position: 0,
  description: `Generate a CliNext app 🚀`,
  options: [
    {
      name: 'appName',
      type: 'string',
      promptType: 'input',
      alias: 'n',
      defaultValue: 'MyAppName',
      message: 'App name',
      validators: [{
        id: 'nonempty',
        params: { maxParams: 12 }
      }]
    },
    {
      name: 'appDescription',
      type: 'string',
      promptType: 'input',
      defaultValue: 'A Servable app',
      message: 'App description',
      validators: [{ id: 'nonempty', params: { maxParams: 12 } }]
    },
    {
      name: 'installDependencies',
      message: 'Install dependencies'
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
    }
  ],
  example: "$0 app new --appName='MyApp'",
  handler: async () => {
    const passed = await ChunkAppContent.ask()
    if (!passed) {
      return
    }

    await ChunkAppContent.write()
  },
})
