import React,  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import Countdown from "../home/Countdown";
import AuthorSkeleton from "../../pages/AuthorSkeleton";



const ExploreItems = () => {
    const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
   const [limit, setLimit] = useState(8);
 const [sortType, setSortType] = useState("");
 
 const handleSort = (e) => {
    const type = e.target.value;
    setSortType(type);

    let sortedArray = [...info];

    if (type === "price_low_to_high"){
      sortedArray.sort((a, b) => a.price - b.price);
    } else if(type === "price_high_to_low"){
       sortedArray.sort((a, b) => b.price - a.price);
    } else if (type === "likes_high_to_low"){
      sortedArray.sort((a, b) => b.likes - a.likes);
    }
    
    setInfo(sortedArray);
  };

  const showMore = () => {
    setLimit(prevLimit => prevLimit + 4)};

  const getData = async () => {
    const response = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore`
    );
    setInfo(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
     
    <div data-aos="fade-up">
      <div>
        <select  value={sortType} 
        onChange={handleSort} id="filter-items"  >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
     {loading && info.length ? (
     info.slice(0,limit).map((infoItem, index ) =>  (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to={`/author/${infoItem.authorId}`}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <img className="lazy" src={infoItem.authorImage} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            {infoItem.expiryDate && <Countdown expiryDate={infoItem.expiryDate} />}
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
                <div className="nft__item_price">
                  {infoItem.price} ETH<span>{infoItem.date}</span>
                </div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{infoItem.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          {new Array(8).fill(0).map((_, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <AuthorSkeleton width="100%" height="400px" />
            </div>
          ))}
        </>
      )}
      <div className="col-md-12 text-center">
        {limit !== 16 && (
          <Link
            onClick={() => showMore(limit + 4)}
            to=""
            id="loadmore"showMore
            className="btn-main wow fadeInUp lead"
          >
            Load more
          </Link>
        )}
      </div>
    </div>
  );
};

export default ExploreItems;
