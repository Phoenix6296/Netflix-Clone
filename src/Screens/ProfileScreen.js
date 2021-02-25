import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans</h3>
              <p>Renewal Date :</p>
              <div className="profileScreen-plan">
                <div>
                  <h4>Netflix Standard</h4>
                  <h5>1080p</h5>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen-plan">
                <div>
                  <h4>Netflix Basic</h4>
                  <h5>480p</h5>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen-plan">
                <div>
                  <h4>Netflix Premium</h4>
                  <h5>4K+HDR</h5>
                </div>
                <button id="plan-chosen">Subscribed</button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen-signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
