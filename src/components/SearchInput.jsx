/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import SearchIcon from '../assets/icon-search.svg';
import functions from '../controllers/functions';

export default function SearchInput({ setData }) {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false)

  return (
    <section className='searchContainer'>
      <img src={SearchIcon} alt="Search Icon" className='w-5 h-5 md:h-6 md:w-6' />
      <input type="text" value={search} onChange={(event) => functions.handleInputChange(event, setSearch)} placeholder='Search GitHub username…' />
      <span className='text-tart-orange md:block hidden font-bold md:text-[13px] lg:text-[15px] text-[11px]'>{ error ? 'No results' : '' }</span>
      <button onClick={() => functions.handleSearch(setData, setError, search, error)}>Search</button>
    </section>
  );
}