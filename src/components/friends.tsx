import { useContext, useEffect } from "react";
import "../assets/wallet.css"; // Assuming you want to style the wallet page separately
import { UserContext } from "../context/UserContext";
import fanImage from "../assets/fan-image.png";
import bolt from "../assets/bolt.gif";
import { Link } from "react-router-dom";

const Friends = () => {
  const userContext = useContext<any>(UserContext);

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.id) {
      fetchTransactions(userContext.user.id);
    }
  }, [userContext]);

  const fetchTransactions = async (userId: any) => {
    try {
      console.log("userId", userId);
    } catch (error) {
      console.error("Error fetching transactionsHistory:", error);
    }
  };

  const inviteLink = userContext?.user?.telegram_id
    ? `http://t.me/TronoxApp_bot/?start=${userContext.user.telegram_id}`
    : "http://t.me/TronoxApp_bot";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  const rewards = [
    { level: 1, Tron: "TRX", mh: 5 },
    { level: 2, Tron: "TRX", mh: 3 },
    { level: 3, Tron: "TRX", mh: 1 },
  ];

  return (
    <div className="wallet-page2">
      <style>{`.wallet-page2
      {
          padding: 20px;
    font-family: Arial, sans-serif;
    height: 103%;
      }`}</style>
      <div className="invite-link-container">
        <p className="invite-link-title">Your Invite Link</p>
        <div className="invite-link-box">
          <span className="invite-link">{inviteLink}</span>
          <button className="copy-button" onClick={handleCopyClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M19 9H17V4H8V2H17C18.1 2 19 2.9 19 4V9M15 7V11H8V20H4V9H6V4H2V20C2 21.1 2.9 22 4 22H15C16.1 22 17 21.1 17 20V11C17 9.9 16.1 9 15 9H9V7H15Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <br></br>
      <Link to="/friendslist">
        <button className="action-button12">Open Friends List</button>
      </Link>
      <style>{`
        .action-button12 {
    padding-left: 98px;
    padding-right: 99px;
    height: 36px;
    background: #CB731A;
    border: none;
    color: #fff;
    cursor: pointer;
    box-shadow: inset 2px 2px 18px #0e0303a6;
}
        
        .referral-rewards {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
     margin-top: 10px;

}

.referral-rewards h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

  .pr-2 {
    padding-right: .5rem;
}
    .pl-4 {
    padding-left: 1rem;
}
    .py-2 {
    padding-top: .5rem;
    padding-bottom: .5rem;
}
    .bg-tg-secondary-bg-color {
    background-color: #0a0a1191;
}
    .rounded-2xl {
    border-radius: 1rem;
}
    .gap-3 {
    gap: .75rem;
}
    .justify-center {
    justify-content: center;
}
    .flex-1 {
    flex: 1 1 0%;
}
    .gap-2 {
    gap: .5rem;
}
    .items-center {
    align-items: center;
}
    .gap-1 {
    gap: .25rem;
}
    .flex-col {
    flex-direction: column;
}
    .w-full {
    width: 100%;
}
    .flex {
    display: flex;
}
 
    .mr-2 {
    margin-right: .5rem;
}
    .opacity-60 {
    opacity: .6;
}
    .text-tg-text-color {
    color: var(--tg-theme-text-color, #ffffff);
}
    .font-semibold {
    font-weight: 600;
}
    .font-light {
    font-weight: 300;
}
    .text-xs {
    font-size: .75rem;
    line-height: 1rem;
}
    blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 0;
}
    .font-extrabold {
    font-weight: 800;
}
    .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
}
    .py-1 {
    padding-top: .25rem;
    padding-bottom: .25rem;
}
    .bg-tg-section-bg-color {
    background-color: var(--tg-theme-section-bg-color, #2828287d);
}
    .text-tg-accent-text-color {
    color: var(--tg-theme-accent-text-color, #fff );
}
    .font-bold {
    font-weight: 700;
}
    .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
}
    .w-8 {
    width: 2rem;
}
    .h-8 {
    height: 2rem;
}
    .ml-4 {
    margin-left: 1rem;
}

`}</style>

      <div className="referral-rewards">
        <h2>Referral Rewards</h2>

        <div className="flex flex-col w-full gap-1">
          {rewards.map((reward) => (
            <div
              key={reward.level}
              className="flex pl-4 pr-2 py-2 gap-2 bg-tg-secondary-bg-color rounded-2xl items-center"
            >
              <div className="flex flex-col items-center mr-2">
                <p className="font-light text-xs text-tg-text-color opacity-60 levelcolor">
                  Level
                </p>
                <p className="font-extrabold text-xl">{reward.level}</p>
              </div>
              <div className="flex flex-1 justify-center items-center py-1 bg-tg-section-bg-color rounded-2xl gap-3">
                <div className="flex flex-col items-center">
                  <div className="text-base font-bold text-tg-accent-text-color">
                    {reward.Tron}
                  </div>
                </div>

                <img src={fanImage} alt="TRON Icon" className="w-8 h-8" />
              </div>
              <div
                className="flex flex-1 justify-center items-center 
                  py-1 bg-tg-section-bg-color rounded-2xl gap-3"
              >
                <div className="flex flex-col items-center ml-4">
                  <div className="text-base font-bold text-tg-accent-text-color">
                    <div className="text-xs font-semibold text-tg-text-color">
                      {reward.mh} %
                    </div>
                  </div>
                </div>
                <img src={bolt} alt="Mining Power" className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
