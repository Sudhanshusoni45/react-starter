import "./App.css"
import { Route, Routes } from "react-router"
import { Toaster } from "react-hot-toast"
import { Suspense } from "react"
import { Loader } from "./components/Loader/loader"
//
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
          <Route
            path="/"
            element={
              <div className="">
                <span>React App</span>
              </div>
            }
          />
        </Routes>
        <Toaster />
      </Suspense>
    </>
  )
}

export default App
