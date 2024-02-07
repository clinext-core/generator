
export default async () => {

  CliNext.ui.drawSectionHeader({
    type: 'h2',
    title: `App informations 🚀`,
    subTitle: `General informations.`
  })

  await CliNext.prompt.ask([
    {
      name: 'destination',
    },
    {
      name: 'cliID',
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
  ])

  return true
}




