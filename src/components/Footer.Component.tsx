import "../styles/footer.scss";

export const FooterComponent = () => {
  return (
    <div className="pvl-footer-container">
      <div className="pvl-footer-app-info">
        <div className="pvl-footer-app-author">Made by Ed (エヂイ)</div>
        <div className="pvl-footer-app-version">version {process.env.REACT_APP_VERSION}</div>
      </div>
    </div>
  );
};
