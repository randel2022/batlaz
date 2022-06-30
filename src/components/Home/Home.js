import React from "react";
import banner from ".././assets/Hero-Image3.png";
import egame from ".././assets/egame.png";
import circle from ".././assets/group-circle.png";
import speaker from ".././assets/speaker.png";
import googlegray from ".././assets/google-play-gray.png";
import claygray from ".././assets/clay-games-gray.png";
import whiteCrown from ".././assets/VectorCrown-White.png";
import BlackCrown from ".././assets/VectorCrown.png";
import console from ".././assets/console.png";

import "./Home.css";
import { TbMinusVertical } from "react-icons/tb";

export default function Home() {
  return (
    <div className="pb-36">
      <div className="flex hero-banner ">
        <div className="w-1/2 flex justify-center flex-col gap-10">
          <div className="px-20">
            <h2 className="text-7xl font-bold">
              Best Batlaz<br></br> Battle for you
            </h2>
          </div>

          <div className="flex w-full px-20">
            <a className="bg-black text-white px-12 py-3 radius-10">
              Explore Now
            </a>
            <a className="bg-white text-black px-12 py-3 border-10">
              Get Started
            </a>
          </div>

          <div className="flex w-full px-20 ">
            <div className="w-1/5 flex">
              <div>
                <p>1280</p>
                <p>Collection</p>
              </div>
            </div>
            <div className="w-1/5">
              <p>1280</p>
              <p>Collection</p>
            </div>
            <div className="w-1/5">
              <p>1280</p>
              <p>Collection</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-12">
          <img src={banner} />
        </div>
      </div>

      <div className="h-full px-20 py-10 flex w-full bg-red">
        <div className="w-2/5 flex flex-col">
          <h3 className="text-4xl font-bold">Trusted with Lorem Ipsum</h3>
          <p>
            Maecenas sit amet urna ornare ligula<br></br> faucibus consectetur
            nec vitae augue.
          </p>
        </div>
        <div className="w-3/5 flex justify-between px-20">
          <img src={googlegray} class="h-1/3" />
          <img src={claygray} class="h-1/3" />
          <img src={egame} class="h-1/3" />
        </div>
      </div>

      <div className="flex w-full px-20 my-20">
        <div className="w-1/3 bg-red-300 h-96 gray-div"></div>
        <div className="flex justify-start w-2/3 bg-green p-10 gap-5 flex-col">
          <h2 className="text-5xl font-bold">
            Join or watch stream<br></br> on batlaz war room
          </h2>
          <p>
            Maecenas sit amet urna ornare ligula faucibus consectetur nec vitae
            augue. Quisque dolor leo, tristique et hendrerit nec, vestibulum nec
            tellus. Vivamus ut ex velit. Ut in ex mattis, porta urna eu,
            placerat risus. Vestibulum tempor ut dui ut vestibulum. Integer mi
            dui, sollicitudin id arcu ac, eleifend pulvinar lacus. Morbi
            placerat imperdiet pretium. Praesent id egestas eros, ac rutrum sem.
            Aenean scelerisque massa ac nisi egestas elementum.
          </p>
          <a className="bg-black text-white py-2 w-32 text-center rounded-md">
            Explore Now
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-40">
        <div className="flex px-20 justify-between py-5">
          <h3 className="text-4xl font-bold">Latest batlaz battle</h3>
          <a>View All Games</a>
        </div>
        <div className="flex items-center px-20 gap-10">
          <div class="w-1/3 gray-circle-div p-10 flex items-center flex-col justify-center gap-3">
            <img src={circle} />
            <p className="text-center">Maecenas sit amet urna ornare</p>
            <a className="text-center bg-black text-white px-10 py-2 rounded-md">
              Play Now
            </a>
          </div>
          <div class="w-1/3 gray-circle-div p-10 flex items-center flex-col justify-center gap-3">
            <img src={circle} />
            <p className="text-center">Maecenas sit amet urna ornare</p>
            <a className="text-center bg-black text-white px-10 py-2 rounded-md">
              Play Now
            </a>
          </div>
          <div class="w-1/3 gray-circle-div p-10 flex items-center flex-col justify-center gap-3">
            <img src={circle} />
            <p className="text-center">Maecenas sit amet urna ornare</p>
            <a className="text-center bg-black text-white px-10 py-2 rounded-md">
              Play Now
            </a>
          </div>
        </div>

        <div className="flex gap-10 flex-col">
          <div className="flex px-20 justify-between flex-row">
            <div className="w-1/2">
              <h2 className="text-4xl font-bold">
                Enjoy Gaming Experience <br></br> With Batlaz App
              </h2>
              <p>
                Vestibulum felis sapien, tristique vitae finibus et, aliquam
                quis turpis. Nam euismod nisi in mauris convallis tempor. In hac
                habitasse platea dictumst.
              </p>
            </div>
            <div className="flex items-center">
              <a className="bg-black text-white py-2 px-10 rounded-md">
                Try Now
              </a>
            </div>
          </div>
          <div className="w-full flex px-20">
            <div className="w-2/6 flex">
              <img src={console} className=" p-2 h-10 circle" />
              <div className="mx-5">
                <p>Easy to play</p>
                <p>Nunc sit amet sagittis tortor. </p>
              </div>
            </div>
            <div className="w-2/6 flex">
              <img src={speaker} className=" p-2 h-10 circle" />
              <div className="mx-5">
                <p>Easy to play</p>
                <p>Nunc sit amet sagittis tortor. </p>
              </div>
            </div>
            <div className="w-2/6 flex">
              <img src={speaker} className=" p-2 h-10 circle" />
              <div className="mx-5">
                <p>Easy to play</p>
                <p>Nunc sit amet sagittis tortor. </p>
              </div>
            </div>
          </div>
          <div className="w-full flex px-20">
            <div className="w-2/6 flex">
              <img src={console} className=" p-2 h-10 circle" />
              <div className="mx-5">
                <p>Easy to play</p>
                <p>Nunc sit amet sagittis tortor. </p>
              </div>
            </div>
            <div className="w-2/6 flex">
              <img src={speaker} className=" p-2 h-10 circle" />
              <div className="mx-5">
                <p>Easy to play</p>
                <p>Nunc sit amet sagittis tortor. </p>
              </div>
            </div>
            <div className="w-2/6 flex">
              <img src={speaker} className=" p-2 h-10 circle" />
              <div className="mx-5">
                <p>Easy to play</p>
                <p>Nunc sit amet sagittis tortor. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-20 flex flex-col gap-10">
          <div className="flex h-9 w-9">
            <img src={BlackCrown} />
            <h2 className="text-4xl font-bold ml-3">leaderboard</h2>
          </div>

          <div className="flex w-full ">
            <div className="w-full w-1/2 flex flex-col gap-5">
              <div className="w-4/5  rounded-md gray-circle-div">
                <div className="flex justify-between p-5 ">
                  <div className="flex">
                    <img src={whiteCrown} className="h-8" />
                    <p className="ml-2">01/25</p>
                  </div>
                  <p>Vestibulum felis sapien</p>
                </div>
              </div>
              <div className="w-4/5 rounded-md gray-circle-div">
                <div className="flex justify-between p-5 ">
                  <div className="flex">
                    <img src={whiteCrown} className="h-8" />
                    <p className="ml-2">01/25</p>
                  </div>
                  <p>Vestibulum felis sapien</p>
                </div>
              </div>
              <div className="w-4/5 bg-red-400 rounded-md gray-circle-div">
                <div className="flex justify-between p-5 ">
                  <div className="flex">
                    <img src={whiteCrown} className="h-8" />
                    <p className="ml-2">01/25</p>
                  </div>
                  <p>Vestibulum felis sapien</p>
                </div>
              </div>
              <div className="w-4/5 bg-red-400 rounded-md gray-circle-div">
                <div className="flex justify-between p-5 ">
                  <div className="flex">
                    <img src={whiteCrown} className="h-8" />
                    <p className="ml-2">01/25</p>
                  </div>
                  <p>Vestibulum felis sapien</p>
                </div>
              </div>
            </div>

            <div className="w-full w-1/2 flex flex-col gap-5">
              <div className="w-w-4/5 bg-red-400 rounded-md gray-circle-div">
                <div className="flex justify-between p-5 ">
                  <div className="flex">
                    <img src={whiteCrown} className="h-8" />
                    <p className="ml-2">01/25</p>
                  </div>
                  <p>Vestibulum felis sapien</p>
                </div>
              </div>
              <div className="w-w-4/5 bg-red-400 rounded-md gray-circle-div">
                <div className="flex justify-between p-5 ">
                  <div className="flex">
                    <img src={whiteCrown} className="h-8" />
                    <p className="ml-2">01/25</p>
                  </div>
                  <p>Vestibulum felis sapien</p>
                </div>
              </div>
              <div className="w-w-4/5 bg-red-400 rounded-md gray-circle-div">
                <div className="flex justify-between p-5 ">
                  <div className="flex">
                    <img src={whiteCrown} className="h-8" />
                    <p className="ml-2">01/25</p>
                  </div>
                  <p>Vestibulum felis sapien</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
