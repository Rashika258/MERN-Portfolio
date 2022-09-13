import React, { Fragment } from 'react';
import {Bars} from "react-loader-spinner";
import "./Loader.css";


const Loader = () => {
    return (
      <Fragment>
        <div className="loading">
          <Bars
            height="200"
            width="200"
            color="#FEE2C5"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </Fragment>
    );
}

export default Loader