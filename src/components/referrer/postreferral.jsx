import React, { Component } from "react";
import "./postreferral.css";
import { Link } from "react-router-dom";

class PostReferral extends Component {
  state = {};
  render() {
    return (
      <div className="containerpostreferral" id="cover">
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"
          integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ"
          crossorigin="anonymous"
        ></link>
        <h2 className="text-center font-weight-bold">
          Please enter the following information to post a referral
        </h2>
        <h4 className="text-center heading4">
          Help LinkedIn connect people for better reach and earn rewards
        </h4>
        <form class="pure-form pure-form-aligned">
          <fieldset>
            <div className="formset">
              <div class="pure-control-group">
                <label className="namelabel" for="aligned-name">
                  Whom do you know as hiring contact
                </label>
                <input type="text" id="aligned-name" placeholder="Name" />
              </div>
              <div class="pure-control-group">
                <label className="namelabel" for="aligned-password">
                  How do you know this person?
                </label>
                <input
                  type="text"
                  id="aligned-password"
                  placeholder="Relationship"
                />
              </div>
              <div class="pure-control-group">
                <label className="namelabel" for="aligned-email">
                  Team
                </label>
                <input type="text" id="aligned-email" placeholder="Team" />
              </div>
              <div class="pure-control-group">
                <label className="namelabel" for="aligned-foo">
                  Position
                </label>
                <input type="text" id="aligned-foo" placeholder="Position" />
              </div>
              <div className="namelabel">
                <label for="aligned-cb" class="pure-checkbox">
                  <input type="checkbox" id="aligned-cb" /> Make the post
                  visible to connections only
                </label>
                <label for="aligned-cb" class="pure-checkbox">
                  <input type="checkbox" id="aligned-cb" /> Make the post public
                </label>
                &nbsp;
                <button type="submit" class="pure-button pure-button-primary">
                  Post
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default PostReferral;
