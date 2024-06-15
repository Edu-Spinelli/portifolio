const helpObj = {
  "commands": [
    [
    "'about'",
    "Information about me. (Eduardo Henrique Spinelli)",
    ],
    [
      "'projects'",
      "Some projects that I have worked on."
    ],

    ["'sudo'",
      "???"
    ],
  
    ["'banner'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ]
  ],
}

const createHelp = () : string[] => {
  const help : string[] = []

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(12 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  return help
}

export const HELP = createHelp();
