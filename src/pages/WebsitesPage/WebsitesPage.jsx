import PageLayout from "../../components/PageLayout/PageLayout";
import WebsiteProject from "../../components/WebsiteProject/WebsiteProject";

export default function WebsitesPage() {
  return (
    <PageLayout title="Websites">
      <WebsiteProject
        title="Lumina One"
        description="En landingpage-prototype med fokus på visuelt hierarki, navigation og et tydeligt digitalt udtryk."
        figmaUrl="https://www.figma.com/proto/SLGW4anE9BsMk3w1r32Zgi/Landingpage---Lumina-one--Copy-?node-id=2245-3207&t=woMQgg71ZcWzlkzS-1"
      />

      <WebsiteProject
        title="Customer Experience"
        description="Et websiteprojekt med fokus på customer experience og en interaktiv brugerrejse."
        figmaUrl="https://www.figma.com/proto/DDOsqOvKqXQ5mM1FPOejjj/Customer-experience?node-id=622-1013&t=VkqCAg3RnLdMnOEC-1"
        liveUrl="https://kubraf96.github.io/customer-experience-exam-trial/"
        reverse
      />

      <WebsiteProject
        title="Consult on Sundhedsshoppen"
        description="Et redesign af Sundhedsshoppen med fokus på brugervenlighed og tilgængelighed."
        figmaUrl="https://www.figma.com/proto/7Oxy6RujSiCJs9tRg4Rr6S/Sundhedsshoppen?node-id=1338-1312&t=qFGaywbgVmIFwQt2-1"
      />
    </PageLayout>
  );
}
