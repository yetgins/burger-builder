import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";


export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <BurgerBuilder />,
    title: 'Home',
    isLink: true,
  },

];
