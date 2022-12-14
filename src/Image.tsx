import css from "./Image.module.css";

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
  objectURL: string;
  primaryImage: string;
  title: string;
}

interface Props {
  data: ImageData
}

const Image = ({ data }: Props) => {
  return (
    <div className={css.container}>
      <a href={data.objectURL} className={css.link}>
        <img className={css.image} src={data.primaryImage} alt={data.creditLine} />
      </a>
      <h2 className={css.title}>{data.title}</h2>
      <h3 className={css.artist}>Artist: {data.artistDisplayName}</h3>
    </div>
  )
};

export default Image;
