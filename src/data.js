export const navigationItems = [
  {
    class: "fa-solid fa-house",
    name: "Home",
  },
  {
    class: "fa-solid fa-hashtag",
    name: "Explore",
  },
  {
    class: "fa-regular fa-bell",
    name: "Notifications",
  },
  {
    class: "fa-regular fa-message",
    name: "Messages",
  },
  {
    class: "fa-regular fa-bookmark",
    name: "Bookmarks",
  },
  {
    class: "fa-regular fa-list-ul",
    name: "Lists",
  },
  {
    class: "fa-regular fa-user",
    name: "Profile",
  },
  {
    class: "fa-regular fa-ellipsis",
    name: "More",
  },
];

export function addAnalytics(data) {
  return data.map((item) => {
    item.analytics = {
      comment: Math.floor(Math.random() * 100),
      reTweet: Math.floor(Math.random() * 100),
      like: Math.floor(Math.random() * 100),
    };
    return item;
  });
}
