import capitalizeFirstLetter from '../../../newlib/capitalizeFirstLetter.js'

export default async () => {

  await CliNext.prompt.ask(
    [
      // {
      //   name: 'extensionName',
      // },
      {
        name: 'extensionId',
      },
      {
        name: 'extensionDescription',
      },
      {
        name: 'destination',
      },
      // {
      //   name: 'homepageUrl',
      // },
      // {
      //   name: 'extensionDefaultSlug',
      // },
      // {
      //   name: 'extensionGithubId',
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
        name: 'license',
      },
    ])

  if (!CliNext.payload.extensionName) {
    const name = capitalizeFirstLetter(CliNext.payload.extensionId)
    CliNext.payload.extensionName = name
  }

  if (!CliNext.payload.extensionHomepageUrl) {
    CliNext.payload.extensionHomepageUrl = ""
  }

  if (!CliNext.payload.extensionDefaultSlug) {
    CliNext.payload.extensionDefaultSlug = CliNext.payload.extensionId
  }

  if (!CliNext.payload.extensionHowTo) {
    CliNext.payload.extensionHowTo = ""
  }

  // if (!CliNext.payload.extensionEngine) {
  //   CliNext.payload.extensionHomepageUrl = "@cliNext-community/parse-server-engine"
  // }

  if (!CliNext.payload.extensionIconUrl) {
    CliNext.payload.extensionIconUrl = ""
  }

  if (!CliNext.payload.authorName) {
    CliNext.payload.authorName = ""
  }

  if (!CliNext.payload.authorEmail) {
    CliNext.payload.authorEmail = ""
  }

  if (!CliNext.payload.authorUrl) {
    CliNext.payload.authorUrl = ""
  }

  if (!CliNext.payload.authorGithubUrl) {
    CliNext.payload.authorGithubUrl = ""
  }

  if (!CliNext.payload.repositoryUrl) {
    CliNext.payload.repositoryUrl = ""
  }

  return true
}
