export default function Searchbar() {
  return (
    <>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Places"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          height="30px"
        >
          Search
        </button>
      </form>
    </>
  );
}
