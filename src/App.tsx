import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.tsx';
import AboutUs from '@/pages/about-us/AboutUs.tsx';
import Blog from './pages/blog/Blog.tsx';
import Contacts from './pages/contacts/Contacts.tsx';
import Course from './pages/course/Course.tsx';
import Courses from './pages/courses/Courses.tsx';
import Event from './pages/event/Event.tsx';
import EventsGridView from './pages/events-grid-view/EventsGridView.tsx';
import EventsListView from './pages/events-list-view/EventsListView.tsx';
import SinglePost from './pages/single-post/SinglePost.tsx';
import NotFound from './pages/not-found/NotFound.tsx';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';
import { createContext, useEffect, useState } from 'react';
import { IModalProps } from '@/types/modal.types.ts';
import ModalWrapper from '@components/modal/ModalWrapper.tsx';

export const ModalContext = createContext<IModalProps | null>(null);

function App() {

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isOpenModal) document.documentElement.style.overflowY = 'hidden';
    else document.documentElement.style.overflowY = 'visible';
  }, [isOpenModal]);

  return (
    <BrowserRouter>
      <div className={`wrapper flex flex-col justify-between h-full relative`}>
        <ModalWrapper isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        <ModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
          <div>
            <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Homepage isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />} >
                <Route path="/register" element={<Homepage isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />} />
                <Route path="/login" element={<Homepage isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />} />
              </Route>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/course" element={<Course />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/event" element={<Event />} />
              <Route path="/events-grid" element={<EventsGridView />} />
              <Route path="/events-list" element={<EventsListView />} />
              <Route path="/single-post" element={<SinglePost />} />
            </Routes>
          </div>
          <Footer />
        </ModalContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
