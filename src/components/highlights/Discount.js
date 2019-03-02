import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: '0',
    discountEnd: '30'
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade>
            <div className="discount_percentage">
              <span>30%</span>
              <span>Discount</span>
            </div>
          </Fade>
          <Slide bottom>
            <div className="discount_description">
              <h3>Be One of the First 100 to Order and Get 30% Off!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                nulla quaerat, laborum repellendus repellat doloribus? Dolorum,
                rem quos dolores suscipit voluptatibus dolor eius libero!
                Nostrum totam ea voluptas mollitia quos?
              </p>
              <div>Button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
