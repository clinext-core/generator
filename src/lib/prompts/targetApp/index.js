/*---------------------------------------------------------
 * Copyright (C) CliNext Community. All rights reserved.
 *--------------------------------------------------------*/
import chalk from "chalk"
import isFolderCliNextApp from "./lib/isFolderCliNextApp.js"
import isFolderCliNextAppSync from "./lib/isFolderCliNextAppSync.js"
import getCliNextPackage from "./lib/getCliNextPackage.js"
import path from "path"
import askForGeneric from "../utils/askForGeneric.js"

export default async (props) => {
  const { toolbox, payload, } = props

  let value = toolbox.options['targetApp']
  if (value) {
    payload.targetApp = value
    return
  }

  // payload.targetApp = 'standalone'

  if (toolbox.options['quick']) {
    return
  }

  const originalDestinationPath = toolbox.originalDestinationPath

  if (await isFolderCliNextApp(originalDestinationPath)) {
    const config = await getCliNextPackage(originalDestinationPath)
    payload.desiredWriteDestinationPathAbsolute = originalDestinationPath
    payload.desiredWriteDestinationPath = payload.desiredWriteDestinationPathAbsolute.split(path.sep).pop()

    toolbox.log(chalk.italic(`→ No app choice required. The feature will be added cliNext app in the current folder (${payload.appID}).\n`))
    return
  }

  toolbox.ui.drawSectionHeader({
    toolbox,
    title: `App choice 🚀`,
    subTitle: `Choose the app you want to add a feature to.`
  })

  await askForGeneric({
    ...props, options: {
      ...props.options,
      type: "file-tree-selection",
      name: "desiredWriteDestinationPathAbsolute",
      message: "Choose a cliNext app",
      onlyShowDir: true,
      root: originalDestinationPath,
      onlyShowValid: true,
      hideRoot: true,
      // onlyShowValid: true,
      // validate: name => {
      //     return (name && name.length && !['.'].includes(name[0]))
      // }
      validate: (name,) => {
        if (!name || !name.length) {
          return false
        }
        const isCliNext = isFolderCliNextAppSync(name)
        return isCliNext
      },
      transformer: (name,) => {
        if (!name || !name.length) {
          return name
        }

        const _name = name.split(path.sep).pop()
        //const isCliNext = (_name && _name.length && !['.'].includes(_name[0]))
        const isCliNext = isFolderCliNextAppSync(name)
        return isCliNext ? `${_name} (CliNext project) ` : `${_name} ('N/A')`
      }
    }
  })

  payload.desiredWriteDestinationPath = payload.desiredWriteDestinationPathAbsolute.split(path.sep).pop()

}
