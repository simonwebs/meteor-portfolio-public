import {
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { NotFound } from '../../pages/NotFound';
// eslint-disable-next-line import/no-unresolved
import { Home } from '../../pages/Home';
// eslint-disable-next-line import/no-unresolved
import { Skills } from '../../pages/Skills';
// eslint-disable-next-line import/no-unresolved
import { Projects } from '../../pages/Projects';
// eslint-disable-next-line import/no-unresolved
import { Blog } from '../../pages/Blog';
// eslint-disable-next-line import/no-unresolved
import { Contact } from '../../contacts/Contact';
// eslint-disable-next-line import/no-unresolved
import { SignUp } from '../auth/SignUp';
// eslint-disable-next-line import/no-unresolved
import { SignedIn } from '../auth/SignedIn';
// eslint-disable-next-line import/no-unresolved
import { Testimonials } from '../../pages/Testimonials';

// eslint-disable-next-line import/no-unresolved
import { ContactList } from '../../contacts/ContactList';


export const MainRoutes = () => (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactList" element={<ContactList/>} />
        <Route path="testimonials" element={<Testimonials/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signedIn" element={<SignedIn />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
  );
