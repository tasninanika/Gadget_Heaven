const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center mt-18">
        <h2 className="font-bold text-2xl text-black">Gadget Heaven</h2>
      </div>
      <div className="flex justify-center items-center text-center ">
        <p className="mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className="flex justify-between items-center mx-auto footer sm:footer-horizontal pb-12 text-black py-4 border border-gray-400 mt-8 px-96">
        <nav>
          <h2 className=" text-black font-bold text-xl">Services</h2>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover"> Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="text-black font-bold text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="text-black font-bold text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
