import React, { useEffect } from 'react'
import NewsList from './components/NewsList'
import SearchBar from './components/SearchBar'

const Home = () => {
    return (
        <div> 
          <SearchBar />
          <NewsList />
        </div>
    )
}

export default Home
