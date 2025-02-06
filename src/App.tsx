import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Blog from './pages/Blog.tsx';
import Contacts from './pages/Contacts.tsx';
import Course from './pages/Course.tsx';
import Courses from './pages/Courses.tsx';
import Event from './pages/Event.tsx';
import EventsGridView from './pages/EventsGridView.tsx';
import EventsListView from './pages/EventsListView.tsx';
import SinglePost from './pages/SinglePost.tsx';
import NotFound from './pages/NotFound.tsx';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';

function App() {



  return (
    <>
      <div className={'wrapper'}>
        <BrowserRouter>
          <Header isMainBgColor={true}/>
          <Routes>
            <Route path='*' element={ <NotFound /> } />
            <Route path='/' element={ <Homepage /> }/>
            <Route path='/about' element={ <AboutUs /> }/>
            <Route path='/blog' element={ <Blog /> }/>
            <Route path='/contacts' element={ <Contacts /> }/>
            <Route path='/course' element={ <Course /> }/>
            <Route path='/courses' element={ <Courses /> }/>
            <Route path='/event' element={ <Event /> }/>
            <Route path='/events-grid' element={ <EventsGridView /> }/>
            <Route path='/events-list' element={ <EventsListView /> }/>
            <Route path='/single-post' element={ <SinglePost /> }/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
