import React, {Component} from 'react';
import styled from 'styled-components';

class RatingStars extends Component {  
  render() {
    const GoldStar = styled.i`
      color: gold;
    `
    return (
      <span>
        {[...Array(this.props.rating)].map((star, i) => <GoldStar key={i} className="glyphicon glyphicon-star"></GoldStar>)}
        {[...Array(5-this.props.rating)].map((star, i) => <i key={i} className="glyphicon glyphicon-star-empty"></i>)}
      </span>
    )
  }
}

export default RatingStars;