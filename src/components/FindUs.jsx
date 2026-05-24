
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-200">
  <button className="btn join-item justify-start ">
    <FaFacebookF ></FaFacebookF>FaceBook
  </button>
  <button className="btn join-item justify-start">
       <FaTwitter></FaTwitter>Twitter 

  </button>
  <button className="btn join-item justify-start">
   <FaInstagram></FaInstagram>Instagram
    </button>
  
</div>
        </div>
    );
};

export default FindUs;