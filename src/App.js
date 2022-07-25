import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PATHS } from './utils/router';

const withLayout = (LayoutCmp, RenderCmp) => <LayoutCmp><RenderCmp /></LayoutCmp>;

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          {PATHS.map(({ key, path, layout, component: Cmp }) => (
            <Route
              key={key}
              path={path}
              element={layout ? withLayout(layout, Cmp) : <Cmp />}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
};

export default App;
