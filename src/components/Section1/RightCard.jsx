
import RighttCardContent from "./RighttCardContent";

const RightCard = (props) => {
  return (
    <>
      <div className="h-full shrink-0 w-100  overflow-hidden relative rounded-2xl">
        <img
          src={props.img}  alt="img"
          className="h-full w-fit rounded-2xl object-cover "
        />
        <RighttCardContent id={props.id} tag={props.tag} />
      </div>
    </>
  );
};

export default RightCard;
