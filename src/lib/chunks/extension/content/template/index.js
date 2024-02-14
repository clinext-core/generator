
export default ({
  id: "<%= extensionId %>",
  description: "<%= extensionDescription %>",
  register: async ({ toolbox }) => {
    return {}
  },
  questions: [],
  validators: [],
  transformers: {
    in: [],
    out: [],
    display: [],
  },
})
