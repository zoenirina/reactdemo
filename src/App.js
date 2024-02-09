import Navbar from './Component/Navbar/Navbar'
import CarouselHome from './Component/CarouselHome/CarouselHome'
import ServiceProperty from './Component/ServiceProperty/ServiceProperty'
import WhyUs from './Component/ServiceCard/WhyUs'
import ServiceOffreCard from './Component/ServiceOffreCard/ServiceOffreCard'
import Slide from './Component/Slide/Slide'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import ServiceStatistic from './Component/ServiceStatistic/ServiceStatistic'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <CarouselHome/>
      <ServiceOffreCard></ServiceOffreCard>
      <ServiceProperty/> 
    <WhyUs/>
    <Slide/>
    <ServiceStatistic/>
    </div>
  );
}

export default App;
