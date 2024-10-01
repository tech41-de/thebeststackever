import { Center } from "styled-system/jsx/center";
import { Avatar } from "~/components/ui/avatar";
import { Text } from "~/components/ui/text";
import { Button, type ButtonProps } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { IconButton } from "~/components/ui/icon-button";

export default function MyReactComponent() {
  const [dark, setDark] = React.useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    var element = document.body;
    element.classList.toggle("dark-mode");

  };
  return (
    <main>
      <center>
        <div className="headerTop">
            <IconButton onClick={toggleTheme}>
          {!dark && <Moon />}
          {dark && <Sun />}
        </IconButton>
        </div>
        <Text size="7xl">The best JAMstack ever</Text>
        <Text size="xl">
           <a href="https://www.cloudflare.com/">Cloudflare Pages</a> - 
           <a href="https://nodejs.org/">Node</a> - 
           <a href="https://astro.build/">Asto</a> - 
           <a href="https://react.dev/">React</a> - 
           <a href="https://panda-css.com/">Panda CSS</a> - 
           <a href="https://ark-ui.com/">ARK UI</a> - 
           <a href="https://park-ui.com/">Park UI</a> - 
           <a href="https://lucide.dev/">Lucide</a>
             </Text>
        <br />
        <a href="https://github.com/tech41-de/thebeststackever"><img src="github.svg"  width={75} height={75}/></a>
        <br />
        <br />
       
        <img src="/android-chrome-512x512.png" width={450} height={450}/>
        <Avatar name="Mathias Dietrich" src="/mat.png" /><Text size="sm">TECH41 GmbH <a href="https://tech41.de">tech41.de</a></Text>
      </center>
    </main>
  );
}
