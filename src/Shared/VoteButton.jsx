import { useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi';

const VoteButton = ({ upvotes }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [voteCount, setVoteCount] = useState(upvotes);

  const handleVoteClick = () => {
    // Update vote count and disable the button
    setVoteCount((prevCount) => prevCount + 1);
    setIsDisabled(true);

    // TODO: Perform any additional logic like sending a vote to the server
    // You can make an API call or update the vote count in your state management system.
  };

  return (
    <button
      title="Vote"
      className={`border px-3 py-1 rounded-md ${
        isDisabled ? 'bg-gray-400' : 'bg-[#eab308]'
      } text-white font-semibold flex items-center gap-1`}
      onClick={handleVoteClick}
      disabled={isDisabled}
    >
      Vote<BiSolidUpArrow /> {voteCount}
    </button>
  );
};

export default VoteButton;
