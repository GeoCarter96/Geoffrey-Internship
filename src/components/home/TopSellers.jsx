import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from "react-loading-skeleton";
import TopSellerSkeleton from "./TopSellerSkeleton";
const TopSellers = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers');
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
    <section data-aos="fade-up" id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
             {loading && <TopSellerSkeleton/>}
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {info.map((infoItem, _) => (
                <li key={infoItem.id}>
                  <div className="author_list_pp">
                    <Link to="/author">
                      <img
                        className="lazy pp-author"
                        src={infoItem.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to="/author">{infoItem.authorName}</Link>
                    <span>{infoItem.price} ETH</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
    </SkeletonTheme>
  );
};

export default TopSellers;
