
export default ({
  _clinextType: "question",
  type: 'string',
  message: "Choose a CliNext app",
  promptType: "file-tree-selection",
  name: "appPath",
  onlyShowDir: true,
  root: "./",
  onlyShowValid: false,
  enableGoUpperDirectory: true,
  hideRoot: false,
  hideChildrenOfValid: true,
  hideValidationErrorMessage: true,
  validators: [{
    id: 'isCliNextApp'
  }],
  transformers: [{
    modes: ['display'],
    id: 'isFolderCliNextApp'
  }]
})
