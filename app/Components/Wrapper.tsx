// app/Components/ProviderWrapper.tsx
"use client"; // Ensure this is a Client Component

import { Provider } from "react-redux";
import { store } from "../Redux/Store";

const ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
