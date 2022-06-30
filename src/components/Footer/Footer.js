import React from "react";
import gstore from ".././assets/gstore.png";
import astore from ".././assets/appstore.png";
import ig from ".././assets/ig.png";
import fb from ".././assets/fb.png";
import twitter from ".././assets/twitter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="flex top-footer">
        <div className="w-1/2 px-20 py-10">
          <h2 className="text-4xl">Download our app</h2>
          <p>
            Vestibulum felis sapien, tristique vitae finibus et, aliquam quis
            turpis. Nam euismod nisi in mauris convallis tempor. In hac
            habitasse platea dictumst.
          </p>
        </div>
        <div className="w-1/2 flex justify-start items-center">
          <img src={gstore} className="w-1/4 h-14" />
          <img src={astore} className="w-1/4 h-14 mx-10" />
        </div>
      </div>

      <div className="flex justify-between px-10 py-3">
        <p>BatLaz © Copyright 2022, Inc. All rights reserved.</p>

        <div className="flex">
          <div>
            <a className="px-2">Terms of Service</a>
            <a className="px-2">Privacy Policy</a>
            <a className="px-2">FAQs</a>
          </div>
          <div className="flex items-center">
            <img src={ig} className="h-4 px-1" />
            <img src={fb} className="h-4 px-1" />
            <img src={twitter} className="h-4 px-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
