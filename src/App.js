import Navbar from './Component/Navbar/Navbar'
import CarouselHome from './Component/CarouselHome/CarouselHome'
import ServiceProperty from './Component/ServiceProperty/ServiceProperty'
import WhyUs from './Component/ServiceCard/WhyUs'
import ServiceOffreCard from './Component/ServiceOffreCard/ServiceOffreCard'
import Slide from './Component/Slide/Slide'
//import Carousel from './Component/Carousel/Carousel.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {Carousel} from 'react-bootstrap'

import ServiceStatistic from './Component/ServiceStatistic/ServiceStatistic'
//import ExampleCarouselImage from 'react-bootstrap/ExampleCarouselImage'

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <CarouselHome/>
     
   {/**    <Carousel>
      <Carousel.Item>
       <div className='demo'>coucou</div>
        <Carousel.Caption>
          
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='demo'>fff</div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='demo'>vvv</div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

*/}
<ServiceOffreCard></ServiceOffreCard>
    <ServiceProperty/> 
    <WhyUs/>
    <Slide/>
    <ServiceStatistic/>
    </div>
  );
}

export default App;
