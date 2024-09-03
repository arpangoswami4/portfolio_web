import React from "react";

const WebsiteInfo = () => {
  return (
    <section>
      <h3 className="text-3xl mb-2 text-black text-center mt-8">
        How I built this Website:
      </h3>
      <p className="mb-8 text-black  px-24 text-center">
        This portfolio website is built with decoupled backend API and frontend
        UI codebases. The frontend is hosted on Vercel and the backend is hosted
        on Render. The frontend is built with React using Javascript and
        TailwindCss is used for styling. The API calls to the backend are made
        using axios library. For all the icons in the website iconify library is
        used and the testimonial carousel is built using primereact library.
        Link to{" "}
        <a
          href="https://github.com/arpangoswami4/portfolio_web"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Frontend UI code Repository.
        </a>{" "}
        The backend API is built with Ruby on Rails in API mode. Postgres is
        used as the Relational Database and Rapidapp.io is used to host the
        Database. When a website visitor submits his/her contact for
        communication, after passing all the validation, the visitor details are
        submitted and an acknowledgement mail is sent to the mail of the
        visitor. Action Mailer is used to send the mail.A Similar feature is
        implemented for Testimonials as well.{" "}
        <span className="italic">
          Though, right now in production the server is unable to send the email
          as render.com(the hosting platform for the backend) blocks the usage
          of smtp port i.e. 587.
        </span>{" "}
        The feature is fully implemented in the code base and can be viewed in
        Github and used by setting up in local. Active Storage is used to store
        the avatar of the testimonial submitter. Cloudinary is used as the
        remote image hosting platform with the help of cloudinary gem.{" "}
        <span className="italic">
          {" "}
          All the backend server functionality might take some extra time(2-3
          minutes) in production as the free tier of render.com is used which
          builds and runs the container from the codebase for every first
          request.{" "}
        </span>
        Link to{" "}
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
