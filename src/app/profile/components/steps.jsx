import AddAccomplishments from "./add-accomplishments";
import AddEducationModal from "./add-education";
import AddWorkExperienceModal from "./add-work-experience";
import UploadResumeModal from "./upload-resume";

export const PROFILE_STEPS = [
  {
    id: 0,
    title: "Education",
    description: "School info, field of study",
    img: "src/assets/images/Book.png",
    modal_title: "Add Education",
    modal: <AddEducationModal />,
  },
  {
    id: 1,
    title: "Work Experience",
    description: "Where you've worked, your role",
    img: "src/assets/images/Briefcase.png",
    modal_title: "Add Work Experience",
    modal: <AddWorkExperienceModal />,
  },
  {
    id: 2,
    title: "Interests & Skills",
    description: "Career interests and skillset",
    img: "src/assets/images/Star-half.png",
  },
  {
    id: 3,
    title: "Certifications",
    description: "Certifications worth highlighting",
    img: "src/assets/images/Award.png",
  },
  {
    id: 4,
    title: "Accomplishments",
    description: "Personal achievement & impact",
    img: "src/assets/images/trophy-line.png",
    modal_title: "Add Accomplishments",
    modal: <AddAccomplishments />,
  },
  {
    id: 5,
    title: "Upload Resume",
    description: "CV, portfolio",
    img: "src/assets/images/upload-cloud-line.png",
    modal_title: "Upload Resume",
    modal: <UploadResumeModal />,
  },
];
