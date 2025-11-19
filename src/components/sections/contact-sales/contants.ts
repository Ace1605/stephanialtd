interface ContactLink {
  value: string;
  label?: string;
}

interface ContactMean {
  title: string;
  description: string;
  btnText: string;
  backTitle: string;
  links: ContactLink[];
}

export const contactMeans: ContactMean[] = [
  {
    title: "Call Us",
    description:
      "Get quick answers to any questions about our engineering services",
    btnText: "Contact Us",
    backTitle: "Phone Numbers",
    links: [
      { value: "+1 251 910 4296", label: "USA Office" },
      { value: "+44 7575 885 942", label: "UK Office" },
      { value: "+234 813 464 6487", label: "West Africa" },
      { value: "+234 913 303 3349", label: "West Africa" },
    ],
  },
  {
    title: "Get in touch",
    description: "Send us a message or email for engineering consultations",
    btnText: "Contact Support",
    backTitle: "Contact Methods",
    links: [
      { value: "info@stephanialtd.com" },
      { value: "+1 251 910 4296", label: "USA Office" },
      { value: "https://wa.me/447452230428" },
      { value: "https://wa.me/2349133033349" },
    ],
  },
  {
    title: "Project Consultation",
    description:
      "Discuss your engineering project requirements with our experts",
    btnText: "Request Consultation",
    backTitle: "Email Address",
    links: [{ value: "info@stephanialtd.com" }],
  },
];
