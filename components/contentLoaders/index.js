import ContentLoader, { Facebook } from "react-content-loader";

export const MyLoader = () => <ContentLoader />;
export const HompageCardsLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={311}
    viewBox="0 0 300 311"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="0" rx="6px" ry="6px" width="300" height="311" />
  </ContentLoader>
);

const MyFacebookLoader = () => <Facebook />;
