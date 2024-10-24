import { Button, Input } from '@mui/material';

export default function Form({ handleSearch, setSearchInput, searchInput }) {
  return (
    <form onSubmit={handleSearch} className="search-form">
      <Input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter city name"
        className="search-input"
      />
      <Button type="submit" className="search-button" color="primary">
        Search
      </Button>
    </form>
  );
}
