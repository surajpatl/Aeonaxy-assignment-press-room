import Form from "./ContactForm";

export default function ContactUs() {
  return (
    <div className="mb-[750px]">
      <div className="grid grid-cols-3">
        <h1 className="text-4xl font-semibold mb-[60px]">Contact Us</h1>
        <div className="col-span-2">
          <p className="text-xl leading-relaxed w-[80%]">
            If you’re a member of the media and would like to get in touch,
            please send us a note. For non-press-related inquiries, please use
            our general contact page.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
