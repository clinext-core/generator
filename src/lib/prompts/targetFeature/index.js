/*---------------------------------------------------------
 * Copyright (C) CliNext Community. All rights reserved.
 *--------------------------------------------------------*/
import chalk from "chalk"
import isFolderFeature from "./lib/isFolderFeature.js"
// import getCliNextPackage from "./lib/getCliNextPackage.js"
import isFolderFeatureSync from "./lib/isFolderFeatureSync.js"
import askForGeneric from "../utils/askForGeneric.js"
import updateTargetFeatureFromPath from "./updateTargetFeatureFromPath.js"
import path from "path"

export default async (props) => {
    const { toolbox, payload,
    } = props

    if (toolbox.options['targetFeaturePath']) {
        updateTargetFeatureFromPath({ payload, path: toolbox.options['targetFeaturePath'] })
        return true
    }

    if (toolbox.options['quick']) {
        // return true
    }

    const originalDestinationPath = toolbox.originalDestinationPath

    if (await isFolderFeature(originalDestinationPath)) {
        updateTargetFeatureFromPath({ payload, path: originalDestinationPath })
        toolbox.log(chalk.italic(`→ The target feature is the current folder.\n`))
        return true
    }

    toolbox.ui.drawSectionHeader({
        toolbox,
        title: `Feature choice 🐝`,
        subTitle: `Choose a feature`
    })

    const root = `${originalDestinationPath}`

    await askForGeneric({
        ...props, options: {
            ...props.options,
            type: "file-tree-selection",
            name: "targetFeaturePath",
            // message: "Choose a local feature",
            onlyShowDir: true,
            root,
            onlyShowValid: false,
            // hideRoot: true,
            enableGoUpperDirectory: true,
            hideRoot: false,
            hideChildrenOfValid: true,
            validate: (name,) => {
                if (!name || !name.length) {
                    return false
                }
                // return true
                return isFolderFeatureSync(name)
            },
            transformer: (name,) => {
                if (!name || !name.length) {
                    return name
                }

                const _name = name.split(path.sep).pop()
                const isCliNext = isFolderFeatureSync(name)
                return isCliNext ? `${chalk.underline(_name)} 🐝 ` : `${_name}`
            }
        }
    })

    updateTargetFeatureFromPath({ payload, path: payload.targetFeaturePath })
    return true
}
