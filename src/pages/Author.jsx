import React, {useState, useEffect} from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";
import AuthorSkeleton from "./AuthorSkeleton";



const Author = () => {
  const [info, setInfo] = useState(null);
  const [following, setFollowing] = useState(false)
 
    useEffect(() => {
      axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=73855012')
      .then(res => setInfo(res.data))
      .catch(err => console.error(err));
  }, []);
 
  window.scrollTo(0, 0);
return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      {info ? (
                      <img src={info?.authorImage} alt="" />
                      ) : (
                        <AuthorSkeleton width="150px" height="150px" borderRadius="50%"/>)}
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                       { info ? (
                        <h4>
                          {info?.authorName}
                          <span className="profile_username">{info?.tag}</span>
                          @{info?.tag}
                          <span id="wallet" className="profile_wallet">
                            {info?.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                       ) : (
                        <h4>
                          <AuthorSkeleton width="200px"/>
                          <span className="profile_username">
                            <AuthorSkeleton width="100px"/>
                            </span>
                            <span id="wallet" className="profile_wallet">
                            <AuthorSkeleton width="250px"/>
                            </span>
                            </h4>
                       )}
                       </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      {info ? (
                        <>
                          <div className="profile_follower">
                            {info.followers + (following ? 1 : 0)}{" "}
                            followers
                          </div>
                          {following ? (
                            <Link
                              to="#"
                              className="btn-main"
                              onClick={() => setFollowing(!following)}
                            >
                              Unfollow
                            </Link>
                          ) : (
                            <Link
                              to="#"
                              className="btn-main"
                              onClick={() => setFollowing(!following)}
                            >
                              Follow
                            </Link>
                          )}
                        </>
                      ) : (
                        <div className="profile_follower">
                          <AuthorSkeleton width="150px" height="40px" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems apiData={info} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
              

export default Author;