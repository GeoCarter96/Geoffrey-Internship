import React, {useState, useEffect} from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";

const Author = () => {
   const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
     
     useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=73855012');
        setInfo(response.data.some_array_property); 
        console.log(response.data)
      } catch (err){
        setError(err.name ==='failed to fetch data');
      }finally{
        setLoading(false);
      }  
    };
    fetchData();},[]);
  
            
  if (error) return <h2>{error}</h2>
  
  return (
     
    <div id="wrapper">
      
      <div  className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>
        {info?.data.map((infoItem) => (
       <React.Fragment key={info.id}>
        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  
                  <div className="de-flex-col">
                    
                    <div className="profile_avatar">
                      
                      <img src={infoItem.authorImage} alt="" />
                      
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {infoItem.authorName}
                          <span className="profile_username">@monicaaaa</span>
                          <span id="wallet" className="profile_wallet">
                            {infoItem.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                      
                    </div>
                     
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{ infoItem.followers}</div>
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                    </div>
                  
                  </div>
                  
                </div>
                
              </div>
              
              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems />
                </div>
              </div>
            </div>
        
         
        </section>
           </React.Fragment>
           ))}
      </div>
      
     
    </div>
    
  );
};

export default Author;
