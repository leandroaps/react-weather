import { Button, Input } from '@mui/material';
import Grid from '@mui/material/Grid2';

type FormType = {
  handleSearch: () => void;
  setSearchInput: (value: string) => void;
  searchInput: string;
};

export default function Form({ handleSearch, setSearchInput, searchInput }: FormType) {
  return (
    <Grid container spacing={2} alignItems="center" m={4}>
      <Grid size={12}>
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
      </Grid>
    </Grid>
  );
}
