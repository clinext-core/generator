/*---------------------------------------------------------
 * Copyright (C) CliNext Community. All rights reserved.
 *--------------------------------------------------------*/

export default async (props) => {
    const { toolbox, payload, } = props

    toolbox.log('')
    toolbox.log('Your project ' + payload.cliID + ' has been created!')
    toolbox.log('')

    toolbox.log('For more information, also visit http://cliNextcommunity.com and follow us @cliNextcom.')
    toolbox.log('\r\n')
}
