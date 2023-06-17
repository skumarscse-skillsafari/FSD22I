import imageOne from "../images/image-one.jpg";

function About() {
  return (
    <div className="about">
      <h2>About Component</h2>
      <p>This is a paragraph</p>
      <img src={imageOne} alt="image-one" height={200} width={200} />
      <hr />
    </div>
  );
}

export default About;
