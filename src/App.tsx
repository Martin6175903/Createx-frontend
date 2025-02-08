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
import { createContext, useEffect, useState } from 'react';
import { IModalProps } from '@/types/modal.types.ts';
import ModalForm from '@components/forms/ModalForm.tsx';

export const ModalContext = createContext<IModalProps | null>(null);

function App() {

  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    whoOpenModal: ''
  });

  useEffect(() => {
    const {isOpen} = modalInfo;

    if (isOpen) document.documentElement.style.overflowY = 'visible';
  }, [modalInfo.isOpen]);

  return (
    <>
      <div className={`wrapper flex flex-col justify-between h-full relative`}>
        <div className={`${modalInfo.isOpen ? 'modal' : 'hidden'} flex items-center justify-center`}>
          <ModalForm modalInfo={modalInfo} setModalInfo={setModalInfo}/>
        </div>
        <BrowserRouter>
          <ModalContext.Provider value={{ modalInfo, setModalInfo }}>
            <Header/>
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
          </ModalContext.Provider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
