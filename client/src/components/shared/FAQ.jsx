import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion.jsx";

const FAQ = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#393939]">
        Frequently Ask<span className="text-[#d30c0c]">ed Questions</span>
      </h2>

      <Accordion type="single" collapsible className="space-y-4">
        {/* item-1 */}

        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer">
            How do I create a profile on HireBird?
          </AccordionTrigger>

          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            To create a profile, click on the “Sign Up” button, choose
            Candidate, and complete the registration form with your name, email,
            password, contact number, and gender. Once submitted, you can
            personalize your profile, add skills, bio, resume, and start
            applying to jobs.
          </AccordionContent>
        </AccordionItem>

        {/* item-2 */}

        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer">
            How do I post a job on HireBird?
          </AccordionTrigger>

          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            After registering as a Recruiter, go to your Dashboard and click on
            “Post a Job”. Fill in the job title, description, requirements,
            location, and salary. Once reviewed, your listing will go live for
            candidates to apply.
          </AccordionContent>
        </AccordionItem>

        {/* item-3 */}

        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer">
            Can I apply for multiple jobs at once?
          </AccordionTrigger>

          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            Yes, you can apply to as many jobs as you like. Simply click the
            “Apply” button on each job listing, and your application will be
            submitted with your saved resume and profile details.
          </AccordionContent>
        </AccordionItem>

        {/* item-4 */}

        <AccordionItem value="item-4">
          <AccordionTrigger className="cursor-pointer">
            Are remote jobs available on HireBird?
          </AccordionTrigger>

          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            Absolutely. HireBird features remote, hybrid, and on-site
            opportunities. Use the “Remote” filter in the job search section to
            view positions that allow working from home.
          </AccordionContent>
        </AccordionItem>

        {/* item-5 */}

        <AccordionItem value="item-5">
          <AccordionTrigger className="cursor-pointer">
            How can I manage or edit my job postings?
          </AccordionTrigger>

          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            Go to your Recruiter Dashboard, select the job listing you want to
            manage, and click “Edit” or “Delete” as needed. You can update job
            details, close positions, or repost jobs anytime.
          </AccordionContent>
        </AccordionItem>

        {/* item-6 */}

        <AccordionItem value="item-6">
          <AccordionTrigger className="cursor-pointer">
            How do I contact support if I face issues?
          </AccordionTrigger>

          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            You can reach our support team via the “Contact Us” page or by
            emailing{" "}
            <a
              href="mailto:support@hirebird.co.us"
              className="text-blue-600 hover:underline"
            >
              support@hirebird.co.us
            </a>
            . We’re available 7 days a week to assist you with technical or
            account-related issues.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
