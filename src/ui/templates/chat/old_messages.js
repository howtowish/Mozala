module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text:
        "can you talk to me ?",
      createdAt: new Date(Date.UTC(2019, 1, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: "Developer"
      }
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Hello !",
      createdAt: new Date(Date.UTC(2019, 1, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: "Developer"
      }
    },
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: "This is a system message.",
    //   createdAt: new Date(Date.UTC(2019, 7, 30, 17, 20, 0)),
    //   system: true
    // }
  ];