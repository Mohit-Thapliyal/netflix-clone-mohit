import Layout from "../components/Layout";
import Row from "../components/Row";
import Thumbnail from "../components/Thumbnail";
import useAuth from "../hooks/useAuth";
import useList from "../hooks/useList";

const MyList = () => {
  const { user } = useAuth();
  const list = useList(user?.uid);

  return (
    <Layout title="My List - Netflix">
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-10 mt-20">
        {/* <Row title="My List" movies={list} /> */}
        <div className="h-40 space-y-0.5 md:space-y-2 ">
          <div className="group relative md:-ml-2">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mr-5  flex-wrap items-center gap-x-2 gap-y-2 overflow-x-scroll scrollbar-hide md:gap-2.5 md:p-2 "
            >
              {/* Thumbnail */}
              {list.map((movie) => (
                <Thumbnail type="large" key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default MyList;
