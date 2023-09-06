export default function Searchbar() {
  return (
    <>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search Places"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" height="30px">
          Search
        </button>
      </form>
    </>
  );
}
