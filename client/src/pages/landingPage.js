import React from "react";
import Card from "react-bootstrap/Card";
import Book1 from "../assets/book1.jpeg";
import Book2 from "../assets/book2.jpeg";
import Book3 from "../assets/book3.jpg";
import Book4 from "../assets/book4.jpg";
import Book5 from "../assets/book5.jpg";
import Book6 from "../assets/book6.jpeg";
import Book7 from "../assets/book7.jpg";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const data = [
  {
    cover: Book1,
    title: "Life with simplycity",
    author: "dika",
  },
  {
    cover: Book2,
    title: "children book cover",
    author: "tere",
  },
  {
    cover: Book3,
    title: "your book cover",
    author: "kaka",
  },
  {
    cover: Book4,
    title: "peony's world",
    author: "dina",
  },
  {
    cover: Book5,
    title: "Photoshop cc cs untuk pemula",
    author: "ahamd",
  },
  {
    cover: Book6,
    title: "belajar adobe photoshop cc",
    author: "sarbini",
  },
  {
    cover: Book7,
    title: "panduan indesign untuk pemula",
    author: "alex",
  },
];

const LandingPage = () => {
  return (
    <div className="container">
      <div className="mt-4 mb-5">
        <h1>Daftar Buku</h1>
      </div>
      <div className="container mb-5">
        <Form.Control
          type="search"
          placeholder="Cari Buku"
          className="rounded-5"
          aria-label="Search"
        />
      </div>
      <Link to="/book" className="text-decoration-none">
        <div className="row row-cols-lg-5 g-5 g-lg-4 text-dark text-center">
          {data.map((item) => {
            return (
              <div>
                <Card>
                  <img src={item.cover} alt="" />
                  <Card.Body>
                    <Card.Title>{item.title} </Card.Title>
                    <Card.Text>{item.author}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
