import ProfileImage from "../images/image-jeremy.png";

const Profile = ({ changeTab, tab }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <img src={ProfileImage} alt="profile-pic"></img>
        <div>
        <p>Report for</p>
        <h2>
          Jeremy Robson
        </h2>
        </div>
      </div>
      <div className="profile-options">
        <button
          className={tab === "daily" ? "active" : "base"}
          onClick={changeTab}
          id="daily"
        >
          Daily
        </button>
        <button
          className={tab === "weekly" ? "active" : "base"}
          onClick={changeTab}
          id="weekly"
        >
          Weekly
        </button>
        <button
          className={tab === "monthly" ? "active" : "base"}
          onClick={changeTab}
          id="monthly"
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default Profile;
