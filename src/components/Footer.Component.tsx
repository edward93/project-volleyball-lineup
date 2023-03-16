import "../styles/footer.scss";
import GitInfo from "react-git-info/macro";

export const FooterComponent = () => {
  const gitInfo = GitInfo();

  return (
    <div className="pvl-footer-container">
      <div className="pvl-footer-app-info">
        <div className="pvl-footer-app-author">Made by Ed (エヂイ)</div>
        <div className="pvl-footer-app-version">version {process.env.REACT_APP_VERSION}-{gitInfo.commit.shortHash}</div>
      </div>
    </div>
  );
};
