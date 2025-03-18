interface Props {
  message: string;
  color: string;
}

export default function ColorfulMessage(props: Props) {
  const messageStyle = {
    color: props.color,
    fontSize: '18px',
  };

  return <p style={messageStyle}>{props.message}</p>;
}
