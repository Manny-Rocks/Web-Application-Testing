import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';

afterEach(rtl.cleanup);

