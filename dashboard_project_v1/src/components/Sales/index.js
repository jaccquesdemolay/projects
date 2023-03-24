import React from "react"

import NavBar from "../NavBar"

export default function Sales({ theme, toggleTheme }) {
  return (
    <>
      <main className="app2 grid" id={theme}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />

        <div className="box nps grid">
          <div className="top text-center">Monthly balance</div>
          <div className="middle status medium grid">
            <svg
              fill="red"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256.162 20C197.56 19.9749 141.043 41.7483 97.6056 81.0849C54.1679 120.422 26.9144 174.509 21.1467 232.826C15.3789 291.144 31.509 349.522 66.3996 396.606C101.29 443.689 152.446 476.112 209.918 487.566C267.39 499.021 327.068 488.69 377.344 458.581C427.62 428.472 464.899 380.739 481.931 324.667C498.963 268.594 494.529 208.191 469.492 155.207C444.455 102.222 400.605 60.4447 346.472 38C317.843 26.1281 287.155 20.0117 256.162 20V20ZM345.842 185.2C352.395 185.193 358.748 187.459 363.817 191.611C368.887 195.763 372.359 201.545 373.643 207.971C374.927 214.397 373.943 221.069 370.859 226.851C367.774 232.632 362.78 237.165 356.728 239.677C350.675 242.189 343.939 242.524 337.667 240.625C331.395 238.727 325.976 234.712 322.333 229.265C318.69 223.818 317.048 217.276 317.688 210.754C318.328 204.233 321.21 198.135 325.842 193.5C328.466 190.869 331.583 188.781 335.015 187.357C338.447 185.933 342.126 185.2 345.842 185.2V185.2ZM166.482 185.2C173.035 185.193 179.388 187.459 184.457 191.611C189.527 195.763 192.999 201.545 194.283 207.971C195.567 214.397 194.583 221.069 191.499 226.851C188.414 232.632 183.42 237.165 177.367 239.677C171.315 242.189 164.579 242.524 158.307 240.625C152.035 238.727 146.616 234.712 142.972 229.265C139.329 223.818 137.688 217.276 138.328 210.754C138.968 204.233 141.849 198.135 146.482 193.5C149.105 190.869 152.222 188.781 155.654 187.357C159.086 185.933 162.766 185.2 166.482 185.2V185.2ZM360.002 340.59H152.162C147.155 340.59 142.352 338.601 138.812 335.06C135.271 331.52 133.282 326.717 133.282 321.71C133.282 316.703 135.271 311.901 138.812 308.36C142.352 304.819 147.155 302.83 152.162 302.83H203.332C255.532 302.83 326.992 303.06 359.652 302.83C364.659 302.78 369.481 304.72 373.058 308.225C376.634 311.731 378.671 316.513 378.722 321.52C378.772 326.527 376.831 331.35 373.326 334.926C369.821 338.502 365.039 340.54 360.032 340.59H360.002Z"
                fill="green"
              />
            </svg>
            Medium
          </div>
          <div className="bottom">
            <span>Budget used: </span>
            <span>75%</span>
          </div>
        </div>
        <div className="box sell grid">
          <div className="top text-center">
            Closed sales
            <div className="sales">
              <span>
                <i className="fa-solid fa-circle-plus" title="Add new sale"></i>
              </span>
            </div>
          </div>

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
              <span>alcancada</span>
            </div>
          </div>

          <div className="bottom">
            <div className="item">
              <span>Forecast</span>
              <span>90</span>
            </div>
            <div className="item">
              <span>Reached</span>
              <span>63</span>
            </div>
          </div>
        </div>
        <div className="box target grid">
          <div className="top text-center">Monthly target</div>
          <div className="middle grid">
            <svg viewBox="0 0 232 232" style={{ "--percentage": 73 }}>
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
              <h3>73%</h3>
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
        <div className="box weekly-sell grid">
          <div className="top text-left">Sales per weekly day</div>
          <div className="wrapper">
            <div className="left grid">
              <div className="most-sell grid">
                <span>Highest sales day</span>
                Wednesday
              </div>
              <div className="less-sell grid">
                <span>Lowest sales day</span>
                Sunday
              </div>
            </div>
            <div className="right">
              <div className="bars">
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "3.9rem" }}></div>
                  <span>sun</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "11.5rem" }}></div>
                  <span>mon</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "7.6rem" }}></div>
                  <span>tue</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "15.9rem" }}></div>
                  <span>wed</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "6.9rem" }}></div>
                  <span>thu</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "12.9rem" }}></div>
                  <span>fri</span>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ "--height": "12rem" }}></div>
                  <span>sat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
