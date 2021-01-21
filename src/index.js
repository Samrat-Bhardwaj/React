import React from "react";
import ReactDom from "react-dom";

function QuoteList() {
  return (
    <section>
    <Quote></Quote>
    <Quote></Quote>
    <Quote></Quote>
    </section>
  );
}

const Quote = () => {
  return (
    <section>
    <Image/>
    <Author/>
    </section>
  )
};

const Image = () => {
  return 
  (<img
    src="https://2uc5db1v032h5jwcm2gal07i-wpengine.netdna-ssl.com/wp-content/uploads/legacy/sites/default/files/new2.jpg"
    alt=""
  />);
);

const Author = () => {
  return <h3>Samrat</h3>;
};

ReactDom.render(<QuoteList />, document.getElementById("root"));