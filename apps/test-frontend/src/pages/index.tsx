import { toDateHU } from "shared-utils";

const Home = () => {
  const dateString = toDateHU("2023-01-14");
  return (
    <main>
      <p>The date: {dateString}</p>
    </main>
  );
};

export default Home;
