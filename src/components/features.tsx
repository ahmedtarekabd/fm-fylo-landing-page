import React from "react";
import Feature from "./feature";

const Features = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 my-8">
      <Feature
        icon="/assets/images/icon-access-anywhere.svg"
        title="Access your files, anywhere"
        description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <Feature
        icon="/assets/images/icon-security.svg"
        title="Security you can trust"
        description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />
      <Feature
        icon="/assets/images/icon-collaboration.svg"
        title="Real-time collaboration"
        description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />
      <Feature
        icon="/assets/images/icon-any-file.svg"
        title="Store any type of file"
        description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </div>
  );
};

export default Features;
