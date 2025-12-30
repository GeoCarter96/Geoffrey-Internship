import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import axios from "axios";
import AuthorSkeleton from "./AuthorSkeleton";

const ItemDetails = () => {
   const [info, setInfo] = useState(null);
     const { nftId } = useParams();
 useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails', {
          params: { nftId: nftId || 17914494 }
        });
        setInfo(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [nftId]); 
 window.scrollTo(0, 0);
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            {info ? (
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={info.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{info.title + "#" + info.tag}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {info.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {info.likes}
                    </div>
                  </div>
                  <p>
                    {info.description}
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${info.ownerId}`}>
                            <img className="lazy" src={info.ownerImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${info.ownerId}`}>{info.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${info.creatorId}`}>
                            <img className="lazy" src={info.creatorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${info.creatorId}`}> {info.creatorName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{info.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
         <div className="row">
                <div className="col-md-6 text-center">
                  <AuthorSkeleton width="100%" height="100%" />
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <AuthorSkeleton width="300px" height="40px" />
                    <div className="item_info_counts">
                      <AuthorSkeleton width="80px" height="30px" />
                      <AuthorSkeleton width="80px" height="30px" />
                    </div>
                    <AuthorSkeleton width="100%" height="80px" />
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <AuthorSkeleton
                              width="50px"
                              height="50px"
                              borderRadius="50%"
                            />
                          </div>
                          <div className="author_list_info">
                            <AuthorSkeleton width="125px" height="20px" />
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6>Creator</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <AuthorSkeleton
                              width="50px"
                              height="50px"
                              borderRadius="50%"
                            />
                          </div>
                          <div className="author_list_info">
                            <AuthorSkeleton width="125px" height="20px" />
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Price</h6>
                      <div className="nft-item-price">
                        <AuthorSkeleton width="75px" height="20px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
