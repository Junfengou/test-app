import React from 'react'
import { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import '../app/globals.css'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Header from '@/helpers/Header'



function MyApp({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#558a55'
      }
    },
    typography: {
      fontFamily: [
        'FrenchFries'
      ].join(',')
    }
  })

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp