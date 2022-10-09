import React from "react";
import { createRoot } from "react-dom/client";
import DarkModeApp from "./DarkModeApp";

import './styles/style.css'


const root = createRoot(document.getElementById('root'));
root.render(<DarkModeApp />)