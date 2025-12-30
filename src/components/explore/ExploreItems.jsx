import React,  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import Countdown from "../home/Countdown";
import ExploreItemsSkeleton from "./ExploreItemsSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from "react-loading-skeleton";




const ExploreItems = () => {
    const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore");
        setInfo(response.data);
      } catch (err){
        setError('failed to fetch data');
      }finally{
        setLoading(false);
      } 
    };
    fetchData();
  },[]);
   

   if (error) return <h2>{error}</h2>
  return (
     <SkeletonTheme baseColor="grey" highlightColor="#525252">
    <>
      <div>
        <select  value={sortType} 
        onChange={handleSort} id="filter-items"  >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
     {loading &&<ExploreItemsSkeleton cards={8}/>}
     {info.slice(0,limit).map((infoItem, index ) =>  (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to="/author"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <img className="lazy" src={infoItem.authorImage} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            {index === 0 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                   {index === 2 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                   {index === 6 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                   {index === 7 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                   {index === 8 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                   {index === 9 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                 {index === 11 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                 {index === 12 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                 {index === 13 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                 {index === 14 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
                 {index === 15 && (    <div  className="de_countdown">
                <Countdown targetTimestamp={infoItem.expiryDate}/>
                 </div>)}
          
            <div className="nft__item_wrap">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <Link to="/item-details">
                <img src={infoItem.nftImage} className="lazy nft__item_preview" alt="" />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
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
      {limit < info.length && (
      <div  onClick={showMore} className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead">
          Load more
        </Link>
      </div>
      )}
    </>
    </SkeletonTheme>
  );
};

export default ExploreItems;
