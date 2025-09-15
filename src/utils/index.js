import toast from "react-hot-toast";

// get all from local storage
const getAllToCart = () => {
  const all = localStorage.getItem("ToCart");

  if (all) {
    const ToCart = JSON.parse(all);
    console.log(ToCart);
    return ToCart;
  } else {
    console.log([]);
    return []; 
  }
};

// add gadget to local storage
const addToCart = (gadget) => {
  const ToCart = getAllToCart();
  const isExist = ToCart.find(item=> item.product_id == gadget.product_id)
  if(isExist) return toast.error("Item Already Exist");
  ToCart.push(gadget);
  localStorage.setItem("ToCart", JSON.stringify(ToCart));
  toast.success("Item Added To Cart");
};
// Get all wishlist items from local storage
const getAllWishlist = () => {
  const all = localStorage.getItem("Wishlist");

  if (all) {
    const Wishlist = JSON.parse(all);
    console.log(Wishlist);
    return Wishlist;
  } else {
    console.log([]);
    return [];
  }
};

// Add gadget to wishlist
const addToWishlist = (gadget) => {
  const Wishlist = getAllWishlist();
  const isExist = Wishlist.find(item => item.product_id === gadget.product_id);
  
  if (isExist) return toast.error("Item Already in Wishlist");

  Wishlist.push(gadget);
  localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
  toast.success("Item Added to Wishlist");
};

export { addToCart, getAllToCart, addToWishlist, getAllWishlist };