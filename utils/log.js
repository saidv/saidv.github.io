export const displayFancyLogs = () => {
  const asciiArt =
    " ____        _     _   _   _                     _                  \n" +
    " / ___|  __ _(_) __| | | | | | ___  _   _ _ __ __| | __ _ _ __   ___ \n" +
    " \\___ \\ / _` | |/ _` | | |_| |/ _ \\| | | | '__/ _` |/ _` | '_ \\ / _ \\\n" +
    "  ___) | (_| | | (_| | |  _  | (_) | |_| | | | (_| | (_| | | | |  __/\n" +
    " |____/ \\__,_|_|\\__,_| |_| |_|\\___/ \\__,_|_|  \\__,_|\\__,_|_| |_|\\___|\n" +
    "                                                                      ";

  console.log("%c " + asciiArt, "color: #6b17e8;");

  console.log(
    "%c Hope you like what you see :)",
    "color: #6b17e8; padding: 6px;"
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.",
    "color: #6b17e8; font-style: italic; padding: 6px;"
  );
};
