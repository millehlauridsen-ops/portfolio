import PageLayout from "../../components/PageLayout/PageLayout";
import WebsiteProject from "../../components/WebsiteProject/WebsiteProject";

export default function WebsitesPage() {
  return (
    <PageLayout title="Websites">
      <WebsiteProject
        title="Lumina One"
        description="Exam project from 1. semester - focusing on design system, components and interactiveness."
        figmaUrl="https://www.figma.com/proto/SLGW4anE9BsMk3w1r32Zgi/Landingpage---Lumina-one--Copy-?node-id=2245-3207&t=woMQgg71ZcWzlkzS-1"
        liveUrl="https://millehlauridsen-ops.github.io/LuminaOneExam/"
        githubUrl="https://github.com/millehlauridsen-ops/LuminaOneExam"
      />

      <WebsiteProject
        title="Customer Experience"
        description="Customer Experience project focusing on target audience, visual identity and user journeys."
        figmaUrl="https://www.figma.com/proto/DDOsqOvKqXQ5mM1FPOejjj/Customer-experience?node-id=622-1013&t=VkqCAg3RnLdMnOEC-1"
        liveUrl="https://kubraf96.github.io/customer-experience-exam-trial/"
        githubUrl="https://github.com/kubraf96/customer-experience-exam-trial"
        reverse
      />

      <WebsiteProject
        title="Consult on Sundhedsshoppen"
        description="Consulting one of my friends with a low-fidelity mockup for his customer 'Sundhedsshoppen'"
        figmaUrl="https://www.figma.com/proto/7Oxy6RujSiCJs9tRg4Rr6S/Sundhedsshoppen?node-id=1338-1312&t=qFGaywbgVmIFwQt2-1"
      />
    </PageLayout>
  );
}
