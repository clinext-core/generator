import ChunkIndex from '../index/index.js'

export default async (props = {}) => {
  const { destination = CliNext.payload.destination } = props

  CliNext.payload.featureDescription = CliNext.payload.featureDescription ? CliNext.payload.featureDescription : ''
  CliNext.payload.author = CliNext.payload.author ? CliNext.payload.author : ''

  await CliNext.fs.chunks.copy({
    destination,
    source: '**/*',
  })

  await ChunkIndex.write({ destination })
}
