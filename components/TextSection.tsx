import React from "react";

const TextSectionComponent = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <section className="section is-medium bg-primary has-text-centered is-long">
        <div className="container">{children}</div>
      </section>
    </>
  );
};

export default TextSectionComponent;
