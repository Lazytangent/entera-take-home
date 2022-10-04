import "./Image.css";

interface Constituent {
  constituentID: number;
  name: string;
  role: string;
}

export interface ImageData {
  artistDisplayName: string;
  constituents: Constituent[];
  creditLine: string;
  objectID: number;
  primaryImage: string;
  title: string;
}

interface Props {
  data: ImageData
}

const Image = ({ data }: Props) => {
  return (
    <div className="container">
      <img className="image" src={data.primaryImage} alt={data.creditLine} />
      <h2 className="title">{data.title}</h2>
      <h3 className="artist">Artist: {data.artistDisplayName}</h3>
    </div>
  )
};

export default Image;
