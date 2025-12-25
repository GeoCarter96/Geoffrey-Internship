import React from 'react'
import Skeleton from 'react-loading-skeleton'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HotSkeleton = ({cards}) => {
  return (
   Array(cards).fill(0).map((_, i) => (
       <section id="section-collections" className="no-bottom" key={i}>
            <div className="container">
              <div className="row"> 
                <div className="col-lg-12"></div> <div className="text-center">
                    
                    
                    <div className="small-border bg-color-2 ">
                        
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
               <div className="item" >
                    <div className="nft_coll ">
                      <div className="nft_wrap ">
                   <Skeleton/>
                  </div>
                      <div className="nft_coll_pp ">
                       <img className="lazy pp-coll "  />
                         <Skeleton circle width={40} height={40}/>
                          <i className="fa fa-check "></i>
                      </div>
                      <div className="nft_coll_info ">
                         <h4>
                            <Skeleton/>
                         </h4>
                         <span><Skeleton/></span>
                          </div>
                    </div>
                  </div>
                  </OwlCarousel>
                   </div>
            </div>
            
          </section>))
       
  
  );
};

export default HotSkeleton
