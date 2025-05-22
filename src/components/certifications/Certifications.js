import React, { useState } from 'react';
import './certifications.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX,HiOutlineShieldCheck  } from 'react-icons/hi';

const Certifications = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Certifications</h2>
            <span className="section__subtitle">Tech Certs!</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">Web<br />Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Developer</h3>
                            <p className="services__modal-description">
                                Full-stack certified developer with expertise in front-end and back-end, eager to apply my skills.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Web page development
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Integrate creative colloboration
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Provide product mockups
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">UI/UX<br />Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Designer</h3>
                            <p className="services__modal-description">
                                UI/UX design providing quality work.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Create a user friendly interface
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Develop with a minimal approach
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Design with accessibility in mind
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">Machine Learning Practitioner</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">ML Analyst</h3>
                            <p className="services__modal-description">
                                ML Analyst specializing in applying algorithms to data for insights.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Understand and apply key techniques
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Implement models to generate insights
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Solve problems with machine learning projects
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className="services__content">
                    <div>
                        <HiOutlineShieldCheck className="services__icon" />
                        <h3 className="services__title">Cybersecurity Fundamentals</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(4)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Cybersecurity Analyst</h3>
                            <p className="services__modal-description">
                                Trained in fundamental cybersecurity principles and best practices.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Learned core concepts: threats, vulnerabilities, and protection methods
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Understood network security and risk management best practices
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Explored real-world applications of cybersecurity principles
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Certifications;