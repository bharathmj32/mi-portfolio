import { v4 as uuidv4 } from 'uuid';
import cricket from '../images/cricket.png';
import lms from '../images/lms.png';
import kiplay from '../images/kiplay.png';
import socialdistance from '../images/socialdistance.png';


const projects = [
  {
    id: uuidv4(),
    name: 'Cricket Database Management',
    desc:
      'A website where users can view various cricket stats of players and teams. Admin can login, add players, schedule matches and also update live scores. ',
    img: cricket,
  },
  {
    id: uuidv4(),
    name: 'Social Distancing App',
    desc:
      'Social distancing among people is a must during pandemic. The well designated App is built to ensure social distancing with the help of Bluetooth enabled API’s used in the Phone',
    img: socialdistance,
  },
  {
    id: uuidv4(),
    name: 'Kids Learning App',
    desc:
      '\'Kiplay: Kids learning app\' is a mobile application focused on teaching kids various necessary topics like alphabets, numbers, rhymes etc in a fun and interactive way.',
    img: kiplay,
  },
  {
    id: uuidv4(),
    name: "Leave Management System",
    desc:
      'A website where students as well as teachers of various departments can login and apply for leave and the higher authorities of that department approve or disapprove leave.',
    img: lms,
  },
];

export default projects;
