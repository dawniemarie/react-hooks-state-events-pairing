function SearchBar({ search, onSearchChange }) {
    return (
        <form>
            <label>
                <input
                type="text"
                placeholder="Search Comments"
                value={search}
                onChange={e => onSearchChange(e.target.value)}/>
            </label>
        </form>
    )
}

export default SearchBar;