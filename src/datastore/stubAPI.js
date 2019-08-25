//not used, probably ok to delete
import _ from "lodash";

class StubAPI {
  constructor() {
    this.locations = [
      {
        id: 1,
        name: "Honshu",
        description: "Main island",
        author: "Joseph Kelly",
        region: "east",
        upvotes: 10
      },
      {
        id: 2,
        name: "Okinawa",
        description: "Tropical military base",
        author: "Eri Nishida",
        region: "west",
        upvotes: 14
      },
      {
        id: 3,
        name: "Hokkaido",
        description: "very cold",
        author: "Toni Ann",
        region: "north",
        upvotes: 12
      },
      {
        id: 4,
        name: "Yakushima",
        description: "Ghibli esque",
        author: "unknown",
        region: "south",
        upvotes: 2
      }
    ];
  }

  getAll() {
    return this.locations;
  }

  add(title, author, link) {
    let id = 1;
    let last = _.last(this.locations);
    if (last) {
      id = last.id + 1;
    }
    let len = this.locations.length;
    let newLen = this.locations.push({
      id,
      title,
      author,
      link,
      comments: [],
      upvotes: 0
    });
    return newLen > len;
  }

  upvote(id) {
    let index = _.findIndex(this.locations, location => location.id === id);
    if (index !== -1) {
      this.locations[index].upvotes += 1;
      return true;
    }
    return false;
  }

  getLocation(id) {
    let index = _.findIndex(this.locations, location => location.id === id);
    let result = index !== -1 ? this.location[index] : null;
    return result;
  }

  addComment(locationId, c, n) {
    let location = this.getLocation(locationId);
    let id = 1;
    let last = _.last(location.comments);
    if (last) {
      id = last.id + 1;
    }
    location.comments.push({ id: id, comment: c, author: n, upvotes: 0 });
  }

  upvoteComment(locationId, commentId) {
    let location = this.getLocation(locationId);
    let index = _.findIndex(location.comments, c => c.id === commentId);
    if (index !== -1) {
      location.comments[index].upvotes += 1;
    }
  }
}

export default new StubAPI();
