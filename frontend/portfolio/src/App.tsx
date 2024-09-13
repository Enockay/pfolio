
import PortfolioHeader from './header';
import Introduction from './introduction';
import SkillsSection from './skills';
import ProjectShowcase from './projects';

function App() {
  return (
    <div className="bg-stone-100 min-h-screen">
      <PortfolioHeader />
      <Introduction />
      <SkillsSection />
      <ProjectShowcase/>
    </div>
  );
}

export default App;
