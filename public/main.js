import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import htmlStructure from '../components/htmlStructures';
import header from '../components/header';
import startSortingBtn from '../components/sortingButton';
import { events } from '../utils/sample_data/studentData';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
