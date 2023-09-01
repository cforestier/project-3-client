import { useContext, useEffect, useState } from "react";
import "./LikeButton.css";
import productService from "../../services/product.service";
import { AuthContext } from "../../context/auth.context";

const LikeButton = ({ productId }) => {

  const { user } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Define an async function to check if the product is liked
    const checkIfLiked = async () => {
      try {
        // Send a request to the backend to check if the product is liked
        const response = await productService.get(productId);

        // Update the liked state based on the response
        setLiked(response.data.liked);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function to check if the product is liked
    checkIfLiked();
  }, [productId]); 

  const handleLikeClick = async () => {
    try {
      // Send a request to like/unlike the product without passing userId
      const response = await productService.like(productId);

      // Update liked state based on response
      setLiked(response.data.likes.includes(user._id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLikeClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={liked ? "red" : "none"} viewBox="0 0 24 24" stroke="red">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  );
};

export default LikeButton;



