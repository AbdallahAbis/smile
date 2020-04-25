const size = {
  phone: "37.5em",
  tabPort: "56.25em",
  tabLand: "75em",
  laptop: "87.5em",
  desktop: "112.5em"
};

const device = {
  phone: `only screen and (max-width: ${size.phone})`,
  tabPort: `only screen and (max-width: ${size.tabPort})`,
  tabLand: `only screen and (max-width: ${size.tabLand})`,
  laptop: `only screen and (max-width: ${size.laptop})`,
  desktop: `only screen and (min-width: ${size.desktop})`
};
export default device;
