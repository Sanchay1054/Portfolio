import react from 'react';
import styles from '../Styles/Portfolio.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Popup from 'reactjs-popup';
import Tenth from './Tenth';
import Twelth from './Twelth';

const Portfolio = () => {
    return(
        <div>
            <div className={styles.containerprofile}>
                <div className={styles.profile}>
                    <div>
                    <div className={styles.img}>
                        <img src={require('../Components/profile.png')} alt='Image' className={styles.image}/>
                    </div>
                    </div>
                    <div className={styles.profilet}>
                        <div className={styles.profilehead}>Sanchay M</div>
                        Full Stack Developer
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.head}>Languages Known</div>
                <div className={styles.contentt}>
                <div className={styles.languages}>
                    
                    <div className={styles.lang}>
                        <img src={require('../Components/c.png')} className={styles.langimg}/>
                        C
                    </div>
                    <div className={styles.lang}>
                        <img src={require('../Components/c++.png')} className={styles.langimg}/>
                        C++ 
                    </div>
                    <div className={styles.lang}>
                        <img src={require('../Components/java.jpeg')} className={styles.langimg}/>
                        Java 
                    </div>
                    <div className={styles.lang}>
                        <img src={require('../Components/python.png')} className={styles.langimg}/>
                        Python 
                    </div>
                    <div className={styles.lang}>
                        <img src={require('../Components/html.png')} className={styles.langimg}/>
                        HTML
                    </div>
                    <div className={styles.lang}>
                        <img src={require('../Components/js.png')} className={styles.langimg}/>
                        JavaScript
                    </div>
                    <div className={styles.lang}>
                        <img src={require('../Components/php.png')} className={styles.langimg}/>
                        PHP
                    </div>
                </div>
                </div>

                <div className={styles.head}>Frameworks/Libraries Known</div>
                    <div className={styles.contentt}>
                        <div className={styles.languages}>
                        <div className={styles.lang}>
                            <img src={require('../Components/react.png')} className={styles.langimg}/>
                            React
                        </div>
                        <div className={styles.lang}>
                            <img src={require('../Components/express.png')} className={styles.langimg}/>
                            Express
                        </div>
                        <div className={styles.lang}>
                            <img src={require('../Components/springboot.png')} className={styles.langimg}/>
                            Spring Boot
                        </div>
                        <div className={styles.lang}>
                            <img src={require('../Components/react.png')} className={styles.langimg}/>
                            React Native
                        </div>
                        </div>
                    </div>
            </div>
            <div className={styles.percentage}>
            <div className={styles.header}>Education Qualification</div>


                <Popup trigger={
                <div className={styles.percentagebox}>
                    <div className={styles.percent}>91%</div>
                    <p>10<sup>th</sup> Standard<br/>Passed out year: 2020<br/><b>SPK Matriculation Higher Secondary School</b><br/>Kadachanallur<br/>Tiruchengode</p>
                </div>
                } modal nested>{close=>(<Tenth close={close}/>)}</Popup>


                <Popup trigger={
                <div className={styles.percentagebox}>
                    <div className={styles.percent}>95.5%</div>
                    <p>12<sup>th</sup> Standard<br/>Passed out year: 2022<br/><b>SPK Matriculation Higher Secondary School</b><br/>Kadachanallur<br/>Tiruchengode</p>
                </div>
                } modal nested>{close=>(<Twelth close={close}/>)}</Popup>


                <div className={styles.percentagebox1} style={{boxShadow: '0px 0px 5px #00F'}}>
                    <div className={styles.percent}>8.82<code>/10</code></div>
                    <div><p><b>BE - Computer Science and Engineering </b><br/><i>Persuing III<sup>rd</sup> year</i><br/> <b>Kongu Engineering College (Autonomous) <a href="https://kongu.ac.in/" target="_blank"><i className="bi bi-box-arrow-right"></i></a></b><br/>Perundurai<br/>Erode - 638060</p>
                    <div className={styles.row}>GPA: 
                        <div className={styles.gpa}>8.91</div>
                        <div className={styles.gpa}>9.08</div>
                        <div className={styles.gpa}>8.21</div>
                        <div className={styles.gpa}>9.08</div>
                    </div></div>
                </div>

                <div className={styles.header}>Paper Presentations</div>
                <div className={styles.paper}>
                    <div className={styles.paperbg}>
                        <div className={styles.paperbox}>
                            <p>Presented a paper titled <br/><b>Rectification of High Voltage in Fibre Optics</b><br/> in <b>Kongu Engineering College</b> for <b>Science day 2023</b></p>
                        </div>
                    </div>
                    <div className={styles.paperbg}>
                        <div className={styles.paperbox}>
                            <p>Presented a paper titled <br/><b>Rectification of High Voltage in Fibre Optics</b><br/> in <b>Kongu Engineering College</b> for <b>Renaissance 2023 conducted by CSEA</b></p>
                        </div>
                    </div>
                    <div className={styles.paperbg1}>
                        <div className={styles.paperbox}>
                            <p>Presented a paper titled <br/><b>Evolution of Technology in AI</b><br/> in <b>Bannari Amman Institute of Technology</b> for <b>INSIGHTX</b></p>
                        </div>
                    </div>
                </div>

                <div className={styles.achievement}>
                    <div className={styles.achievementhead}>Achievements</div>
                    <div className={styles.paper}>
                        <div style={{maxWidth:'450px'}}>
                            <div className={styles.header}>Technical</div>
                            <div style={{padding: '10px'}}>
                                <ol style={{listStyleType: '1'}}>
                                    <li><b>Granted fund of Rs.25,000 for GRAND TOMATO CHALLENGE counducted by the Ministry of Education | Government of India</b></li><br/>
                                    <li>Developed and hosted a website for <a href="https://icamac.kongu.edu/" target="_blank"><b>International Conference on Applied Mathematics And Computing (ICAMAC2025)</b></a>, Department of Mathematics, Kongu Engineering College, Perundurai, Erode - 638060</li><br/>
                                    <li>Executive Member in Science Club, KEC in I<sup>st</sup> year</li><br/>
                                    <li>Won III<sup>rd</sup> place in Exodia Coding Contest 2022</li><br/>
                                    <li><b>Executive Member</b> (2023) and <b>Multimedia Head</b> in <b>Gender Equality Club, KEC</b></li><br/>
                                    <li>Selected for Internal Level Smart India Hackathon 2023 at KEC for the project <b>Tomatix</b></li><br/>
                                    <li>Selected for Internal Level Smart India Hackathon 2024 at KEC for the project <b>VocalVista</b></li><br/>
                                </ol>
                            </div>
                        </div>
                        <div style={{maxWidth:'450px'}}>
                            <div className={styles.header}>Non - Technical</div>
                            <div style={{padding: '10px'}}>
                                <ol style={{listStyleType: '1'}}>
                                    <li>Won I<sup>st</sup> place in <b>Group Instrumental</b> in <b>Enthusia 2k23</b></li><br/>
                                    <li>Won I<sup>st</sup> place in <b>Unique Talent (Group Intrumental)</b> in <b>SNS College</b>, Coimbatore</li><br/>
                                    <li>Won I<sup>st</sup> place in <b>Solo Instrumental</b> in <b>Enthusia 2k24</b></li><br/>
                                    <li>Won II<sup>st</sup> place in <b>Group Instrumental</b> in <b>Enthusia 2k24</b></li><br/>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.header}>Internship</div>
                <div className={styles.intern}>
                    <img src={require('../Components/Dr. Syringe.png')} className={styles.internimg}/>
                    <p style={{padding: '10px'}}>
                        Successfully completed an <b>Offline Internship</b> in <b>Dr. Syringe</b> for 3 months.<br/>
                        <b>Role:</b> Backend Developer and Full stack Coordinator<br/><br/>
                        <b>Tech Stacks</b><br/>
                        Java, Spring Boot, React + TypeScript and SQL<br/><br/>
                        <b>Team Leader</b> for the month of May 2024
                    </p>
                </div>
            </div>

            <div className={styles.projectbg}>
                <div className={styles.header}>Projects</div>
                <div className={styles.project}>
                    <a href=""><img src={require('../Components/tomatix.png')} className={styles.projectimgleft} /> <i className="bi bi-box-arrow-right"></i></a>
                    <div>
                    <div className={styles.projectt}><b>TOMATIX</b><br/><br/>The mobile application facilitates the dissemination of information and establishes an interface connecting growers, nurseries, producers, traders, and other stakeholders
                    </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div>
                    <div className={styles.projectt1}><b>VOCALVISTA</b><br/>The Digitized Speech Language Therapy Management System (SLTMS) and transforming the workflow of speech-language
                    </div>
                    </div>
                    <img src={require('../Components/VocalVista.png')} className={styles.projectimgright} />
                </div>
                <div className={styles.project}>
                    <img src={require('../Components/ICAMAC2025.png')} className={styles.projectimgleft} />
                    <div className={styles.projectt}><b>ICAMAC2025</b><br/><br/>Website developed for the Department of Mathematics for an International Conference on Applied Mathemetics and Computing. Interested candidates can register for the conference</div>
                </div>
                <div className={styles.col}>
                    <div>
                    <div className={styles.projectt1}><b>STUDY SMART</b><br/>A platform for the students to recall the theoritical concepts. Integrated with Gemini AI for the validation of the answers given by the student. It can validate the answers from the Q/A provided by them
                    </div>
                    </div>
                    <img src={require('../Components/studysmart.png')} className={styles.projectimgright} />
                </div>
                <div className={styles.project}>
                    <img src={require('../Components/clientui.png')} className={styles.projectimgleft} />
                    <div className={styles.projectt}><b>CLIENT UI</b><br/><br/>Developed as Mini Project for the company <b>ClimetaVerse</b>. It enables the clients of the registered company (managed by Admin UI) to access the <b>CHATBOT service</b> provided fir the client.</div>
                </div>
                <div className={styles.col}>
                    <div>
                    <div className={styles.projectt1}><b>CLASSICAL MUSIC COMPOSER</b><br/>This software can able to produce music with different instruments like <b>Violin, Flute, Strings and Piano</b>. The composer can just type the Swram and it will generate the music
                    </div>
                    </div>
                    <img src={require('../Components/music.png')} className={styles.projectimgright} />
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Portfolio;