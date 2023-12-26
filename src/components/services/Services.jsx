import React, { useState } from "react";
import "./services.css";

import projectImage1 from "../../assets/Me/project1.png";
import projectImage2 from "../../assets/Me/project2.png";
import projectImage3 from "../../assets/Me/project3.png";
import projectImage4 from "../../assets/Me/project4.png";

const Services = () => {
  const githubRepoUrl = "https://github.com/your-username/your-repo-name";

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle_special">
        Excited to see more? Checkout my Github 😉
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <img
              src={projectImage1}
              alt="Détection d'anomalies"
              className="services__image"
            />{" "}
            <h3 className="services__title">
              Movie Reviews Classifer
              <br />
              
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
              Movie Reviews Classifer
              </h3>
              <p className="services__modal-description grid">
                Modèle de classification capable de détecter les commentaires positifs et les commentaires négatifs
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Transformation de milliers de fichier note en base de données
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Traitement des données textuelles (Lemmatisation, Tokenisation etVectorisation)
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Entrainement de modèles ML
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Python, Scikit-Learn, SVM, Random Forest, Logistic Regression, Naive Bayes
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href="https://github.com/ZZAKARIAE/Movie-Review-Classifer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img
              src={projectImage2}
              alt="Détection d'anomalies"
              className="services__image"
            />{" "}
            <h3 className="services__title">
              Brain Tumors <br />
              Detection
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Brain Tumors Detection
              </h3>
              <p className="services__modal-description grid">
                Projet de detection des tumeurs du cerveau à partir d'image IRM du crâne humain
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Réseau de neurones convolutifs (CNN) visant à déterminer la présence de tumeurs sur des
                    images IRM.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    {" "}
                    Optimisation des hyper-paramètres du modèle
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Python, TensorFlow, Keras
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href="https://github.com/ZZAKARIAE/Brain-Tumor-Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img
              src={projectImage3}
              alt="Détection d'anomalies"
              className="services__image"
            />{" "}
            <h3 className="services__title">
              Data mining bank reviews
              <br />
        
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                   Data mining bank reviews
              </h3>
              <p className="services__modal-description grid">
                Mise en œuvre d’un système d'extraction et de classification des retours des clients des banques. 
                Visualisation du taux de clients mécontents par ville.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Python, Machine Learning, scikit-learn, Data mining, data visualisation
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href="https://github.com/ZZAKARIAE/Data_mining_bank_reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img
              src={projectImage4}
              alt="Détection d'anomalies"
              className="services__image"
            />{" "}
            <h3 className="services__title">
              Détection des supermarchés utilisant le système de Display
              <br />
        
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
              Détection des supermarchés utilisant le système de Display
              </h3>
              <p className="services__modal-description grid">
                Mise en œuvre d’un modèle Random Forest capable de détecter les enseignes qui utilisent un système de display pour la mise en oeuvre de leur produits.
              </p>
              <ul className="services__modal-services grid">

              <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Discrétisation des variables quantitatives continues
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Encodage des variables catégorielles
                  </p>
                </li>


                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Python, Random Forest, Clustring supervisé, Arbres de décision
                  </p>
                </li>

                <li className="services__modal-service">
                  <a
                    href="https://github.com/ZZAKARIAE/Display_ENSEIGNE_PEDICTION"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="services__modal-info">
                      Project's GitHub repository
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
