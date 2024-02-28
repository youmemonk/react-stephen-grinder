import Accordion from "./components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "dhdf",
      label: "Can I use react in a project?",
      content: "this is react content",
    },
    {
      id: "24gf",
      label: "Can I use javascript in a project?",
      content: "this is javascript content",
    },
    {
      id: "df9g",
      label: "Can I use typescript content in a project?",
      content: "this is typescript content",
    },
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
