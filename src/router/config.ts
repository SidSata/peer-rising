const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/teachers"],
    exact: true,
    component: "Teachers",
  },
  {
    path: ["/plans"],
    exact: true,
    component: "Plans",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "ContactPage",
  }
];

export default routes;
