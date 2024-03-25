import './App.css';
import { ReactComponent as Photo } from './Atharva.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Alert from '@mui/material/Alert';
import AnimatedText from './AnimatedText';
import { Block } from '@mui/icons-material';

function App() {
  return (
    <div className="container">
      <div className="left-column">
        <a className="iconAHref" href='/'><h1 style={{ marginBottom: 0 }}>Atharva Kashyap</h1>
          <p style={{ marginTop: 0, marginBottom: 0 }} className="tooltip" data-alt="Kannada / Hindi">ಅಥರ್ವ ಕಶ್ಯಪ್ / अथर्व कश्यप्</p></a>
        <p style={{ marginTop: 0 }}><strong>Pronouns:</strong> He/Him</p>
        <Photo className='photo tooltip' data-alt="Photo of Atharva Kashyap" />
        <div className='links'>
          <p><a className="iconAHref tooltip contact" data-alt="atharva2@uw.edu" href='mailto:atharva2@uw.edu'>Email Me!</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faEnvelope} size="lg" /></p>
          <p><a className="iconAHref tooltip contact" data-alt="github.com/atharva-kashyap/" href='https://www.github.com/atharva-kashyap/'>GitHub</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faGithub} size="lg" /></p>
          <p><a className="iconAHref contact" href='https://www.https://scholar.google.com/citations?user=JCoq_vAAAAAJ&hl=en&oi=ao.com/atharva-kashyap/'>Google Scholar</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faGraduationCap} size="lg" /></p>
          <p><a className="iconAHref tooltip contact" data-alt="linkedin.com/in/atharva-kashyap/" href='https://www.linkedin.com/in/atharva-kashyap/'>LinkedIn</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faLinkedin} size="lg" /></p>
          <p><a className="iconAHref contact" href='https://drive.google.com/file/d/1ECaCapx7_ZF_z1mGyR656TcuoX6DbFmi/view?usp=sharing' target="_blank">1-page Resume</a> / <a className="iconAHref contact" href='https://drive.google.com/file/d/1jPm_Et-cJICGZ2u_ttCNznor17O_dTZx/view?usp=sharing' target="_blank">CV</a>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icon" icon={faFile} size="lg" /></p>
        </div>
      </div>

      <div className="right-column">
        <AnimatedText />
        <p>I am an incoming first-year <strong>___</strong> Ph.D. student at ___, advised by Prof. ___ and graciously supported by ___. My research interests broadly lie in Human-Robot Interaction, Assistive Robotics, and Robot Learning.</p>

        <p>I completed my bachelor's degree in <strong>Computer Science</strong> from the <a href="https://www.cs.washington.edu/">Paul G. Allen School of Computer Science & Engineering</a> at the <a href='http://www.washington.edu/'>University of Washington</a>, Seattle. I also minored in <strong>Applied Mathematics</strong> and <strong>Education, Learning & Societies</strong>.</p>

        <h2>Research</h2>
        <p>Previously, I was a research assistant at UW's <a href='https://personalrobotics.cs.washington.edu/'>Personal Robotics Lab</a>, under the mentorship of Prof. <a href="https://goodrobot.ai/">Siddhartha Srinivasa</a>, PostDoc <a href="https://www.taylorkesslerfaulkner.com/">Taylor Kessler Faulkner</a>, and Ph.D. student <a href="https://amalnanavati.com/">Amal Nanavati</a>. I conducted Robot-Assisted Feeding research using the Assistive Dextrous Arm (ADA) robot.</p>

        {/* <p>I am currently working on Robot-Assisted Feeding research using the Assistive Dextrous Arm robot. Past work on this system has primarily focused on making it functional (for instance, picking up variety of food items, moving the food item to the user's mouth, etc.). As part of a User Study (Paper XXX) conducted by deploying the system at a user's home for a week, it was crucial to have an accessible interface that users can use to interact with the robot.</p> */}

        <p>As part of the system's week-long deployment at a user's home, it was crucial to have an accessible interface for the user to interact with the robot. I designed the overall state machine and implemented the first version of the app [<a href='https://github.com/personalrobotics/feeding_web_interface'>GitHub</a>, <a href='https://github.com/personalrobotics/feeding_web_interface/tree/main/feedingwebapp#overview'>Overview</a>], which interspersed asking for user input (e.g., what bite users want) with displaying the current state of the robot (e.g., robot is attempting to acquire bite). Several of these components required running smaller user studies. For instance, we were unsure how users would want to specify to the robot which piece of food they want – would they want to be shown a picture of the plate and click on their desired food, or would they want labels of the food items (e.g., “strawberry”, “salad”) to pick from? [<a href='https://drive.google.com/file/d/18S-5EefBi_lWHtQcQSPkr3Nc1qD13SbC/view?usp=sharing' target="_blank">Poster</a>, May 2023]</p>

        <p>In addition, currently, a user has to manually confirm the presence of food on the fork, which can be cumbersome to some users. I worked to develop an automatic Food on Fork (FoF) algorithm to confirm the presence of food on the fork. </p>
        <p>[<a href='https://dl.acm.org/doi/10.1145/3610978.3641085'>HRI 2024 Demo Paper</a>][<a href='https://github.com/personalrobotics/ada_feeding'>GitHub</a>][<a href='https://www.geekwire.com/2023/uw-computer-science-research-event-offers-a-glimpse-of-the-future-at-the-dawn-of-ai/'>GeekWire News</a>, <a href='https://news.cs.washington.edu/2023/11/21/theres-so-much-great-research-here-the-case-for-open-language-models-and-other-food-for-thought-from-the-allen-schools-2023-research-showcase/'>UW CSE Blog</a>]</p>

        <h2>Teaching</h2>
        <p>I served as a Lead Teaching Assistant (TA) for the Allen School's Introductory Programming (CSE 12x) classes. More specifically, each quarter, I conducted 2-times weekly Quiz sections, covering topics in data types, conditionals, methods, data structures (lists, dictionaries, sets, trees), object-oriented programming, recursion, and run-time analysis. In addition, I evaluated and provided constructive feedback on student work. I also authored several practice questions, created practice finals, wrote JUnit tests for autograding, and recorded walkthrough videos for several topics. As a lead TA, I also supported a team of 35+ TAs and the instructor by creating agendas and teaching resources to help teach section. Instructors I worked with and was mentored by included Prof. <a href='https://homes.cs.washington.edu/~mnats/'>Miya Natsuhara</a>, Prof. Elba Garza, and Melissa Lin.</p>

        <h2>Industry</h2>
        <p>I served as the VP of Engineering for a local startup, <a href='https://arcsecurity.co/'>Arc Security</a>. I oversaw a team of 4 developers, managed timelines, and conducted testing. I helped develop a product that consisted of mobile and web applications to foster safety for real estate agents. The mobile app enabled agents to track their safety during on-site visits and the web app enabled managers to track agent safety.</p>

        <p>During Summer 2022, I worked as a Software Development Engineering Intern (under mentorship of Prof. <a href='https://www.mayacakmak.io/home'>Maya Cakmak</a>) on the Amazon Robotics Manipulation Project (at UW + Amazon Science Hub). I developed a web application to conduct evaluations. An evaluation entailed scanning and stowing Amazon products into bins and then allowing the robot to pick specified items from the bins. The web application served to display various bin metrics for users to track the progress of the evaluation. [<a href='https://github.com/au-rmr/aurmr_inventory'>GitHub</a>]</p>
      </div>
    </div>
  );
}

export default App;
