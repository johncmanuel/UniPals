import FriendCard from "./FriendCard";

export default function CreateFriendCard(list, FriendData) {
  for (let i = 0; i < FriendData.length; i++) {
    let elem = FriendData[i];
    list.push(
      <FriendCard
        key={i}
        name={elem["name"]}
        surname={elem["surname"]}
        meta={elem["meta"]}
        description={elem["description"]}
      />
    );
  }
}
