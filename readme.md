## NVD3 Statistics Demo for Meteor
Statistics demo for the Clinical Meteor distro, utilizing Meteor (Blaze, Node, Mongo) and NVD3 graphing library.  The graphs are database driven; so if you edit entries in the database, they'll automatically update in the user interface!

![Multibar Screenshot](https://raw.githubusercontent.com/clinical-meteor/nvd3-statistics-meteor-blaze/master/public/multibar-screenshot.png)


=====================================================
#### Installation  

```sh
git clone https://github.com/clinical-meteor/nvd3-statistics-meteor-blaze
cd nvd3-statistics-meteor-blaze
meteor
```

=====================================================
#### Connecting to an External Database  

```sh
MONGO_URL=mongodb://server:port/database meteor
```

=====================================================
#### Database Schemas  

When you startup the app, a number of collections will be initialized in a Mongo database, and publications/subscriptions will be created to send the data to the client.

![Database Screenshot](https://raw.githubusercontent.com/clinical-meteor/nvd3-statistics-meteor-blaze/master/public/database-screenshot.png)

Most of the graphs simply need a collection of `{x,y}` coordinate pairs to display correctly.  Some of them will be looking for additional information, such as shape, series, color, timestamp, etc.

```js
// Graphs.CumulativeLineChart
{
  0: {
    type: String
  },
  1: {
    type: Double
  }
}

// Graphs.HorizontalBarChart
{
  x: {
    type: Number
  },
  y: {
    type: Number
  },
  label: {
    type: String
  },
  series: {
    type: String
  }
}

// Graphs.LineChart
{
  x: {
    type: Number
  },
  y: {
    type: Number
  }
}

// Graphs.MultiBarChart
{
  x: {
    type: Number
  },
  y: {
    type: Number
  },
  shape: {
    type: String
  }
}

// Graphs.RandomData
{
  x: {
    type: Number
  },
  y: {
    type: Number
  },
  size: {
    type: String
  },
  shape: {
    type: String
  },
  timestamp: {
    type: Date
  }
}

// Graphs.ScatterPlot
{
  x: {
    type: Number
  },
  y: {
    type: Number
  },
  size: {
    type: String
  },
  shape: {
    type: String
  }
}

// Graphs.SimpleLineChart
{
  x: {
    type: Number
  },
  y: {
    type: Number
  }
}

// Graphs.Stream
{
  0: {
    type: String
  },
  1: {
    type: Double
  }
}


// Graphs.ViewFinder
{
  x: {
    type: Number
  },
  y: {
    type: Number
  }
}
```


=====================================================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
