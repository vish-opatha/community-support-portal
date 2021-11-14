const db = require('../config/connection');
// const { School, Class, Professor } = require('../models');
const { User, ServiceCategory, ServiceProvided } = require('../models');
const userData = require('./userData.json');
const categoryData = require('./serviceCategoryData.json');
const serviceData = require('./serviceData.json');
// const schoolData = require('./schoolData.json');
// const classData = require('./classData.json');
// const professorData = require('./professorData.json');

db.once('open', async () => {
  // clean database
  // await School.deleteMany({});
  // await Class.deleteMany({});
  // await Professor.deleteMany({});
  await User.deleteMany({});
  await ServiceCategory.deleteMany({});

  const users = await User.insertMany(userData);
 const categories = await ServiceCategory.insertMany(categoryData);
  const services = await ServiceProvided.insertMany(serviceData);

  // bulk create each model
  // const schools = await School.insertMany(schoolData);
  // const classes = await Class.insertMany(classData);
  // const professors = await Professor.insertMany(professorData);

  // for (newClass of classes) {
  //   // randomly add each class to a school
  //   const tempSchool = schools[Math.floor(Math.random() * schools.length)];
  //   tempSchool.classes.push(newClass._id);
  //   await tempSchool.save();

  //   // randomly add a professor to each class
  //   const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
  //   newClass.professor = tempProfessor._id;
  //   await newClass.save();

  //   // reference class on professor model, too
  //   tempProfessor.classes.push(newClass._id);
  //   await tempProfessor.save();
  // }

  console.log('all done!');
  process.exit(0);
});
