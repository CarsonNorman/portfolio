function Contact() {
  return (
    <div className="h-1/3 bg-deep w-screen position flex justify-center items-center" id="contact">
      <div className="w-3/4 border-b border-black mx-auto text-slate-300">
        <h1 className="text-xl">Contact me!</h1>
        <div className=" text-sm my-3">
          <a href="https://github.com/CarsonNorman" target="_blank">
            <i className="fa fa-github"></i> CarsonNorman
          </a>
          <br />
          <a href="https://www.linkedin.com/in/carson-n/" target="_blank">
            <i className="fa fa-linkedin"></i> Carson-n
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
