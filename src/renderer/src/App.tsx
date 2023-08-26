import EditorScreen from './components/editor/editor'
import 'bootstrap/dist/css/bootstrap.min.css';

const index = await (
  await fetch(
    'https://github.com/BSData/gallery/releases/latest/download/bsdata.catpkg-gallery.json'
  )
).json()
const targetRepoInfo = index.repositories.find((r) => r.name === 'wh40k-10e')
const repoContents = await (await fetch(targetRepoInfo.repositoryUrl)).json()
const armies = repoContents.repositoryFiles
const singleArmy = armies[0]
const armyCatUrl = singleArmy.githubUrl
  .replace('https://github.com', 'https://raw.githubusercontent.com')
  .replace('/blob/', '/')
const armyCat = await (await fetch(armyCatUrl)).text()
const parser = new DOMParser();
const armyCatDoc = parser.parseFromString(armyCat, "application/xml");
// console.log({ repoContents, armies, singleArmy, armyCat })
console.log(armyCatDoc)

function App(): JSX.Element {
  return (
      <EditorScreen></EditorScreen>
    )
}

export default App
