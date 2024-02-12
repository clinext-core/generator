/*---------------------------------------------------------
 * Copyright (C) CliNext Community. All rights reserved.
 *--------------------------------------------------------*/

import validateAppID from "../../lib/validateAppID.js"
import askForGeneric from "../utils/askForGeneric.js"

export default async (props) => {
    const { payload } = props

    let defaultValue = null
    if (payload.appID) {
        defaultValue = payload.appID.toLowerCase().replace(/[^a-z0-9]/g, '-')
    }

    await askForGeneric({
        ...props, options: {
            ...props.options,
            name: 'appID',
            defaultValue,
            validate: validateAppID
        }
    })
}
