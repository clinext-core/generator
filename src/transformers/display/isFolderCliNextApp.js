import path from "path"
import chalk from 'chalk'
import isFolderCliNextAppSync from "../../lib/lib/isFolderCliNextAppSync.js"

export default ({
  _clinextType: 'tranformer',
  type: "tranformer",
  modes: ["display"],
  id: "isFolderCliNextApp",
  handler: ({ toolbox, input, item }) => {
    if (!input || !input.length) {
      return input
    }

    const name = input.split(path.sep).pop()
    const isCliNext = isFolderCliNextAppSync(input)
    return isCliNext ? `${chalk.underline(name)} 🐻` : `${name}`
  }
})
