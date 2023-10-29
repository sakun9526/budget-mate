import Footer from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <>
      <main className="flex flex-col h-screen">
      <Header />
      <div className="mt-10 grow">
        <Table />
      </div>
      <Footer />
      </main>
    </>
  );
}

export default App
