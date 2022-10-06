import React from 'react'

const SearchBar = ({keyword, keywordChange}) => {
  return(
    <input type='text' placeholder='Search by Title...' value={keyword} onChange={(event) => keywordChange(event.target.value)} />
  )
}

export default SearchBar