import "./heading.scss";

interface IProps {
  text: string;
  className?: string;
}

const Heading = ({ text, className }: IProps) => {
  return <h3 className={`Heading ${className}`}>{text}</h3>;
};

export default Heading;
