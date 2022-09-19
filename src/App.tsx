import Application from "./components/application/application"
import Counter from "./components/counter/Counter"
import { MuiMode } from "./components/mui/mui-mode"
import { AppProviders } from "./Providers/app-providers"

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
