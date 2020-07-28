import React, { Component } from "react";
import "./feedstyle.css";

class Feeds extends Component {
  state = {};
  render() {
    return (
      <div class="outer">
        <div class="outerclass">
          <div class="row">
            <div class="col-sm-2">
              <div class="col-sm-12 inner1">
                <div class="row">
                  <div class="col-sm-12">
                      <img
                        src="https://www.kindpng.com/picc/m/442-4426528_round-picture-profile-blond-hd-png-download.png"
                        width="76px"
                        height="76px"
                        class="profilepic"
                      />
                      <h5>Sally James</h5>
                      <p>Software Developer at Micrsoft</p>
                    </div>
                  
                </div>
                <hr />
                <div class="row">
                    <div class="col-sm-12">
                      
                        <p>Who viewed your profile : 200</p>
                        <p>Software Developer at Micrsoft</p>
                    </div>
                  </div>
                  
              </div>
              <div class="col-sm-12 inner1">
                <div class="row">
                  <div class="col-sm-12">
                    <hr/>
                      <h7>Recent</h7><br/>
                      <h7># microsoft</h7><br/>
                      <h7># linkedin</h7><br/>
                      <h7># womenintechnology</h7>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-sm-4">
            <div class="row">
                <div class="col-sm-12 innerPost">
                  <br />
                  
                  <ul class="companiesList">
                    <li>
                      <div>
                        <img
                          src="https://cdn3.iconfinder.com/data/icons/simplius-pack/512/pencil_and_paper-512.png"
                          width="20px"
                          height="20px"
                        />
                        <span class="companyName">Start a post</span>
                        
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div class="row">
                      <div class="col-sm-3">
                      <span>
                        <img
                          src="https://cdn3.iconfinder.com/data/icons/in-and-around-the-house/46/photocamera-512.png"
                          width="20px"
                          height="20px"
                        />
                        <label>Photo</label></span>
                        
                      </div>
                      <div class="col-sm-3">
                        <img
                        src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/128/My_Video_apps_mirror.png"
                          width="25px"
                          height="25px"
                        />
                        <span >Video</span>
                        
                      </div>
                      <div class="col-sm-3">
                        <img
                          src="http://www.tutorialsscripts.com/free-icons/file-icons/teal-file-icon-256-x-256.png"
                          width="20px"
                          height="20px"
                        />
                        <span >Document</span>
                        
                      </div>
                      <div class="col-sm-3">
                        <img
                          src="https://th.bing.com/th/id/OIP.1gA57fbZtSaN1R-uEVmgigAAAA?pid=Api&rs=1"
                          width="20px"
                          height="20px"
                        />
                        <span >Write article</span>
                        
                      </div>
                      </div>
                    </li>
                  </ul>
              </div>
              </div>
              <div class="row">
                <div class="col-sm-12 inner">
                  <br />
                  <p>Jobs Recommended for you</p>
                  <hr />
                  <ul class="companiesList">
                    <li>
                      <div>
                        <img
                          src="https://lh3.googleusercontent.com/Gn63lcwuTLoKg9QSoMha6xxqdUM33R6u3zKmgYbG6j9POfkKBLfkjoBuRXzZjtD1wUg"
                          width="40px"
                          height="40px"
                        />
                        <span class="companyName">JP Morgan</span>
                        <p class="openingInfo">
                          Software Engineer, San Francisco, US
                        </p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div>
                        <img
                          src="https://cdn.iconscout.com/icon/free/png-512/tesla-11-569489.png"
                          width="40px"
                          height="40px"
                        />
                        <span class="companyName">Tesla</span>
                        <p class="openingInfo">
                          Software Engineer, San Francisco, US
                        </p>
                      </div>
                    </li>
                  </ul>
              </div>
              </div>
            </div>
            <div class="col-sm-2 inner3">
              <h5 class="newhead">Today's News and Views</h5>

              <ul>
                <li>
                  <span>The shopping cart is changing</span>
                  <p>3d ago. 478 readers</p>
                </li>
                <li>
                  <span>The shopping cart is changing</span>
                  <p>3d ago. 478 readers</p>
                </li>
                <li>
                  <span>The shopping cart is changing</span>
                  <p>3d ago. 478 readers</p>
                </li>
                <li>
                  <span>The shopping cart is changing</span>
                  <p>3d ago. 478 readers</p>
                </li>
                <li>
                  <span>The shopping cart is changing</span>
                  <p>3d ago. 478 readers</p>
                </li>
              </ul>
              <button class="showmore">
                Show more
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
