import {useState} from 'react';
import './SearchForm.css';

const SearchForm = ({search}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm || undefined);
    setSearchTerm(searchTerm);
  }

  return (
    <div className='SearchForm'>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Enter search term...'
          value={searchTerm}
          name='searchTerm'
          onChange={handleChange}
          />
        <button>Search</button>
      </form>
    </div>
    
  )
}

export default SearchForm;