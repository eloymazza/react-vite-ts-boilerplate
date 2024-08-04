import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

import GlobalStyles from "../theme/GlobalStyles";
import { theme } from "../theme/theme";

type Props = {
  children: ReactNode;
};

const StylesProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StylesProvider;
