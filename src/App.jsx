import './App.css'
import { useState,useEffect } from 'react'
import functions from './controllers/functions'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import UserData from './components/UserData'

function App() {
  const [data, setData] = useState({})
  const [dark, setDark] = useState(localStorage.theme === 'dark')
  const [search, setSearch] = useState('')

  // Fetch data
  useEffect(() => {
    functions.fetchMyGithubProfile(setData)
  }, [])
  //

  //DarkMode detect
  useEffect(() => {
    functions.darkMode(dark)
  }, [dark])

  return (
    <main>
      <Header setDark={setDark} dark={dark} />
      <section className='flex flex-col gap-4 lg:w-[730px] md:w-[573px] w-[327px]'>
        <SearchInput search={search} setData={setData} data={data} setSearch={setSearch} />
        <UserData data={data} />
      </section>
    </main>
  )
}

export default App