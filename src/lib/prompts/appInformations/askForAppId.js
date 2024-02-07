/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/

import validateCliID from "../../lib/validateCliID.js"
import askForGeneric from "../utils/askForGeneric.js"

export default async (props) => {
    const { payload } = props

    let defaultValue = null
    if (payload.cliID) {
        defaultValue = payload.cliID.toLowerCase().replace(/[^a-z0-9]/g, '-')
    }

    await askForGeneric({
        ...props, options: {
            ...props.options,
            name: 'cliID',
            defaultValue,
            validate: validateCliID
        }
    })
}
