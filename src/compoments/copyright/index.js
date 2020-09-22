import React, { Component } from 'react';
import './styles.css';

class CopyRight extends Component {
  render() {
    return (
      <div className="cpy">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
