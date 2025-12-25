import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from "react-loading-skeleton";
import HotSkeleton from "./HotSkeleton";





const HotCollections = () => {
  
   
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections');
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
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="text-center">
              <h2>Hot Collections</h2>
             {loading && <HotSkeleton cards={1}/>}
              <div className="small-border bg-color-2 "></div>
            </div>
          </div>
         <OwlCarousel
              className="owl-theme"
              loop
              margin={16}
              nav
              responsive={{
                0: {
                  items: 1,
                },
                768: {
                  items: 2,
                },
                1024: {
                  items: 3,
                },
                1600: {
                  items: 4,
                },
              }}
 >
         {info.map((infoItem, index) => (
          
            <div className="item" key={index}>
              <div className="nft_coll  ">
                <div className="nft_wrap w-full ">
                  
                  <Link to="/item-details"> 
                    <img src={infoItem.nftImage }  className="lazy img-fluid " alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp ">
                 
                  <Link to="/author">
                    <img className="lazy pp-coll " src={infoItem.authorImage } alt="" />
                  </Link>
                  <i className="fa fa-check "></i>
                </div>
                <div className="nft_coll_info ">
                  <Link to="/explore">
                    <h4>{infoItem.title }</h4>
                  </Link>
                  <span>{infoItem.code }</span>
                   
                </div>
              </div>
            </div>
           
          ))}
         </OwlCarousel>
           
        </div>
      </div>
      
    </section>
 </SkeletonTheme>
   
  );
};

export default HotCollections;
