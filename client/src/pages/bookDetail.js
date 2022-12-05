import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import Book1 from "../assets/book1.jpeg";

const data = [
  {
    cover: Book1,
    title: "Life with simplycity",
    author: "dika",
  },
];

const BookDetail = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-8 p-5 border border-dark rounded-5">
        {data.map((item) => {
          return (
            <Container className="row">
              <div className="col-3">
                <img src={item.cover} alt="" />
              </div>
              <div className="col-9">
                <h3 className="mb-2"> {item.title} </h3>
                <h5 className="mb-4"> {item.author} </h5>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas sequi fugiat fugit eum laboriosam dicta, ea
                  laudantium quis quod nostrum, error vel earum culpa deserunt
                  tenetur exercitationem nihil! Quod reprehenderit commodi odit
                  expedita? Asperiores optio, nisi neque enim dolores vero?
                  Placeat eum quam cum repellat, sint molestiae suscipit ratione
                  illo tempora quaerat odit nisi, id, expedita reprehenderit
                  fuga! Voluptates modi asperiores illum soluta error voluptate
                  minima nobis molestias, provident id?
                </p>
              </div>
              <div className="text-center">
                <h5 className="mt-3">tersedia 1 buku untuk dipinjam</h5>
              </div>
            </Container>
          );
        })}
      </div>
    </div>
  );
};

export default BookDetail;
