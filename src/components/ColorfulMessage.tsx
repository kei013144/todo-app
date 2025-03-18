interface Props {
  color: string;
  children?: React.ReactNode;
}

export default function ColorfulMessage(props: Props) {
  const messageStyle = {
    color: props.color,
    fontSize: '18px',
  };

  return <p style={messageStyle}>{props.children}</p>;
}
