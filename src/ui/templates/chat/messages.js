module.exports = [
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: 'Yes, and I use Gifted Chat!',
    //   createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    //   user: {
    //     _id: 1,
    //     name: 'Developer',
    //   },
    //   sent: true,
    //   received: true,
    //   // location: {
    //   //   latitude: 48.864601,
    //   //   longitude: 2.398704
    //   // },
    // },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Hello. Can you say some thing with me ?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Funny',
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Crazy App.",
      createdAt: new Date(),
      system: true,
    },
  ];