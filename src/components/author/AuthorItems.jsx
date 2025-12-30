import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import AuthorSkeleton from "../../pages/AuthorSkeleton";

const AuthorItems = ({apiData}) => {
  const skeleton = new Array(8).fill(0).map((_, index) => (
    <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <AuthorSkeleton width="100%" height="400px" />
    </div>
  ));

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          { !apiData || !apiData?.nftCollection
          ? skeleton
          :apiData?.nftCollection.map((infoItem, index) => ( 
            <div key={index } className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to="">
                    <img className="lazy" src={infoItem.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="nft__item_wrap">
                   <Link to={`/item-details/${infoItem.nftId}`}>
                        <img
                          src={infoItem.nftImage}
                          className="lazy nft__item_preview"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft__item_info">
                      <Link to={`/item-details/${infoItem.nftId}`}>
                        <h4>{infoItem.title}</h4>
                      </Link>
                      <div className="nft__item_price">{infoItem.price} ETH</div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>{infoItem.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
