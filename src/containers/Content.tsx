type IContentProps = React.BaseHTMLAttributes<HTMLDivElement>;

const Content: React.FC<IContentProps> = ({ children }: IContentProps) => {
  return <>{children}</>;
};

export default Content;
