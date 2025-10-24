
import RighttCardContent from "./RighttCardContent";

const RightCard = () => {
  return (
    <>
      <div className="h-full shrink-0 w-80 bg-red-400 overflow-hidden relative rounded-2xl">
        <img
          src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'
          alt="img"
          className="h-full w-fit object-cover "
        />
        <RighttCardContent/>
      </div>
    </>
  );
};

export default RightCard;
