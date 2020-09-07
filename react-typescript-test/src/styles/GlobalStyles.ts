import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`
   * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html,body,#root{
        max-height:100vh;
        max-width:100vw;
        height:100%;
        width:100%;
        font-family:sans-serif;
    }

    *,button,input{
        background:none;
        border:none;
    }
    :root {
        --primary: #ff5959;
        --secondary: #facf5a;
        --search: #49beb7;
        --white: #fff;
        --gray: #085f63;
        --dark: #000;
    }
`