import React, { useState } from 'react';
import "./home.css";
import { connect } from 'react-redux';
import { setImages } from '../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setImages: images => dispatch(setImages(images)),
    }
}


const Home = ( props ) => {

    const [query, steQuery] = useState();

    const searchImage = () => {
        if (query) {
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=Sr-zUNDFjXTl0W86ieP7NB-7KSM8kqpaAF3dCqdqPJU`)
            .then(response => response.json())
            .then(data => props.setImages(data.results))
        }

    }
    console.log(query);

    return (
        <div id="home_page_area">
            <div className="container">

                <div className="search_input">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control shadow-sm" value={query} onChange={e=>steQuery(e.target.value)} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append ml-3">
                            <button onClick={searchImage} className="btn my-2 my-sm-0" type="submit"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>

                {props.images.length>0 ? 
                <>
                <div className="img_gallery">
                    <div className="head_lines">
                        <h5 className="py-3">{query}</h5>
                    </div>
                        <div className="images row">
                            {props.images.map((item, key)=>{
                                return  <div key={key} className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                            <img src={item.urls.thumb} alt="" className="img-fluid" />
                                        </div>

                            })}
                        </div>
                </div>
                <div className="text-center mt-4 load_more_btn">
                     <button type="submit" onClick={() => { console.log("button clicked")}} className="btn btn-dark">load more</button>
                </div>

                </>
                : <></>}

            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);