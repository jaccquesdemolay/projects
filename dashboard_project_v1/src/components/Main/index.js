import React, {useEffect} from "react"

import NavBar from "../NavBar"

export default function Main({ theme, toggleTheme, userName }) {

  return (
    <>
      <main className="app2 grid" id={theme}>
        {/* <h1>{userName}</h1> */}
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <div className="box nps grid">
          <div className="top text-center">Annual balance</div>
          <div className="middle status excellent grid">
            <svg
              fill="none"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256.005 20C201.405 19.999 148.494 38.9296 106.287 73.5663C64.0806 108.203 35.1894 156.403 24.5362 209.953C13.883 263.503 22.1271 319.091 47.8638 367.244C73.6006 415.397 115.237 453.137 165.68 474.033C216.123 494.929 272.251 497.688 324.5 481.84C376.749 465.993 421.887 432.519 452.222 387.122C482.558 341.725 496.215 287.214 490.865 232.877C485.516 178.54 461.491 127.739 422.885 89.13C400.97 67.2137 374.954 49.8286 346.32 37.9672C317.687 26.1059 286.998 20.0006 256.005 20V20ZM124.315 209.65C129.414 203.051 135.918 197.671 143.356 193.9C150.794 190.129 158.978 188.063 167.315 187.85C176.64 187.489 185.93 189.183 194.527 192.812C203.125 196.441 210.819 201.916 217.065 208.85C218.304 210.238 219.258 211.857 219.873 213.614C220.487 215.37 220.749 217.231 220.644 219.089C220.539 220.947 220.069 222.766 219.261 224.443C218.453 226.119 217.323 227.62 215.935 228.86C214.547 230.1 212.928 231.054 211.171 231.668C209.414 232.282 207.554 232.544 205.696 232.439C203.838 232.334 202.018 231.864 200.342 231.056C198.665 230.248 197.164 229.118 195.925 227.73C192.468 223.922 188.214 220.924 183.466 218.95C178.717 216.976 173.592 216.075 168.455 216.31C164.329 216.317 160.258 217.254 156.544 219.051C152.831 220.848 149.57 223.459 147.005 226.69C145.684 228.448 143.973 229.875 142.007 230.859C140.041 231.843 137.873 232.357 135.675 232.36C133.036 232.368 130.447 231.638 128.201 230.253C125.954 228.868 124.139 226.883 122.961 224.521C121.783 222.16 121.288 219.516 121.533 216.888C121.777 214.261 122.751 211.754 124.345 209.65H124.315ZM386.845 298.34C382.358 329.845 366.655 358.674 342.618 379.529C318.582 400.385 287.828 411.868 256.005 411.868C224.182 411.868 193.427 400.385 169.391 379.529C145.355 358.674 129.651 329.845 125.165 298.34C124.817 295.898 125.043 293.409 125.825 291.07C126.609 288.819 127.883 286.77 129.555 285.07C131.283 283.341 133.337 281.971 135.597 281.039C137.857 280.107 140.28 279.632 142.725 279.64H369.284C371.761 279.62 374.216 280.099 376.503 281.049C378.79 281.999 380.862 283.401 382.595 285.17C384.294 286.898 385.571 288.996 386.325 291.3C387.051 293.587 387.229 296.012 386.845 298.38V298.34ZM388.165 228.77C386.775 230.007 385.154 230.957 383.396 231.567C381.638 232.177 379.778 232.435 377.92 232.325C376.063 232.215 374.245 231.741 372.571 230.928C370.897 230.116 369.4 228.981 368.165 227.59C364.706 223.786 360.451 220.79 355.703 218.816C350.956 216.842 345.831 215.939 340.695 216.17C336.554 216.191 332.472 217.148 328.754 218.97C325.036 220.791 321.779 223.431 319.225 226.69C317.904 228.448 316.193 229.875 314.227 230.859C312.261 231.843 310.093 232.357 307.895 232.36C305.256 232.368 302.667 231.638 300.421 230.253C298.174 228.868 296.36 226.883 295.181 224.521C294.003 222.16 293.508 219.516 293.753 216.888C293.997 214.261 294.971 211.754 296.565 209.65C301.658 203.058 308.155 197.681 315.583 193.911C323.012 190.14 331.187 188.07 339.514 187.85C348.838 187.503 358.124 189.204 366.719 192.832C375.314 196.46 383.01 201.928 389.264 208.85C391.765 211.653 393.052 215.334 392.84 219.084C392.628 222.834 390.935 226.347 388.135 228.85L388.165 228.77Z"
                fill="green"
              />
            </svg>
            Excelent
          </div>
          <div className="bottom">
            <span>Net profit: </span>
            <span>33M</span>
          </div>
        </div>
        <div className="box sell grid">
          <div className="top text-center">Closed sales</div>

          <div className="middle grid">
            <svg viewBox="0 0 232 232" style={{ "--percentage": 70 }}>
              <circle cx="50%" cy="50%" r="98.5" opacity="" stroke="" />
              <circle
                cx="50%"
                cy="50%"
                r="98.5"
                stroke="url(#paint0_linear_201_85)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_85"
                  x1="-9"
                  y1="82"
                  x2="145"
                  y2="178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CE9FFC" />
                  <stop offset="1" stopColor="#7367F0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="content">
              <h3>70%</h3>
              <span>reached</span>
            </div>
          </div>

          <div className="bottom">
            <div className="item">
              <span>Forecast</span>
              <span>£ 330K</span>
            </div>
            <div className="item">
              <span>Reached</span>
              <span>£ 231K</span>
            </div>
          </div>
        </div>
        <div className="box target grid">
          <div className="top text-center">Stock control</div>
          <div className="middle grid">
            <svg viewBox="0 0 232 232" style={{ "--percentage": 90 }}>
              <circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#d9d" />
              <circle
                cx="50%"
                cy="50%"
                r="98.5"
                stroke="url(#paint0_linear_201_102)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_102"
                  x1="1.97421e-07"
                  y1="82"
                  x2="154"
                  y2="178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#DF9780" />
                  <stop offset="1" stopColor="#A66DE9" />
                </linearGradient>
              </defs>
            </svg>
            <div className="content">
              <h3>90%</h3>
              <span>reached</span>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <span>In stock</span>
              <span>983</span>
            </div>
            <div className="item">
              <span>Sold</span>
              <span>884</span>
            </div>
          </div>
        </div>
        <div className="box weekly-sell grid">
          <div className="top text-left">2023 Monthly sales</div>
          <div className="wrapper">
            <div className="left grid">
              <div className="most-sell grid">
                <span>Highest sales month</span>
                April
              </div>
              <div className="less-sell grid">
                <span>Lowest sales month</span>
                January
              </div>
            </div>
            <div className="right sell-year">
              <div className="bars">
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "3.9rem" }}></div>
                  <div className="bar"></div>
                  <span>jan</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "11.5rem" }}></div>
                  <div className="bar"></div>
                  <span>feb</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "7.6rem" }}></div>
                  <div className="bar"></div>
                  <span>mar</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "15.9rem" }}></div>
                  <div className="bar"></div>
                  <span>apr</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "6.9rem" }}></div>
                  <div className="bar"></div>
                  <span>may</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "12.9rem" }}></div>
                  <div className="bar"></div>
                  <span>jun</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "12rem" }}></div>
                  <div className="bar"></div>
                  <span>jul</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "11rem" }}></div>
                  <div className="bar"></div>
                  <span>aug</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "10rem" }}></div>
                  <div className="bar"></div>
                  <span>sep</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "9rem" }}></div>
                  <div className="bar"></div>
                  <span>oct</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "5rem" }}></div>
                  <div className="bar"></div>
                  <span>nov</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "13rem" }}></div>
                  <div className="bar"></div>
                  <span>dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
