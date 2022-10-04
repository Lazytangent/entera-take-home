import { useEffect, useState } from 'react';

import Image, { ImageData } from './Image';
import Loading from './Loading';

const URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/436121";

const dataFetcher = async () => {
  const res = await fetch(URL);
  const body = await res.json();
  return body;
};

function App() {
  const [data, setData] = useState<undefined | ImageData>();

  useEffect(() => {
    dataFetcher().then((body) => setData(body));
  }, []);

  return (
    <>
      {data ? <Image data={data} /> : <Loading />}
    </>
  );
}

export default App;
