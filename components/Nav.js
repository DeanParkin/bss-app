import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import logo from "../public/imgs/anchor-nav-logo-small.png";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// TODO - add the navbar links
// TODO - add the navbar logo

export default function Nav({ children }) {
  const route = useRouter().route.slice(1);
  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);

  let home =
    route == ""
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };

  let drinks =
    route == "drinks"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let events =
    route == "events"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let contact =
    route == "contact"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let gallery =
    route == "gallery"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let giftvoucher =
    route == "giftvoucher"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };

  useEffect(() => {
    let navLinks = document.querySelectorAll(".nav-link");
    let size = window.innerWidth;
    document.onload = () => {
      setAttr();
    };

    function setAttr() {
      if (size > 992) {
        navLinks.forEach((link) => {
          link.removeAttribute("data-bs-toggle");
          link.removeAttribute("data-bs-target");
        });
      } else {
        navLinks.forEach((link) => {
          link.setAttribute("data-bs-toggle", "collapse");
          link.setAttribute("data-bs-target", "#navbarToggler");
        });
      }
    }

    const updateWindowDimensions = () => {
      size = window.innerWidth;
    };
    window.addEventListener("resize", () => {
      updateWindowDimensions();
      setAttr();
    });

    setAttr();
  }, []);

  const toggleClick = () => {
    //Set new Nav State
    setNavOpen(navOpen ? false : true);

    //Add and remove cross class
    if (navOpen == true) {
      document.querySelector(".nav-icon").classList.remove("x");
    } else {
      document.querySelector(".nav-icon").classList.add("x");
    }
  };

  const linkClick = (e) => {
    e.preventDefault();
    router.push(e.target.href);
    document.querySelector(".nav-icon").classList.remove("x");
    setNavOpen(false);
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <div className="me-2" style={{ height: "60px" }}>
            <h1 className="m-0">
              <span hidden={true}>The Anchor Digbeth, Birmingham</span>
            </h1>
            <Link href="/">
              <div style={{ width: "60px", height: "60px" }}>
                <Image
                  src={logo}
                  alt="The Anchor Digbeth"
                  width={120}
                  height={120}
                  className="navbar-brand"
                  priority={true}
                />
              </div>
            </Link>
          </div>
          <button
            id="toggleBtn"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleClick}
          >
            <div className="nav-icon">
              <div></div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item me-2">
                <Link href="/">
                  <a
                    className={home.class}
                    onClick={linkClick}
                    //aria-current={home.aria}
                    //aria-current="page"
                  >
                    HOME
                  </a>
                </Link>
              </li>
              <li
                className="nav-item me-2"
                //data-bs-toggle="collapse"
              >
                <Link href="/drinks">
                  <a
                    className={drinks.class}
                    onClick={linkClick}
                    //aria-current={home.aria}
                    //aria-current="page"
                  >
                    Drinks
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/gallery">
                  <a
                    className={gallery.class}
                    onClick={linkClick}
                    //aria-current={home.aria}
                    //aria-current="page"
                  >
                    Gallery
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/events">
                  <a
                    className={events.class}
                    onClick={linkClick}
                    //aria-current={home.aria}
                    //aria-current="page"
                  >
                    Events
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/giftvoucher">
                  <a
                    className={giftvoucher.class}
                    onClick={linkClick}
                    //aria-current={home.aria}
                    //aria-current="page"
                  >
                    gift voucher
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/contact">
                  <a
                    className={contact.class}
                    onClick={linkClick}
                    //aria-current={home.aria}
                    //aria-current="page"
                  >
                    contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </>
  );
}
