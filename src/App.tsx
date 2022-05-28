import githubApi from "./domains/api";

function App() {
  const { data, error, isLoading, isSuccess, isError } =
    githubApi.useGetAccountQuery("irhtml");

  return (
    <>
      {isLoading && <div>Loading</div>}
      {isError && (
        <div>
          Something went wrong :c <div>{}</div>
        </div>
      )}
      {isSuccess && (
        <div>
          Hello {data.name}! (AKA {data.login})
        </div>
      )}
    </>
  );
}

export default App;
