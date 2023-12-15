export const Search = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for employee name, email, or designation"
        //   value={searchInput}
        //   onChange={handleSearchChange}
      />
      <button
      // onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};
