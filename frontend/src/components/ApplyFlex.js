export default function ApplyFlex(props) {
  return <div style={{ flex: 1, overflow: "auto" }}>{props.children}</div>;
}
