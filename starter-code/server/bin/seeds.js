/*jshint esversion:6*/
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/journal-development');
const JournalEntries =require('../models/journal-entry');

const journalEntriesData = [
  { date: new Date(),  
    title: "article 1",
   content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
 },
 { date: new Date(),
   title: "article 2",
  content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
{ date: new Date(),
  title: "article 3",
 content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
{ date: new Date(),
  title: "article 4",
 content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
{ date: new Date(),
  title: "article 5",
 content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
{ date: new Date(),
  title: "article 6",
 content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
{ date: new Date(),
  title: "article 7",
 content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
{ date: new Date(),
  title: "article 8",
 content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
{ date: new Date(),
  title: "article 9",
 content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
{ date: new Date(),
  title: "article 10",
 content: "Nam vitae porttitor magna. Duis tincidunt massa mauris, non varius nisl interdum eget. Nunc diam est, pretium eget maximus euismod, venenatis at elit. Sed vel mauris consectetur, convallis nunc vel, sodales ligula. Fusce malesuada porta nibh, et blandit nunc placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent diam eros, cursus facilisis ipsum id, malesuada pretium libero."
},
];


JournalEntries.create(journalEntriesData, (err, docs) => {
  if (err) { throw err; }
  docs.forEach((doc) => {
    console.log(doc.title);
  });
  mongoose.connection.close();
});
