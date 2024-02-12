import ChunkIndex from '../index/index.js'

export default async (props) => {
  let passes = false

  passes = await ChunkIndex.ask()
  return passes
}




