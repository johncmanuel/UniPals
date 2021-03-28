import React from "react";
import { Comment, Image } from "semantic-ui-react";
import CreateComment from "./CreateComment";

// if reply, add another if statement
// reply will be a boolean
// I'm sure there's other ways to approach this.
// function _Comments(props) {
//   // const didReply = props.replied
//   const author = props.name + " " + props.surname;
//   const avatarUrl = `https://ui-avatars.com/api/?background=random&name=${props.name}+${props.surname}`;

//   // if (props.replied) {
//   //   return (

//   //   );
//   // }

//   if (props.image === undefined) {
//     return (
//       <Comment>
//         <Comment.Avatar as="a" src={avatarUrl} />
//         <Comment.Content>
//           <Comment.Author as="a">{author}</Comment.Author>
//           <Comment.Metadata>
//             <span>{props.timeStamp}</span>
//           </Comment.Metadata>
//           <Comment.Text>{props.text}</Comment.Text>
//           <Comment.Actions>
//             <a>Reply</a>
//           </Comment.Actions>
//         </Comment.Content>
//       </Comment>
//     );
//   }
//   return (
//     <Comment>
//       <Comment.Avatar as="a" src={props.image} />
//       <Comment.Content>
//         <Comment.Author as="a">{author}</Comment.Author>
//         <Comment.Metadata>
//           <span>{props.timeStamp}</span>
//         </Comment.Metadata>
//         <Comment.Text>{props.text}</Comment.Text>
//         <Comment.Actions>
//           <a>Reply</a>
//         </Comment.Actions>
//       </Comment.Content>
//     </Comment>
//   );
// }

const dummyData = [
  {
    avatar: "https://ui-avatars.com/api/?background=random&name=Mike+Woz",
    name: "Mike Woz",
    metadata: "Today at 3:46 PM",
    text:
      "Hey guys, just passed my first business calculus exam. Was actually pretty hard, ngl.",
    replies: [
      {
        avatar:
          "https://ui-avatars.com/api/?background=random&name=Cadi+Shannon",
        name: "Cadi Shannon",
        metadata: "Today at 3:47 PM",
        text:
          "Congrats! I could never learn to like math, it's just not my thing haha.",
        replies: [
          {
            avatar:
              "https://ui-avatars.com/api/?background=random&name=Mike+Woz",
            name: "Mike Woz",
            metadata: "Today at 3:47 PM",
            text: "Thanks! And yeah, I do feel the same.",
            // Apparently JavaScript throws a fit when there isn't a replies
            // item once I pass this into <CreateComment>. Not sure if there's
            // way to omit this without JavaScript catching this.
            replies: [],
          },
        ],
      },
    ],
  },
  {
    avatar: "https://ui-avatars.com/api/?background=random&name=Bob+Schneider",
    name: "Bob Schneider",
    metadata: "Today at 8:36 AM",
    image:
      "https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg",
    text: "Rate my setup!",
    replies: [
      {
        avatar:
          "https://ui-avatars.com/api/?background=random&name=Anaiya+Hope",
        name: "Anaiya Hope",
        metadata: "Today at 9:12 AM",
        image:
          "https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg",
        text: "Looks really good! So simple and minimalistic!",
        replies: [],
      },
    ],
  },
  {
    avatar: "https://ui-avatars.com/api/?background=random&name=Rick+Sanchez",
    name: "Rick Sanchez",
    metadata: "Yesterday at 9:40 PM",
    text: "Anyone going to buy Dogecoins? I might.",
    replies: [
      {
        avatar:
          "https://ui-avatars.com/api/?background=random&name=Anaiya+Hope",
        name: "Anaiya Hope",
        metadata: "Yesterday at 10:02 PM",
        image:
          "https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg",
        text:
          "Most likely. Their prices are increasing by the minute. I think it's best to buy them ASAP.",
        replies: [],
      },
      {
        avatar:
          "https://ui-avatars.com/api/?background=random&name=Bob+Schneider",
        name: "Bob Schneider",
        metadata: "Yesterday at 9:40 PM",
        text: "Yes yes!",
        replies: [],
      },
      {
        avatar:
          "https://ui-avatars.com/api/?background=random&name=Cadi+Shannon",
        name: "Cadi Shannon",
        metadata: "Yesterday at 10:012 PM",
        text: "I will! Definitely putting some of my money into that.",
        replies: [],
      },
    ],
  },
];

function Comments() {
  return (
    <Comment.Group minimal>
      {dummyData.map((component, key) => (
        <CreateComment
          key={key}
          avatar={component.avatar}
          name={component.name}
          metadata={component.metadata}
          image={component.image}
          text={component.text}
          replies={component.replies}
        />
      ))}
    </Comment.Group>
  );
}

export default Comments;
