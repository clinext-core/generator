export default async (props) => {
  const { destination = CliNext.payload.destination } = props

  CliNext.payload.extensionCategories = CliNext.payload.extensionCategories ? CliNext.payload.extensionCategories : ''
  await CliNext.fs.chunks.copy({
    destination,
    source: '**/*',
  })
}
