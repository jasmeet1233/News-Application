import React, { useEffect } from 'react'
import NewsList from './NewsList'
import SearchBar from './SearchBar'
import { useGlobalContext } from './context'

const Home = () => {
  const {query, getNews} = useGlobalContext()

    return (
        <div> 
          <SearchBar />
          <NewsList />
        </div>
    )
}

export default Home
