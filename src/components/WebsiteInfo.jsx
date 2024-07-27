import React from "react";

const WebsiteInfo = () => {
  return (
    <section>
      <h3 className="text-3xl mb-2 text-black text-center mt-4">
        How I built this Website:
      </h3>
      <p className="mb-8 text-black  px-24 text-center">
        This portfolio website is built with decoupled backend API and frontend
        UI codebases. The frontend is built with React using javascript and
        Tailwind Css is used for styling. The API calls to the backend are made
        using axios library.For all the icons in the website iconify library is
        used and the testimonial carousel is built using prime react library.
        Link to{" "}
        <a
          href="https://github.com/arpangoswami4/portfolio_web"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Frontend UI code Repository.
        </a>
        The backend API is built with Ruby on Rails in api mode. Postgres is
        used as the Relational Database. When a website visitor submits the
        contact, after passing all the validation the visitor details are
        submitted and an acknowledgement mail is sent to the mail of the
        visiter. Action Mailer is used to send the mail. Similar feature is
        applied for Testimonials. Active Storage is used to store the avatar of
        the testimonial submitter. Link to{" "}
        <a
          href="https://github.com/arpangoswami4/portfolio_api"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Backend API code Repository.
        </a>
      </p>
    </section>
  );
};

export default WebsiteInfo;
