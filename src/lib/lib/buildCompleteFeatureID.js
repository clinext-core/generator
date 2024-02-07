

export default featureId => {
    return featureId.indexOf('cliNext-') === 0 ? `${featureId}` : `cliNext-${featureId}`
}
