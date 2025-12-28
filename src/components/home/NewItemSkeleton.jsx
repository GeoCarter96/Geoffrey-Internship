import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Skeleton from 'react-loading-skeleton';

const NewItemSkeleton = ({cards}) => {
  return (
     Array(cards).fill(0).map((_, i) => (
    <section id="section-items" className="no-bottom" key={i}>
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="text-center">
                
                 <div className="small-border bg-color-2"></div>
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
                               items: 4,
                             },
                             1600: {
                               items: 4,
                             },
                           }}
              >
            
               
               <div className="item" >
                 <div className="nft__item">
                   <div className="author_list_pp">
                     
                  
                     
                       <img className="lazy"  alt="" />
                       <Skeleton circle width={40} height={40}/>
                       <i className="fa fa-check"></i>
                     
                   </div>
                   <div className="de_countdown"></div>
   
                   <div className="nft__item_wrap">
                     <div className="nft__item_extra">
                       <div className="nft__item_buttons">
                         <button></button>
                         <div className="nft__item_share">
                           <h4><Skeleton/></h4>
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
   
                  
                       <img
                        
                         className="lazy nft__item_preview"
                         alt=""
                       /> <Skeleton/>
                   <Skeleton />
                   </div>
                   <div className="nft__item_info">
                    
                       <h4><Skeleton/></h4>
         
                     <div className="nft__item_price"> <Skeleton/></div>
                     <div className="nft__item_like">
                       <i className="fa fa-heart"></i>
                       <span><Skeleton/></span>
                     </div>
                   </div>
                 </div>
               </div>
            
               </OwlCarousel>
           </div>
         </div>
       </section>))
  )
}

export default NewItemSkeleton
