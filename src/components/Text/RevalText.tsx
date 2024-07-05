import { useScramble } from "use-scramble";

type Props = {
  text: string;
  speed?: number;
  className?: string;
};

const RevalText = (props: Props) => {
  const { ref, replay } = useScramble({
    text: props.text,
    speed: props.speed ? props.speed : 0.5,
    range: [65, 122],
    ignore: ["\\", "!", "[", "]", "^"],
    tick: 1,
    step: 1,
    scramble: 2,
    seed: 1,
    chance: 1,
    overdrive: false,
    // overflow: false,
  });

  return (
    <span
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
      className={props.className}
    />
  );
};

export default RevalText;
