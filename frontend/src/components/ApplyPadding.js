export default function ApplyPadding(props) {
  if (props.paddingTop === undefined) {
    return <div style={{ paddingTop: "20vh" }}></div>;
  }
  return <div style={{ paddingTop: props.paddingTop }}></div>;
}
