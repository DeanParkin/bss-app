import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Associates from "../components/Associates";

export default function Footer() {
  const router = useRouter();
  let url = `${router.asPath}`;

  const shareData = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Bevington Security Solutions`,
          text: `Bevington Security Solutions`,
          url: `${url}`,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const socialIcons = [
    {
      name: "facebook link",
      href: "https://www.facebook.com/BevingtonSolutions",
      faIcon: faFacebook,
      key: 321,
    },
    {
      name: "instagram link",
      href: "https://www.instagram.com/bevingtonsecuritysolutions/",
      faIcon: faInstagramSquare,
      key: 322,
    },
  ];

  return (
    <>
      <footer className="mt-3">
        <Associates />
        <div className="social-container border-top border-primary">
          <div className="container d-flex justify-content-around fs-3 align-items-center py-4">
            {socialIcons.map((icon, key) => {
              return (
                <React.Fragment key={key}>
                  <a
                    href={icon.href}
                    target="_blank"
                    className="social-link"
                    rel="noopener noreferrer"
                    aria-label={icon.name}
                  >
                    <FontAwesomeIcon
                      icon={icon.faIcon}
                      className="social-icon"
                      size="sm"
                    ></FontAwesomeIcon>
                  </a>
                </React.Fragment>
              );
            })}
            <div
              onClick={() => {
                shareData();
              }}
              className="social-link"
            >
              <FontAwesomeIcon
                icon={faShareNodes}
                className="social-icon"
                size="sm"
                aria-label="Page Share Link"
              />
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <div className="container">
            <div className="copyright-container justify-content-center text-center fs-6">
              <p className="copyright mb-1">
                <span className="text-light">
                  &copy; {new Date().getFullYear()} Bevington Security
                  Solutions. ALL RIGHTS RESERVED.
                </span>
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-policy-link px-3 mb-3"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-policy-link mb-3"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-center text-light pb-4">
                Website developed by <a href="#">Plan;D</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
