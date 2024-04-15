import "./App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import UserData from "./components/UserData";

function App() {
  return (
    <main>
      <Header />
      <section className="flex flex-col gap-4 lg:w-[730px] md:w-[573px] w-[327px]">
        <SearchInput />
        <UserData />
      </section>
    </main>
  );
}

export default App;
