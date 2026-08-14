import PageLayout from "../../components/PageLayout/PageLayout";
import AppProject from "../../components/AppProject/AppProject";

export default function AppsPage() {
  return (
    <PageLayout title="Apps">
      <AppProject
        title="WebApp exam: PubHub"
        projectDescription="The exam project in 2nd semester: WebApp. The project was about creating a concept for an app and designing and coding a responsive web application using React."
        conceptDescription="We wanted to create an app we ourselves felt we needed in our everyday life of a young person living in Aarhus. Our idea was creating a digital platform that helps users discover and engage with local events and bars. Often, you hear from people living here, that they go to the same bars over and over again - not because they want to, but because they don't know wherelse to go. And we wanted to meet that need."
        processDescription="We really wanted to 'get our hands dirty' with this project. We wanted to experiment and be thorough in our approach. We started out with paper sketches and low-fidelity wireframes to visualize our ideas before moving on to high-fidelity designs in Figma. This approach allowed us to iterate and be creative for much longer than we find ourselves being when we're on our devices from the start."
        designDescription="The answer is yes, we know. We wanted to create a design that was fun, engaging and head-turning. Leaning into the very recognizable branding of 'pornhub', we found that people became extremely intruiged and interested in our concept. It was an experiment, and it worked as we had hoped."
        figmaUrl="https://www.figma.com/proto/lXFzWTacQtC097wXLAfvcD/WebApp-https://www.figma.com/design/lXFzWTacQtC097wXLAfvcD/WebApp-eksamen?node-id=20-12&t=gl1LqBFB25wcw0AN-1?node-id=779-2160&page-id=20%3A12&starting-point-node-id=779%3A2160&t=c5NLzi0PM33xtBqv-1"
        liveUrl="https://eaa25mtha.github.io/webapp-eksamen/"
      />
    </PageLayout>
  );
}
