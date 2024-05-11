const PageHeaderBanner = ({ pageName }) => {
  const bannerStyle = {
    backgroundImage: `url(https://i.ibb.co/CmzzT4d/chefs-demonstrating-cooking-skills-contest-1.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    height: "200px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff", 
    fontSize: "2rem", 
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 1,
  };

  return (
   
      <div style={bannerStyle}>
        <div style={overlayStyle}></div>
        <div style={textStyle}>{pageName}</div>
      </div>
  
  );
};

export default PageHeaderBanner;
