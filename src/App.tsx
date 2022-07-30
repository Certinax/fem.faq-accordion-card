import bgPatternMobile from "./assets/images/bg-pattern-mobile.svg";
import bgPatternDesktop from "./assets/images/bg-pattern-desktop.svg";
import illustrationMobile from "./assets/images/illustration-woman-online-mobile.svg";
import illustrationDesktop from "./assets/images/illustration-woman-online-desktop.svg";
import illustrationBoxDesktop from "./assets/images/illustration-box-desktop.svg";
import chevron from "./assets/images/icon-arrow-down.svg";

const Accordion: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <details className="block w-full border-b-2 border-fem-ligh-grayish-blue">
      <summary className="select-none cursor-pointer py-3 text-xs flex items-center justify-between">
        {title}
        <img
          className="transition-all duration-100 ease-in-out"
          src={chevron}
        ></img>
      </summary>
      <div className="text-xs pb-4 pr-4">{content}</div>
    </details>
  );
};

const FAQList: React.FC<{ faqs: typeof FAQS }> = ({ faqs }) => {
  return (
    <>
      {faqs.map((faq) => (
        <Accordion title={faq.title} content={faq.content} />
      ))}
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen  p-8">
      <div className="">
        <div className="max-w-sm shadow-2xl mt-44 mx-auto rounded-2xl bg-white">
          <div className="w-full px-8 relative origin-center -translate-y-[60%]">
            <img className="" src={illustrationMobile} alt="" />
            <img
              className="absolute top-0 left-0 px-8 -mt-[5vmin]"
              src={bgPatternDesktop}
              alt=""
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl text-center font-semibold">FAQ</h2>
            <FAQList faqs={FAQS} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const FAQS = [
  {
    title: "How many team members can I invite?",
    content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    title: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },

  {
    title: "How do I reset my password?",
    content:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },

  {
    title: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },

  {
    title: "Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];
