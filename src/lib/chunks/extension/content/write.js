import ChunkIndex from '../index/index.js'

export default async (props = {}) => {
  const { destination = CliNext.payload.destination } = props

  CliNext.payload.extensionDescription = CliNext.payload.extensionDescription ? CliNext.payload.extensionDescription : ''
  CliNext.payload.author = CliNext.payload.author ? CliNext.payload.author : ''

  await CliNext.fs.chunks.copy({
    destination: `${destination}/src`,
    source: '**/*',
  })

  await ChunkIndex.write({ destination })
}
