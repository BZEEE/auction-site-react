
import React from 'react';
import { AdvertisementsBar } from "./AdvertisementsBar/AdvertisementsBar";
import { CategoriesBar } from "./CategoriesBar/CategoriesBar";
import { ToolBar } from "./ToolBar/ToolBar"

function AuctionSiteHeader() {
  return (
    <div className="AuctionSiteHeader">
      <ToolBar></ToolBar>
      <CategoriesBar></CategoriesBar>
      <AdvertisementsBar></AdvertisementsBar>
    </div>
    // define media queries for reponsive web design on all of the following components
    // ToolBar
    // CategoriesBar
    // AdvertisementsBar
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default AuctionSiteHeader;