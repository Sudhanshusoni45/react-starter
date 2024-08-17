import "./App.css"
import { Routes } from "react-router"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen w-full">
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<div>React App</div>} />
        </Routes>
        <Toaster />
      </Suspense>
    </>
  )
}

export default App
