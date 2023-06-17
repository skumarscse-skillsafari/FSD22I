const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Component</h2>
      <p id="para">Feel free to contact us:</p>
      <form>
        <p>
          <input type="text" name="username" placeholder="Enter username" />
        </p>
        <p>
          <input type="email" name="email" placeholder="Enter email" />
        </p>
        <p>
          <textarea
            name="message"
            cols="21"
            rows="3"
            placeholder="Enter your message"
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" /> {"   "}
          <input type="reset" value="Clear" />
        </p>
      </form>
      <hr />
    </div>
  );
};

export default Contact;
